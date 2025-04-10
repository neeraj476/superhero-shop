const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: [{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number
  }],
  totalAmount: Number,
  shippingAddress: String,
  status: { type: String, default: 'Processing' },
  paymentId: String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
