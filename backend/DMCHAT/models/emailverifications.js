const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  createdAt: Date,
  expiresAt: Date,
  verificationCode: String,
  verified: Boolean,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'emailverifications',
  modelName: 'emailverifications',
  schema,
};
