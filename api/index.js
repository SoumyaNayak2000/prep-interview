const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route.js");
const authRouter = require("./routes/auth.route.js");
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((err) => {
    console.log("error occured");
  });

const app = express();
const portNo = 8081;

const apiVersion = "/api/v1";

app.use(express.json());

app.use(`${apiVersion}/user`, userRouter);
app.use(`${apiVersion}/auth`, authRouter);

app.listen(portNo, () => {
  console.log("server is running on !!", portNo);
});
