import Cookies from 'js-cookie'

let TokenKey = 'access-token'

export function setTokenKey(key) {
  TokenKey = key
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function clearUserCache() {
  removeToken()
}
