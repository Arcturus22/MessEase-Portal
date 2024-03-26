require("dotenv").config();
const mongoConnect = require("./db");
const express = require("express");
const cors = require("cors");

// Mongo Connection
mongoConnect();
const app = express();
const port = process.env.PORT || 8765;

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hey Hi!");
});

// Server
app.listen(port, () => {
  console.log("Running on Port:" + port);
});
