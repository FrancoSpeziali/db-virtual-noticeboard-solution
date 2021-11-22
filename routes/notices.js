const Notice = require("../models/Notice");
const express = require("express");
const router = express.Router();

router.get("/all", async (req, res) => {
  const notices = await Notice.find();

  res.send(notices);
});

module.exports = router;

router.post("/new", async (req, res) => {
  const { body } = req;

  try {
    await Notice.create({
      text: body.text,
      author: body.author,
      date: body.date,
    });
  } catch (error) {
    return res.sendStatus(500);
  }

  res.send(200);
});

router.delete("/clear", async (req, res) => {
  await Notice.deleteMany({});

  res.sendStatus(200);
});
