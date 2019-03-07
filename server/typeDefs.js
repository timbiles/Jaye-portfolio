const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  events: [Event]
}

type Mutation {
  addEvent(event: EventInput): Event
  removeEvent(id: ID!): Event
}

input EventInput {
  event: String
  date: String
  location: String
}

type Event {
  id: ID!
  event: String
  date: String
  location: String
}
`;

module.exports = { typeDefs }