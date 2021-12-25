const { env } = require('./env')
const UPLOAD_PATH = env === 'dev' ? 'E:/work/2021year-end/test/upload/admin-upload-ebook' : '/root/upload/admin-upload/ebook';
const UPLOAD_URL = env === 'dev' ? 'http://yoyu.online:8089/admin-upload-ebook' : 'https://yoyu.online:8089/admin-upload-ebook';

module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2,
  debug: true,
  PWD_SALT: 'admin_imooc_node',
  PRIVATE_KEY: 'admin_imooc_node_test_youbaobao_xyz',
  JWT_EXPIRED: 60 * 60, // token失效时间
  UPLOAD_PATH,
  UPLOAD_URL,
  MIME_TYPE_EPUB: 'application/epub' // 老师那里解析结果为application/epub+zip
}