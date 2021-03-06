/**
 * 随机生成id
 *
 * @returns {number} 生成后的id
 */
export function generateId() {
  return Math.floor(Math.random() * 10000)
}

/**
 * 根据给定变量格式化API地址
 *
 * @param url API地址
 * @param variables 变量集合
 * @returns 格式化后的API地址
 */
export function formatAPI(url, variables = {}) {
  let result = url
  const keys = Object.keys(variables)
  keys.forEach(key => {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), variables[key])
  })
  return result
}

/**
 * 深拷贝
 * 注意，JSON实现方式不能拷贝对象中的function
 *
 * @param obj 拷贝对象
 */
export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 下载附件
 *
 * @param {string} url 下载地址
 */
export function download(url) {
  const baseAPI = process.env.BASE_API || ''
  const fullPath = baseAPI.replace(/"/g, '') + url
  let path = ''
  const params = {}

  const fullPathSplit = fullPath.split('?')
  if (fullPathSplit.length > 1) {
    [path] = fullPathSplit
    fullPathSplit[1].replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => { params[k] = v })
  } else {
    path = fullPath
  }

  const form = document.createElement('form')
  form.action = path
  form.method = 'post'
  Object.keys(params).forEach(key => {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = key
    input.value = params[key]
    form.appendChild(input)
  })
  document.body.appendChild(form)
  form.submit()
  form.parentNode.removeChild(form)
}

/**
 * 打开一个新的浏览器窗口
 *
 * @param path 地址
 * @param options 可选参数
 * @param callback 回调方法
 */
export function openWindow(path, options = {}, callback) {
  let target = '/'
  if (typeof path === 'string') {
    target = path.startsWith('/') ? path : `/${path}`
  }
  const windowName = options.windowName || '_blank'
  const page = window.open(`#${target}`, windowName)
  if (options.title) {
    page.onload = () => {
      page.document.title = options.title
      page.window.sessionStorage.setItem('pageTitle', options.title)
    }
  }
  if (typeof callback === 'function') {
    const loop = setInterval(() => {
      if (page.closed) {
        clearInterval(loop)
        callback()
      }
    }, 500)
  }
}

/**
 * 引用目录下所有指定格式文件
 *
 * @param r require.context()
 * @example importAll(require.context('src/xxx', false, /\.js$/))
 */
export function importAll(r) {
  return r.keys().map(r)
}

/**
 * 引用指定子目录下所有文件
 *
 * @param r require.context()
 * @param directory 目录相对路径
 * @example importDirectory(require.context('src', true, /\.js$/), './pages/example')
 */
export function importDirectory(r, directory) {
  const files = []
  const keys = r.keys()
  keys.forEach(key => {
    if (key.startsWith(directory)) {
      files.push(r(key))
    }
  })
  return files
}
