const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  createdAt: Date,
  jwtToken: String,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'expiredsessiontokens',
  modelName: 'expiredsessiontokens',
  schema,
};
