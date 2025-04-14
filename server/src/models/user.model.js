// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  avatar: String, // superhero avatar
  addresses: [{ type: String }],
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

// user.model.js
const User = mongoose.model('User', userSchema);
export default User;

