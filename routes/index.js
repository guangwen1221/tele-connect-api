var express = require('express');
var router = express.Router();
var UserModel = require("../models/userModel")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/auth/signup', async function (req, res) {
  const newUser = await UserModel.create(req.body)
  res.json(newUser)
})

router.post("/auth/login", async function (req, res) {
  const { email, socketId } = req.body
  await UserModel.updateOne({ email: email }, { $set: { socketId: socketId } })
  const user = await UserModel.findOne({ email: email })

  res.json(user)
})

module.exports = router;
