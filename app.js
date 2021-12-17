const express = require('express')
const router = require('./router')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const cors = require('cors')

// 创建 express 应用
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)


// 中间件
// const myLogger = function(req, res, next) {
//   console.log('myLogger')
//   next()
// }

// app.use(myLogger)

// 监听 / 路径的 get 请求
// app.get('/', function(req, res) {
//   throw new Error('something has error...')
// })

// const errorHandler = function (err, req, res, next) {
//   console.log('errorHandler...')
//   res.status(500)
//   res.send(err.toString())
// }

// app.use(errorHandler)

const privateKey = fs.readFileSync('./https/6606818_yoyu.online.key')
const pem = fs.readFileSync('./https/6606818_yoyu.online.pem')
const credentials = { key: privateKey, cert: pem }
const httpsServer = https.createServer(credentials, app)
const SSLPORT = 18082

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})

httpsServer.listen(SSLPORT, function() {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT)
})