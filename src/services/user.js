import http from '../utils/http'
import constants from '../constants'

export function getUserList() {
  return http.get(constants.BASE_API + '/user/list')
}
