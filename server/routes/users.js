const router = require('koa-router')()
const DB = require('../models')

router.prefix('/api')

router
  .get('/users', async (ctx, next) => {
    await DB.Users.find({}, (err, docs) => {
      if (err) {
        ctx.throw(500);
        return;
      }
      ctx.response.body = {
        code: 200,
        msg: 'success',
        data: docs
      }
    })
  })
  .put('/users', async (ctx, next) => {
    await new DB.Users(ctx.request.body).save((err, docs) => {
      if (err) {
        ctx.throw(500);
        return;
      }
      ctx.response.body = {
        code: 200,
        msg: '注册成功',
        data: docs
      }
    })
  })
  .delete('/users', async (ctx, next) => {
    await DB.Users.remove({
      id: ctx.request.body.id
    }, (err, docs) => {
      if (err) {
        ctx.throw(500);
        return;
      }
      ctx.response.body = {
        code: 200,
        msg: '删除成功',
        data: docs
      }
    })
  })
  .post('/users', async (ctx, next) => {
    await new Promise((resolve, reject) => {
      DB.Users.update({
        id: ctx.request.body.id
      }, ctx.request.body, (err, docs) => {
        if(err) {
          reject(err);
        }else {
          resolve(docs);
        }
      })
    }).then((success) => {
      ctx.response.body = {
        code: 200,
        msg: '修改成功',
        data: ctx.request.body
      }
    })
  })

module.exports = router
