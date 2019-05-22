import axios from 'axios'
import { message } from 'antd'
import store from '../redux'
import { actions } from '../redux/modules/app'
import { getToken, clearUserCache } from './auth'

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json', // application/x-www-form-urlencoded
}

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
})

// request拦截器
/* eslint-disable no-param-reassign */
service.interceptors.request.use(config => {
  Object.assign(config.headers, defaultHeaders)
  config.headers['access-token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  return config
}, error => {
  // Do something with request error
  console.log(error)
  return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非"20000"时都表示发生错误
     */
    const res = response.data
    const resMessage = res.message || '未知错误'
    if (res.code !== 20000) {
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        clearUserCache()
        // 空白页面的重新登录提示框不需要取消按钮
        if (document.getElementById('root').childElementCount === 0) {
          window.location.reload()
        } else {
          store.dispatch(actions.showInvalidUserAlert())
        }
      }
      return Promise.reject(new Error(resMessage))
    }
    return res.data
  },
  error => {
    console.log(error)
    message.error(error.message, 5)
    return Promise.reject(error)
  },
)

const get = (url, params = {}, options = {}) => {
  const newParams = { ...params }
  // 防止IE浏览器缓存get请求
  newParams.t = new Date().getTime()
  return service({
    url,
    method: 'get',
    params: newParams,
    ...options,
  })
}

const post = (url, data = {}, options = {}) => service({
  url,
  method: 'post',
  data,
  ...options,
})

service.get = get
service.post = post
export default service
