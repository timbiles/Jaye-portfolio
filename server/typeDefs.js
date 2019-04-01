const { gql } = require('apollo-server-express');

// The shape of the data. This tells you exactly how the data is going to look, and how it can be fetched from the server.

const typeDefs = gql`
type Query {
  events: [Event]
  bio: Bio
  admin: Login
}

type Mutation {
  addEvent(event: EventInput): Event
  removeEvent(id: ID!): Event
  editBio(biography: String): Bio
  login(login: LoginInput): Login
}

input EventInput {
  event: String
  date: String
  location: String
}

type Bio {
  biography: String
}
type Login {
  username: String!
  password: String!
}

input LoginInput {
  username: String!
  password: String!
}

type Event {
  id: ID!
  event: String
  date: String
  location: String
}
`;

module.exports = { typeDefs }