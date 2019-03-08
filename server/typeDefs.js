const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  events: [Event]
  bio: Bio
}

type Mutation {
  addEvent(event: EventInput): Event
  removeEvent(id: ID!): Event
  editBio(biography: String): Bio
}

input EventInput {
  event: String
  date: String
  location: String
}

type Bio {
  biography: String
}

type Event {
  id: ID!
  event: String
  date: String
  location: String
}
`;

module.exports = { typeDefs }