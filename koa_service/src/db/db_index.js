// 数据库连接模块
// 引入Schema
require('./Schema/students')
const mongoose = require('mongoose');

const dbconnect = () => {
  return new Promise((resolve) => {
    mongoose.connect('mongodb://127.0.0.1:27017/undergraduate');

    mongoose.connection.on('open', () => {
      console.log('数据库连接成功');

      resolve()
    })
  })
}

module.exports = dbconnect

