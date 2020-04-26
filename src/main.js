
const express = require('express')
const app = express()
const morgan = require('morgan')

const { formatRes } = require('./utils/formatter')
const index = require('./routes/index')
const register = require('./routes/register')
const login = require('./routes/login')
const users = require('./routes/users')

// 注册全局
global.formatRes = formatRes

// 配置
const port = process.env.PORT || 3000 // 设置启动端口
// express-v4.16 支持，不添加时解析不了请求的参数
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'))

// 路由
app.use('/', index)
app.use('/index', index)
app.use('/register', register)
app.use('/login', login)
app.use('/users', users)

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).end()
})

// 启动服务
app.listen(port)
console.log(`Magic happens at http://localhost:${port}`)
