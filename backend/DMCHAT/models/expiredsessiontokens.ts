import Mongoose from 'mongoose';

interface ExpiredsessiontokensInterface {
  createdAt: Date;
  jwtToken: string;
}

const expiredsessiontokensSchema = new Mongoose.Schema({
  createdAt: Date,
  jwtToken: String,
}, {
  timestamps: false,
});

export { ExpiredsessiontokensInterface, expiredsessiontokensSchema };
