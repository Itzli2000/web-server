const http = require("http");
const port = 8080;

http
  .createServer((req, res) => {
    res.write("hello world");
    res.end();
  })
  .listen(port);

console.log("Listening in port ", port);
