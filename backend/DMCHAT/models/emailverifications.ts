import Mongoose from 'mongoose';

interface EmailverificationsInterface {
  createdAt: Date;
  expiresAt: Date;
  verificationCode: string;
  verified: boolean;
}

const emailverificationsSchema = new Mongoose.Schema({
  createdAt: Date,
  expiresAt: Date,
  verificationCode: String,
  verified: Boolean,
}, {
  timestamps: false,
});

export { EmailverificationsInterface, emailverificationsSchema };
