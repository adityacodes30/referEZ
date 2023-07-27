const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const port = process.env.PORT || 5000

app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://referezadmin:ou8USjP7ivdf1xfo@cluster0.zb96lg0.mongodb.net/"
  )
  .then(() => {
    console.log("datase connected true");
  });


 app.use( '/signup' , require('./routes/signup') )

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", (req,res)=>
{
    console.log(req.body);
    
    res.send('POSTED')
})

app.listen(3000, () => {
  console.log("runnning");
});

