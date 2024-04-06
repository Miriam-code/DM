import { Document, Schema, Model, model, Types } from "mongoose";

interface Channel extends Document {
  channelName: string;
  type: "public" | "private";
 participants: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
messages: Schema.Types.ObjectId[];
}

const ChannelSchema = new Schema<Channel>({
  channelName: { type: String, required: true, unique: true },
  type: { type: String, enum: ["public", "private"], default: "public" },
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

ChannelSchema.path("participants").validate(function (value: Types.ObjectId[]) {
  if (this.type === "private" && value.length !== 2) {
    throw new Error(
      "les channels privées doivent avoir seulement deux participants."
    );
  }

  return true;
}, "Erreur de validation");

const ChannelModel: Model<Channel> = model<Channel>("Channel", ChannelSchema);

export default ChannelModel;
