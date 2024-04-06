const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  profileImage: String,
  pseudo: String,
  role: String,
  sexe: String,
  updatedAt: Date,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'users',
  modelName: 'users',
  schema,
};
