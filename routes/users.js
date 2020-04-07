var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/:id", async function (req, res) {
  const { id } = req.params
  const result = await UserModel.findById(id)
  res.json(result)
})

router.post('/update', async function (req, res) {
  const result = await UserModel.updateOne({ _id: req.body._id }, req.body)
  res.json(result)
})

router.post('/search-doctor', async function (req, res) {
  const result = await UserModel.find({ type: 'doctor' })
  res.json(result)
})

router.post('/addContact', async function (req, res) {
  const { userId, contactId } = req.body
  await UserModel.update({ _id: userId }, { $push: { contacts: contactId } })
  await UserModel.update({ _id: contactId }, { $push: { contacts: userId } })
  res.json("Success")
})

router.post('/loadContacts', async function (req, res) {
  const { userId } = req.body
  const result = await UserModel.findOne({ _id: userId }, 'contacts').populate('contacts', 'name avatarUrl').exec()
  res.json(result)
})

router.post("/updateSocketId", async function (req, res) {
  const { userId, socketId } = req.body
  const result = await UserModel.updateOne({ _id: userId }, { $set: { socketId: socketId } })
  res.json(result)
})

module.exports = router;
