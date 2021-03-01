const Router = require('@koa/router')

const jwt = require('jsonwebtoken')


const router = new Router()

router.post('/login', async (ctx) => {
  const {
    username,
    password
  } = ctx.request.body
  if (username != "admin" || password != "123456") {
    ctx.body = {
      meta: {
        msg: '用户名或密码错误',
        code: 0
      }
    }
    return
  }
  ctx.body = {
    data: {
      token: jwt.sign({
        username
      }, 'login')
    },
    meta: {
      msg: "登入成功",
      code: 1
    }
  }
})


module.exports = router