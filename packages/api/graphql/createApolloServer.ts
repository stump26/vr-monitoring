import { ApolloServer } from 'apollo-server-koa'
import { getSchema } from './schema'

async function createApolloServer() {
  const schema = await getSchema()
  const apolloServer = new ApolloServer({
    schema,
  })

  return apolloServer
}

export { createApolloServer }
