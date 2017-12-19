const router = require('koa-router')()
const usersRouter = require('./users')

router.prefix('/api')

router.get('/', async (ctx, next) => {
  ctx.body = 'hello api'
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
