import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Query {
    users: [User]
    searchUser(value:String):[User]
  }

  type UserData {
    userHash: String
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    username: String
    image: String
    data: UserData
  }
`
export default typeDefs