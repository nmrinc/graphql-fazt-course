import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

import { connect } from './database';

const app = express();
connect();

app.get('/', (req, res) => {
	res.json('Sick & sad world');
});

app.use(
	'/graphql',
	graphqlHTTP({
		graphiql: true, // @o activate graphql dashboard
		schema: schema, // @o all the type of queries we can req to graphql
		// @o Context will allow to pass data to all resolvers
		/* context: {
			messageId: 'test',
		}, */
	})
);

app.listen(3000, () => {
	console.log('====================================');
	console.log('Server on port 3000');
	console.log('====================================');
});
