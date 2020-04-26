import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from Home");

const handelProfile = (req, res) => res.send("Your Pofile");

app.get("/", handleHome);

app.get("/profile", handelProfile);

app.listen(PORT, handleListening);
