import http from '../utils/http'
import constants from '../constants'

/* eslint-disable import/prefer-default-export */
export function getUserList() {
  return http.get(`${constants.BASE_API}/user/list`)
}
