const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  channelName: String,
  createdAt: Date,
  type: String,
  updatedAt: Date,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'channels',
  modelName: 'channels',
  schema,
};
