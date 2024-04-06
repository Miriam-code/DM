import Mongoose from 'mongoose';

interface MessagesInterface {
}

const messagesSchema = new Mongoose.Schema({
}, {
  timestamps: false,
});

export { MessagesInterface, messagesSchema };
