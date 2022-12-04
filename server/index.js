const express = require("express")
const app = express()
const mongoose = require("mongoose");
const morgan = require("morgan");

const authRoute = require("./routes/auth");
const URL = "mongodb+srv://megha:megha@cluster0.m0orps8.mongodb.net/?retryWrites=true&w=majority"
// mongodb+srv://megha:<password>@cluster0.jtthx3n.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
  URL,
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