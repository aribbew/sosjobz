import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConversationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrdersMetaData = {
  readOnlyFields: 'updatedAt';
}

type EagerUser = {
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly orders?: (Orders | null)[] | null;
  readonly message?: (Message | null)[] | null;
  readonly cat?: (Category | null)[] | null;
  readonly messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly orders: AsyncCollection<Orders>;
  readonly message: AsyncCollection<Message>;
  readonly cat: AsyncCollection<Category>;
  readonly messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerCategory = {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly isActive?: boolean | null;
  readonly orders?: (Orders | null)[] | null;
  readonly messages?: (Message | null)[] | null;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly isActive?: boolean | null;
  readonly orders: AsyncCollection<Orders>;
  readonly messages: AsyncCollection<Message>;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category, CategoryMetaData>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

type EagerMessage = {
  readonly id: string;
  readonly owner: string;
  readonly message: string;
  readonly user?: User | null;
  readonly conversation?: Conversation | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly id: string;
  readonly owner: string;
  readonly message: string;
  readonly user: AsyncItem<User | undefined>;
  readonly conversation: AsyncItem<Conversation | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message, MessageMetaData>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

type EagerConversation = {
  readonly id: string;
  readonly participants: string[];
  readonly messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConversation = {
  readonly id: string;
  readonly participants: string[];
  readonly messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conversation = LazyLoading extends LazyLoadingDisabled ? EagerConversation : LazyConversation

export declare const Conversation: (new (init: ModelInit<Conversation, ConversationMetaData>) => Conversation) & {
  copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation, ConversationMetaData>) => MutableModel<Conversation, ConversationMetaData> | void): Conversation;
}

type EagerOrders = {
  readonly id: string;
  readonly createdAt: string;
  readonly category: string;
  readonly status?: string | null;
  readonly payment?: boolean | null;
  readonly geoLoc: string;
  readonly priceRateDesc: string;
  readonly DescOfJob: string;
  readonly user?: User | null;
  readonly cat?: Category | null;
  readonly updatedAt?: string | null;
}

type LazyOrders = {
  readonly id: string;
  readonly createdAt: string;
  readonly category: string;
  readonly status?: string | null;
  readonly payment?: boolean | null;
  readonly geoLoc: string;
  readonly priceRateDesc: string;
  readonly DescOfJob: string;
  readonly user: AsyncItem<User | undefined>;
  readonly cat: AsyncItem<Category | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Orders = LazyLoading extends LazyLoadingDisabled ? EagerOrders : LazyOrders

export declare const Orders: (new (init: ModelInit<Orders, OrdersMetaData>) => Orders) & {
  copyOf(source: Orders, mutator: (draft: MutableModel<Orders, OrdersMetaData>) => MutableModel<Orders, OrdersMetaData> | void): Orders;
}