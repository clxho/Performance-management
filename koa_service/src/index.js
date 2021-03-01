const koa = require('koa')

const app = new koa()
// 引入数据库连接模块
const dbconnect = require('./db/db_index')
// 导入跨域
const cors = require('@koa/cors')
const koabody = require('koa-body')
// 引入注册中间件模块
const registerRouter = require('./routers/routers_index')
const path = require('path')

const koaStatic = require('koa-static')
app.use(koaStatic(path.resolve(__dirname,'../public')))


// 连接数据库
dbconnect().then(() => {
  app.use(cors())
  app.use(koabody())
  // 注册中间件
  registerRouter(app)

  // 监听端口
  app.listen(3004, () => {
    console.log('服务器连接成功');
  })
  

})

