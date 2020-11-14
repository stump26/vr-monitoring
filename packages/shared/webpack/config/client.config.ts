import { Entry, EntryFunc } from 'webpack'
import { merge as webpackMerge } from 'webpack-merge'
import { getWebpackBaseConfig } from './base.config'
import { NODE_ENV } from '@apollo-manager/shared/config/mode'
import { FileNames, Paths } from '@apollo-manager/shared/config/paths'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const baseConfig = getWebpackBaseConfig({ webpackEnv: NODE_ENV, isClient: true })

const DEFAULT_WEB_RESOLVE_MAIN_FIELDS = ['browser', 'main', 'module'] // target이 web인 경우 기본값

type GetClientWebpackConfigParams = {
  name: string // required for asset identification
  entry?: string | string[] | Entry | EntryFunc
  paths: Paths
  fileNameKey?: string
  fileNames: FileNames
}

export function getClientWebpackConfigs({ name, entry, paths, fileNameKey, fileNames }: GetClientWebpackConfigParams) {
  return [getClientWebpackConfig({ name, entry, paths, fileNameKey, fileNames })]
}

export function getClientWebpackConfig({ name: _name, entry: customEntry, paths, fileNames, fileNameKey: customFileKey }: GetClientWebpackConfigParams) {
  const name = `${_name}Client`
  const fileNameKey = customFileKey
  const entry = customEntry || '/client/index.tsx'

  return webpackMerge(baseConfig, {
    name,
    context: paths.root,
    entry,
    target: 'web',
    resolve: {
      // https://webpack.js.org/configuration/resolve#resolvemainfields
      mainFields: DEFAULT_WEB_RESOLVE_MAIN_FIELDS,
    },
    output: {
      path: paths.output,
      filename: fileNames[fileNameKey],
      publicPath: '/',
      chunkFilename: '[name].bundle.[hash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${paths.root}/public/index.html`,
      }),
    ],
  })
}
