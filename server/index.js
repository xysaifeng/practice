const http = require('http')

let n = 0;

const server = http.createServer((req, res) => {
  console.log(n++)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'X-Rquested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.setHeader('X-Powered-By', '3.2.1')

  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end('ok server')
})

server.listen(80, () => {
  console.log('服务器运行了');
})