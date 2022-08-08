// ! All this setup it's necessary to use MongoDB, doesn't have anything to do with GraphQL

import { Schema, model } from 'mongoose';

const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: String,
	age: Number,
});

export default model('User', userSchema);
