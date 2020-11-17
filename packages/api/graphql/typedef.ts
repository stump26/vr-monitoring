import fs from 'fs'
import path from 'path'

function getGraphqlFilesStringList(directoryPath: string = __dirname) {
  let typeDefs: string[] = []

  const files = fs.readdirSync(directoryPath, { withFileTypes: true })

  files.forEach((dirent) => {
    if (dirent.isDirectory()) {
      const subDirectoryPath = path.resolve(directoryPath, dirent.name)
      const typeDef = path.resolve(subDirectoryPath, 'types.gql')

      if (fs.existsSync(typeDef)) typeDefs.push(fs.readFileSync(typeDef, 'utf-8'))

      const subDirectoryTypeDefs = getGraphqlFilesStringList(subDirectoryPath)
      typeDefs = typeDefs.concat(subDirectoryTypeDefs)
    }
  })

  return typeDefs
}

export { getGraphqlFilesStringList }
