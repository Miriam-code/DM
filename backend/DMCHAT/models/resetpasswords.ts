import Mongoose from 'mongoose';

interface ResetpasswordsInterface {
}

const resetpasswordsSchema = new Mongoose.Schema({
}, {
  timestamps: false,
});

export { ResetpasswordsInterface, resetpasswordsSchema };
