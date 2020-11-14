import webpack, { Configuration } from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import path from 'path'

import { Paths } from '@vr-monitoring/shared/config/paths'

type ParamType = {
  webpackConfig: Configuration[]
  paths: Paths
  localhostName: string
}

export function localStart({ webpackConfig, paths, localhostName }: ParamType) {
  function replaceFilename(filenameConfig: Configuration['output']['filename']): Configuration['output']['filename'] {
    if (typeof filenameConfig === 'string') {
      return filenameConfig.replace('[hash]', '')
    }
    if (typeof filenameConfig === 'function') {
      return (chunkData) => filenameConfig(chunkData).replace('[hash]', '')
    }
    return filenameConfig
  }

  function watchClientByDevServer() {
    const newConfig = webpackConfig.map((config) => ({
      ...config,
      output: {
        ...config.output,
        filename: replaceFilename(config.output.filename),
      },
    }))
    const compiler = webpack(newConfig)

    const devServerOption = {
      open: false,
      stats: {
        colors: true,
      },
      liveReload: true,
      sockHost: localhostName,
      sockPort: 3000,
      contentBase: path.resolve(paths.root, 'build/'),
      allowedHosts: [localhostName],
      historyApiFallback: true,
    }

    const devServer = new WebpackDevServer(compiler, devServerOption)

    devServer.listen(3000, '127.0.0.1', () => {
      console.log('Devserver Starting server on http://localhost:3000')
    })
  }

  watchClientByDevServer()
}
