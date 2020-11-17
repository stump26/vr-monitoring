import fs from 'fs'
import path from 'path'

function getMergedThrowsDuplicationError(source: object = {}, target: object = {}): object {
  return Object.entries(target).reduce(
    (reduced, [key, value]) => {
      if (key && reduced[key]) throw new Error(`duplications in resolver!, key: ${key}`)

      return { ...reduced, [key]: value }
    },
    { ...source },
  )
}

function getResolverList(baseDir: string) {
  const files = fs.readdirSync(path.resolve(baseDir), { withFileTypes: true })

  const modules = files
    .map((dirent) => {
      if (!dirent.isDirectory()) return
      if (!fs.existsSync(path.resolve(__dirname, dirent.name, 'index.ts'))) return

      return require(`./${dirent.name}/index`).default // eslint-disable-line global-require, import/no-dynamic-require
    })
    .filter((v) => !!v)

  const resolvers = modules.reduce(
    (mergedResolver, resolver: { Query?: object; Mutation?: object }) => {
      const { Query: mergedQuery, Mutation: mergedMutation, ...mergedRest } = mergedResolver
      const { Query, Mutation, ...rest } = resolver

      return {
        ...getMergedThrowsDuplicationError(mergedRest, rest), // type resolver
        Query: { ...getMergedThrowsDuplicationError(mergedQuery, Query) },
        Mutation: { ...getMergedThrowsDuplicationError(mergedMutation, Mutation) },
      }
    },
    { Query: {}, Mutation: {} },
  )

  return resolvers
}

export { getResolverList }
