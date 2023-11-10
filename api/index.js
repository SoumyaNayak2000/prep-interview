const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const portNo = 8081;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((err) => {
    console.log("error occured");
  });

app.listen(portNo, () => {
  console.log("server is running on !!", portNo);
});
