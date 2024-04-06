import Mongoose from 'mongoose';

interface UsersInterface {
  createdAt: Date;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  profileImage: string;
  pseudo: string;
  role: string;
  sexe: string;
  updatedAt: Date;
}

const usersSchema = new Mongoose.Schema({
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

export { UsersInterface, usersSchema };
