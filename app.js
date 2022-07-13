const hbs = require("hbs");
const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// Serve static content
app.use(express.static(`${__dirname}/public`));

app.get("/", function (req, res) {
  res.render("home", {
    name: "Ariel Molina",
    title: "Node course",
  });
});

app.get("/generic", function (req, res) {
  // res.sendFile(`${__dirname}/public/generic.html`);
  res.render("generic", {
    name: "Ariel Molina",
    title: "Node course",
  });
});

app.get("/elements", function (req, res) {
  // res.sendFile(`${__dirname}/public/elements.html`);
  res.render("elements", {
    name: "Ariel Molina",
    title: "Node course",
  });
});

app.get("/test", function (req, res) {
  res.send("Hello test");
});

app.get("*", function (req, res) {
  res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, () => console.log(`Running app in port ${port}`));
