"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerProductSchema = mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  category_id: String,
  category_name: String
});

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect(
  "mongodb://naresh:adaraa2@ds161653.mlab.com:61653/adaraa",
  { useNewUrlParser: true }
);

module.exports = mongoose.model("product", registerProductSchema);
