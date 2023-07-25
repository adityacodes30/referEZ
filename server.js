const express = require("express");
const mongoose = require("mongoose");

app = express();
app.use(express.json());


mongoose
  .connect(
    "mongodb+srv://referezadmin:ou8USjP7ivdf1xfo@cluster0.zb96lg0.mongodb.net/"
  )
  .then(() => {
    console.log("datase connected true");
  });

app.get("/", (req, res) => {
  res.send("hello world");
  console.log(req);
});

app.listen(3000, () => {
  console.log("runnning");
});
