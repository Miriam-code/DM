const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'messages',
  modelName: 'messages',
  schema,
};
