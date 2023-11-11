const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route.js");
dotenv.config();

const app = express();
const portNo = 8081;

const apiVersion = "/api/v1";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((err) => {
    console.log("error occured");
  });

app.use(`${apiVersion}/user`, userRouter);

app.listen(portNo, () => {
  console.log("server is running on !!", portNo);
});
