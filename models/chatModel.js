const mongoose = require('mongoose')

const definition = {
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: Number, default: 0 }, // 0: Text message
  contents: String,
  status: Number // 0: send, 1: received
}

const options = { timestamps: true };

const chatSchema = new mongoose.Schema(definition, options)

module.exports = mongoose.model('Chat', chatSchema)