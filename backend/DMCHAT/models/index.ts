import type { ChannelsInterface } from './channels';
import type { EmailverificationsInterface } from './emailverifications';
import type { ExpiredsessiontokensInterface } from './expiredsessiontokens';
import type { MessagesInterface } from './messages';
import type { ResetpasswordsInterface } from './resetpasswords';
import type { UsersInterface } from './users';

import Mongoose from 'mongoose';

import { channelsSchema } from './channels';
import { emailverificationsSchema } from './emailverifications';
import { expiredsessiontokensSchema } from './expiredsessiontokens';
import { messagesSchema } from './messages';
import { resetpasswordsSchema } from './resetpasswords';
import { usersSchema } from './users';

const connection = Mongoose.createConnection(process.env.DATABASE_URL);

export const channels = connection.model<ChannelsInterface>('channels', channelsSchema, 'channels');
export const emailverifications = connection.model<EmailverificationsInterface>('emailverifications', emailverificationsSchema, 'emailverifications');
export const expiredsessiontokens = connection.model<ExpiredsessiontokensInterface>('expiredsessiontokens', expiredsessiontokensSchema, 'expiredsessiontokens');
export const messages = connection.model<MessagesInterface>('messages', messagesSchema, 'messages');
export const resetpasswords = connection.model<ResetpasswordsInterface>('resetpasswords', resetpasswordsSchema, 'resetpasswords');
export const users = connection.model<UsersInterface>('users', usersSchema, 'users');

export default connection;
