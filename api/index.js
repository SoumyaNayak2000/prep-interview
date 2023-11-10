const express = require("express");

const app = express();
const portNo = 8081;
app.listen(portNo, () => {
  console.log("server is running on !!", portNo);
});
