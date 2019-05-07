import http from '../http'
import constants from '../constants'

export function getUserList() {
  return http.get(constants.BASE_API + '/user/list')
}
