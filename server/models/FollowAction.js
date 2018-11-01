const mongoose = require("mongoose")

var Schema = new mongoose.Schema({
  id: String,
  createdAt: String,
  updatedAt: String,
  userRef: String,
  additionalType: String,
  alternateName: String,
  description: String,
  image: String,
  name: String,
  sameAs: String,
  url: String,
  agent: String,
  endTime: String,
  instrument: String,
  location: String,
  object: String,
  participant: String,
  result: String,
  startTime: String,
  followee: String
})

module.exports = mongoose.model("FollowAction", Schema)
