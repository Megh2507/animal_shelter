const express = require("express")
const app = express()
const mongoose = require("mongoose");
const morgan = require("morgan");

const authRoute = require("./routes/auth");
const {MONGOURI} = require('./config/keys')

mongoose.connect(
  MONGOURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use(express.json());
app.use(morgan("common"));

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("heyaaaaaa Megha!")
})
app.listen(5000, () => {
  console.log("app is listening to port 5000");
})