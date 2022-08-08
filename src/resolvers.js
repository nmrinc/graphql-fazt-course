import { tasks } from './sample';

export const resolvers = {
	Query: {
		hello: () => "Sup' bitch!",
		greet: (root, args) => `Yo ${args.name}, sup\' dog?!`,
		tasks: () => tasks,
	},
};
