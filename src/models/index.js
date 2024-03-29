// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Category, Message, Conversation, Orders } = initSchema(schema);

export {
  User,
  Category,
  Message,
  Conversation,
  Orders
};