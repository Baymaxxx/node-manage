const router = require('koa-router')()
const usersRouter = require('./users')
const bookRouter = require('./book')

const routes = [usersRouter, bookRouter]

module.exports = (app) => {
  routes.forEach((route) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true
      }))
  })
}
