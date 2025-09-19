const express = require("express");
const accessRouter = express.Router();
const verifyToken = require("../middleware/auth");

accessRouter.get("/", verifyToken, (req, res) => {
  res.status(200).json({ valid: true, message: "Verified token successfully" });
});

module.exports = accessRouter;
