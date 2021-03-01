const students = require('./students')
const Form = require('./Form')
const Login = require('./Login')


// 注册中间件路由
module.exports = (app) => {
  // 学生信息中间件
  app.use(students.routes())

  app.use(Form.routes())
  
  app.use(Login.routes())
}