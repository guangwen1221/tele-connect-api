const mongoose = require('mongoose')

const definition = {
  name: String,
  email: String,
  mobile: String,
  type: String,
  avatarUrl: String,
  contacts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  ],
  socketId: String,
  // for Doctors
  gender: String,
  services: [String],
  specializations: [String],
  bio: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  country: String,
  postalCode: String,
  price: Number,
  educations: [
    {
      degree: String,
      college: String,
      year: String
    }
  ],
  experiences: [
    {
      hospital: String,
      from: Number,
      to: Number
    }
  ],
  awards: [
    {
      name: String,
      year: Number
    }
  ],
  birthday: String,
  speciality: String,
  // for patient
  bloodGroup: String,
  zipCode: String
}

const options = { timestamps: true };
const userSchema = new mongoose.Schema(definition, options);

module.exports = mongoose.model("User", userSchema);