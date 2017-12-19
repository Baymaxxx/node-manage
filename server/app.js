const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const cors = require('koa-cors')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const staticCache = require('koa-static-cache')
const session = require('koa-session-minimal')
const MongoStore = require('koa-generic-session-mongo')
const path = require('path')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

let cookie = {
  maxAge: 5 * 60 * 1000, // cookie有效时长
  expires: '',  // cookie失效时间
  path: '', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: true, // 是否只用于http请求中获取
  overwrite: '',  // 是否允许重写
  secure: '',
  sameSite: '',
  signed: '',
}
app.use(session({
  key: 'SESSION_ID',
  store: new MongoStore({}),
  cookie: cookie
}))

app.use(cors())

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
