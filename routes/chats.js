var express = require('express');
var router = express.Router();
var chatModel = require('../models/chatModel')

router.post('/add', async function (req, res) {
  const result = await chatModel.create(req.body)
  res.json(result)
})

router.post('/getHistory', async function (req, res) {
  const { senderId, receiverId } = req.body
  const result = await chatModel.find({
    $or: [
      { sender: senderId, receiver: receiverId },
      { sender: receiverId, receiver: senderId }
    ]
  }).sort({ createdAt: 1 })
  res.json(result)
})

module.exports = router