import mongoose from 'mongoose';

export const connect = async () => {
	try {
		await mongoose.connect('mongodb://localhost/mongodbgraphql', {
			useNewUrlParser: true,
		});

		console.log('>>> DB us connected');
	} catch (error) {
		console.error('====================================');
		console.error('Something went wrong =(');
		console.error(error);
		console.error('====================================');
	}
};
