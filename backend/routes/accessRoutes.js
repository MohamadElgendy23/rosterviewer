const express = require("express");
const accessRouter = express.Router();
const verifyToken = require("../middleware/auth");

accessRouter.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: "Verified token successfully" });
});

module.exports = accessRouter;
