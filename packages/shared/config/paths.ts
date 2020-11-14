import path from 'path'

export type FileNames = {
  monitor: string
}

export type Paths = {
  root: string
  client: string
  output: string
  assets: string
}

export function getPaths(packageType: string, root: string): { fileNames: FileNames; paths: Paths } {
  return {
    fileNames: {
      monitor: `js/${packageType}.[name].[hash].js`,
    },
    paths: {
      root,
      client: path.join(root, 'client'),
      output: path.join(root, 'build'),
      assets: path.join(root, 'build/assets'),
    },
  }
}

const root = path.normalize(`${__dirname}/..`)
const projectRoot = path.normalize(`${__dirname}/../../..`)
const { fileNames, paths } = getPaths('shared', root)

export { fileNames, paths, projectRoot }
