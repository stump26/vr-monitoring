import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import { createApolloServer } from './graphql/createApolloServer'

const startServer = async () => {
  const app = new Koa()
  app.use(cors())
  app.use(bodyParser())

  const apolloServer = await createApolloServer()
  apolloServer.applyMiddleware({ app })

  const server = app.listen(5500, () => {
    console.log(`🚀  Server ready at http://localhost:5500`)
  })
}

startServer()
