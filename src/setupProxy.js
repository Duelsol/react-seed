const proxy = require('http-proxy-middleware')

const SERVER_URL = 'http://localhost:8080'

module.exports = function (app) {
  app.use(proxy('/api', {
    target: SERVER_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/': ''
    }
  }))
}
