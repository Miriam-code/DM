const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'resetpasswords',
  modelName: 'resetpasswords',
  schema,
};
