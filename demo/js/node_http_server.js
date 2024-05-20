
const http = require('http'); // 用于HTTP请求

const hostname = '127.0.0.1'
const port = 3000
let rest = null
const server = http.createServer((req, res) => {
  res.statusCode = 200
  // res.setHeader('Content-Type', 'text/plain')
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  // res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // res.end('你好世界\n')
  res.end(rest)
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})

const options = {
  host: 'www.freightower.com',
  port: 80,
  path: '/#/vessel/iframe/UFDZEKbeGbnjd3XLYdJr8fJotJAXMCixdK-9uRdVoMk/223',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => {
    rest = chunk
  });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData); // 假设返回的数据是JSON格式
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
});

req.on('error', (e) => {
  console.error(`请求错误: ${e.message}`);
});

req.end();

