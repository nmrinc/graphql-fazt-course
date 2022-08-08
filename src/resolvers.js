import { tasks } from './sample';

import User from './models/User';

export const resolvers = {
	Query: {
		hello: () => "Sup' bitch!",
		greet: (root, args, ctx) => {
			console.log('🚀 ~ file: resolvers.js ~ line 9 ~ ctx', ctx);

			return `Yo ${args.name}, sup\' dog?!`;
		},
		tasks: () => tasks,
		Users: async () => await User.find(),
	},

	Mutation: {
		createTask: (_, { input }) => {
			input._id = tasks.length;
			tasks.push(input);
			return input;
		},
		createUser: async (_, { input }) => {
			const newUser = User(input);
			console.log('🚀 ~ file: resolvers.js ~ line 26 ~ newUser', newUser);
			await newUser.save();
			return newUser;
		},
	},
};

/**
* @concept Query 
* @tst query {
		tasks{
			_id
			title
			description
			number
		}
	}
* @concept Mutation
* @tst mutation {
		createTask(input: {
			title: "Task five"
			description: "Task five desc"
		}) {
			_id
			title
			description
			number
		}
	}
*/
