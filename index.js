const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send("Hello from Home");
}

function handelProfile(req, res) {
  res.send("Your Pofile");
}

app.get("/", handleHome);

app.get("/profile", handelProfile);

app.listen(PORT, handleListening);
