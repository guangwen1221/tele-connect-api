const userModel = require("../models/userModel")

module.exports = io => {
  io.on("connection", socket => {
    console.log("socket connected:" + socket.id);

    socket.on("REQEST_VOICE_CALL", async data => {
      const { receiverId } = data
      const user = await userModel.findById(receiverId)
      io.to(user.socketId).emit('RES_VOICE_CALL', data)
    })

    socket.on("REQUEST_CANCEL_CALL", async data => {
      const { userId } = data
      const user = await userModel.findById(userId)
      io.to(user.socketId).emit("RES_CANCEL_CALL")
    })

    socket.on("REQ_ACCEPT_CALL", async data => {
      const { userId } = data
      const user = await userModel.findById(userId)
      io.to(user.socketId).emit("RES_ACCEPT_CALL")
    })

    socket.on("REQ_END_CALL", async data => {
      const { userId } = data
      const user = await userModel.findById(userId)
      io.to(user.socketId).emit("RES_END_CALL")
    })
  })
}