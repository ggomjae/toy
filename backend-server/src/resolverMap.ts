import { IResolvers } from 'graphql-tools';
const { Users } = require('./graphql/db/userDB')
const { Posts } = require('./graphql/db/postDB')

const resolverMap: IResolvers  ={
  Query: {
    readAllUser: ()=> Users,
    readAllPost: ()=> Posts
  }
}

module.exports = resolverMap;