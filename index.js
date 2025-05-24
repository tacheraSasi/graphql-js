import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';

const PORT = 3000


const server = new ApolloServer({
    typeDefs,

})

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀  Server ready at: ${url}`);

