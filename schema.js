export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
    }
    type Query {
        users: [User!]!
    }
`