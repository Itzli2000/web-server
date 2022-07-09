const express = require("express");
const app = express();
const port = 8080;

// Serve static content
app.use(express.static(`${__dirname}/public`));

app.get("/generic", function (req, res) {
    res.sendFile(`${__dirname}/public/generic.html`);
});

app.get("/elements", function (req, res) {
    res.sendFile(`${__dirname}/public/elements.html`);
});

app.get("/test", function (req, res) {
  res.send("Hello test");
});

app.get("*", function (req, res) {
  res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, () => console.log(`Running app in port ${port}`));
