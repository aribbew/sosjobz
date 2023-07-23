// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Category, Message, Orders } = initSchema(schema);

export {
  User,
  Category,
  Message,
  Orders
};