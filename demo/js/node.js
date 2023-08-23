const http = require('http');

const port = 3000;

const options = {
  hostname: 'http://127.0.0.1',
  port: 5501,
  path: '/todos',
  method: 'GET'
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain;charset=utf8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('你好世界\n');
})

const req = http.request(options, res => {
  console.log(`状态码: ${res.statusCode}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.on('data', d => {
    process.stdout.write(d,);
  });

});

req.on('error', error => {
  console.error(error, '-----eee');
});

req.end();

server.listen(port, () => {
  console.log('------ok');
  // console.log(`服务器运行在 http://${hostname}:${port}/`);
});