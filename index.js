const { GraphQLServer } = require('graphql-yoga')

// this is the schema 'definition'
const typeDefs = `
type Query {
    info: String!
}
`

// this is the implementation - remember, we could be accessing a DB or talking to other services. In this case, the below implements the entirety of our oversimplified backend
const resolvers = {
    Query: {
        info: () => `Good work! This output from a graphql-js reference implementation, type checked via the schema, and returned to you (the client) via GraphQL Playground (complements of the npm install graphql-yoga)`
    }
}

// this is some graphql-yoga magic that made implementing our graphql server super simple!
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`server is running on localhost port 4000`) )