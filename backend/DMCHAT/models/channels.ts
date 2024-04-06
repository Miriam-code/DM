import Mongoose from 'mongoose';

interface ChannelsInterface {
  channelName: string;
  createdAt: Date;
  type: string;
  updatedAt: Date;
}

const channelsSchema = new Mongoose.Schema({
  channelName: String,
  createdAt: Date,
  type: String,
  updatedAt: Date,
}, {
  timestamps: false,
});

export { ChannelsInterface, channelsSchema };
