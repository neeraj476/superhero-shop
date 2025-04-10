const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  theme: String, // Marvel, DC, etc.
  images: [String],
  stock: Number,
  ratings: [{ userId: String, rating: Number, comment: String }]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
