const express = require('express')
const multer = require('multer')// 上传插件
const Result = require('../models/result')
const Book = require('../models/book')
const { UPLOAD_PATH } = require('../utils/constant')

const router = express.Router()

router.post(
  '/upload',
  multer({ dest: `${UPLOAD_PATH}/book` }).single('file'),
  function(req, res, next) {
    if (!req.file || req.file.length === 0) {
      new Result('上传电子书失败').fail(res)
    } else {
      const book = new Book(req.file)
      console.log(book)
      new Result('上传电子书成功').success(res)
    }
  }
)

module.exports = router