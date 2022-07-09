const http = require("http");
const port = 8080;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    // res.writeHead(200, { "Content-Type": "application/json" });
    const user = {
      name: "Ariel",
      id: 1,
    };
    res.write(JSON.stringify(user));
    res.end();
  })
  .listen(port);

console.log("Listening in port ", port);
