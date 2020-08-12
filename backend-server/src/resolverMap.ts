import { IResolvers } from 'graphql-tools';
const { Users } = require('./graphql/db')

const resolverMap: IResolvers = {

  Query: {
    readAllUser: ()=> Users
  }

};

export default resolverMap;