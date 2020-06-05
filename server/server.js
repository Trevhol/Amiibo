const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from express!");
});

app.listen(5000);
