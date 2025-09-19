require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const accessRouter = require("./routes/accessRoutes");
const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
app.use("/access", accessRouter);

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Mongo DB Connection Established");
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000!`);
});
