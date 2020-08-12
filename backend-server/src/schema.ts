import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

const resolvers = require('./resolverMap');

const userTypeDefs = require('./graphql/schemas/user/schema.graphql');
const postTypeDefs = require('./graphql/schemas/post/schema.graphql');

const typeDefs = [
  userTypeDefs,
  postTypeDefs
]

const schema: GraphQLSchema = makeExecutableSchema({
  
  typeDefs,
  resolvers,

});

export default schema;