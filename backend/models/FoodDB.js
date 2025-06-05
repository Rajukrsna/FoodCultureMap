// models/Food.js
const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  dish: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  embedding: {
    type: [Number], // Array of numbers (the embedding vector)
    required: true
  }
});

module.exports = mongoose.model('Food', FoodSchema);
