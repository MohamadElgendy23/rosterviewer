const express = require("express");
const favoritesRouter = express.Router();
const User = require("../models/userModel");
const verifyToken = require("../middleware/auth");

favoritesRouter.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId).select("favorites");

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ favorites: user.favorites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get favorites" });
  }
});

favoritesRouter.post("/add", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { item } = req.body;

    if (!item) {
      return res.status(400).json({ error: "No item provided" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { favorites: item } },
      { new: true }
    );

    if (!user) return res.status(404).json({ error: "User not found" });

    res
      .status(200)
      .json({ message: "Item added to favorites", favorites: user.favorites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add to favorites" });
  }
});

favoritesRouter.delete("/remove", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { item } = req.body;

    if (!item) {
      return res.status(400).json({ error: "No item provided" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { favorites: item } },
      { new: true }
    );

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({
      message: "Item removed from favorites",
      favorites: user.favorites,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to remove from favorites" });
  }
});

module.exports = favoritesRouter;
