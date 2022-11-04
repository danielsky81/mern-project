import { makeExecutableSchema } from "@graphql-tools/schema";

export const typeDefs = `
  type Project {
    id: Int!
    name: String!
    status: String!
  }

  type Client {
    id: Int!
    name: String!
    email: String!
    phone: Int!
  }
  
  type Query {
    project(name: String!): Project!
    client(name: String!): Client!
  }

  type Mutation {
    addClient(name: String!): Client!
    deleteClient(name: String!): Client!
    addProject(name: String!): Project!
    deleteProject(name: String!): Project!
    updateProject(name: String!): Project!
  }
`;

export const schema = makeExecutableSchema({ typeDefs });