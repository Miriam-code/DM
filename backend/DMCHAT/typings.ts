/* eslint-disable */
import {
  CollectionCustomizer,
  TAggregation,
  TConditionTree,
  TPaginatedFilter,
  TPartialRow,
  TSortClause
} from '@forestadmin/agent';

export type ChannelsCustomizer = CollectionCustomizer<Schema, 'channels'>;
export type ChannelsRecord = TPartialRow<Schema, 'channels'>;
export type ChannelsConditionTree = TConditionTree<Schema, 'channels'>;
export type ChannelsFilter = TPaginatedFilter<Schema, 'channels'>;
export type ChannelsSortClause = TSortClause<Schema, 'channels'>;
export type ChannelsAggregation = TAggregation<Schema, 'channels'>;

export type EmailverificationsCustomizer = CollectionCustomizer<Schema, 'emailverifications'>;
export type EmailverificationsRecord = TPartialRow<Schema, 'emailverifications'>;
export type EmailverificationsConditionTree = TConditionTree<Schema, 'emailverifications'>;
export type EmailverificationsFilter = TPaginatedFilter<Schema, 'emailverifications'>;
export type EmailverificationsSortClause = TSortClause<Schema, 'emailverifications'>;
export type EmailverificationsAggregation = TAggregation<Schema, 'emailverifications'>;

export type ExpiredsessiontokensCustomizer = CollectionCustomizer<Schema, 'expiredsessiontokens'>;
export type ExpiredsessiontokensRecord = TPartialRow<Schema, 'expiredsessiontokens'>;
export type ExpiredsessiontokensConditionTree = TConditionTree<Schema, 'expiredsessiontokens'>;
export type ExpiredsessiontokensFilter = TPaginatedFilter<Schema, 'expiredsessiontokens'>;
export type ExpiredsessiontokensSortClause = TSortClause<Schema, 'expiredsessiontokens'>;
export type ExpiredsessiontokensAggregation = TAggregation<Schema, 'expiredsessiontokens'>;

export type MessagesCustomizer = CollectionCustomizer<Schema, 'messages'>;
export type MessagesRecord = TPartialRow<Schema, 'messages'>;
export type MessagesConditionTree = TConditionTree<Schema, 'messages'>;
export type MessagesFilter = TPaginatedFilter<Schema, 'messages'>;
export type MessagesSortClause = TSortClause<Schema, 'messages'>;
export type MessagesAggregation = TAggregation<Schema, 'messages'>;

export type ResetpasswordsCustomizer = CollectionCustomizer<Schema, 'resetpasswords'>;
export type ResetpasswordsRecord = TPartialRow<Schema, 'resetpasswords'>;
export type ResetpasswordsConditionTree = TConditionTree<Schema, 'resetpasswords'>;
export type ResetpasswordsFilter = TPaginatedFilter<Schema, 'resetpasswords'>;
export type ResetpasswordsSortClause = TSortClause<Schema, 'resetpasswords'>;
export type ResetpasswordsAggregation = TAggregation<Schema, 'resetpasswords'>;

export type UsersCustomizer = CollectionCustomizer<Schema, 'users'>;
export type UsersRecord = TPartialRow<Schema, 'users'>;
export type UsersConditionTree = TConditionTree<Schema, 'users'>;
export type UsersFilter = TPaginatedFilter<Schema, 'users'>;
export type UsersSortClause = TSortClause<Schema, 'users'>;
export type UsersAggregation = TAggregation<Schema, 'users'>;


export type Schema = {
  'channels': {
    plain: {
      '_id': string;
      'channelName': string | null;
      'createdAt': string | null;
      'type': string | null;
      'updatedAt': string | null;
    };
    nested: {};
    flat: {};
  };
  'emailverifications': {
    plain: {
      '_id': string;
      'createdAt': string | null;
      'expiresAt': string | null;
      'verificationCode': string | null;
      'verified': boolean | null;
    };
    nested: {};
    flat: {};
  };
  'expiredsessiontokens': {
    plain: {
      '_id': string;
      'createdAt': string | null;
      'jwtToken': string | null;
    };
    nested: {};
    flat: {};
  };
  'messages': {
    plain: {
      '_id': string;
    };
    nested: {};
    flat: {};
  };
  'resetpasswords': {
    plain: {
      '_id': string;
    };
    nested: {};
    flat: {};
  };
  'users': {
    plain: {
      '_id': string;
      'createdAt': string | null;
      'email': string | null;
      'firstName': string | null;
      'lastName': string | null;
      'password': string | null;
      'profileImage': string | null;
      'pseudo': string | null;
      'role': string | null;
      'sexe': string | null;
      'updatedAt': string | null;
    };
    nested: {};
    flat: {};
  };
};
