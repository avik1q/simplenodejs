const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT||3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running at http://${this.address().address}:${port}/`);
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

});