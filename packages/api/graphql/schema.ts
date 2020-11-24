import { makeExecutableSchema } from 'apollo-server-koa'
import { getResolverList } from './resolvers'
import { getGraphqlFilesStringList } from './typedef'

async function getSchema() {
  const resolvers = getResolverList(__dirname)
  const typeDefs = getGraphqlFilesStringList(__dirname)
  const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  })

  return schema
}

export { getSchema }
