// init project
const express = require("express");
const app = express();
const port = 3001

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/population.js", function(request, response) {
  response.sendFile(__dirname + "/population.js");
});

// listen for requests :)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
