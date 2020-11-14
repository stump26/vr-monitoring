import path from 'path'
import webpack from 'webpack'
import { merge as wepackMerge } from 'webpack-merge'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin' // typescript 빌드 성능 향상.
import { projectRoot } from '@apollo-manager/shared/config/paths'
import { getStyleLoaderConfig } from './base.style-loader.config'
import { getSvgLoaderConfig } from './base.svg-loader.config'
import { getGraphqlLoader } from './graphqlLoader.config'

export const getWebpackBaseConfig = ({ webpackEnv, isClient }: { webpackEnv: 'development' | 'production'; isClient: boolean }) => {
  const isDev = webpackEnv === 'development'
  const tsconfigFile = isClient ? `tsconfig.client.json` : 'tsconfig.server.json'

  const config: webpack.Configuration = {
    mode: isDev ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: tsconfigFile,
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: { extensions: ['.tsx', '.ts', '.js', 'json'] },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: path.resolve(projectRoot, tsconfigFile),
        },
      }),
    ],
  }
  return wepackMerge(config, getStyleLoaderConfig(), getSvgLoaderConfig(), getGraphqlLoader())
}
