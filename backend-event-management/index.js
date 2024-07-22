const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoute");

const app = express();
app.use(cors());
app.use(express.json());
const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "UsersDb",
  });
  console.log("succesfully connected to DB");
};
connectDB();

app.get("/", (req, res) => {
  res.send("backend is running");
});

app.use("/user", userRoute);

app.listen(3000, () => {
  console.log(`backend is running on port http://localhost:3000`);
});
