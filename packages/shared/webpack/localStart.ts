import webpack, { Configuration } from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import path from 'path'

import { Paths } from '@vr-monitoring/shared/config/paths'

type ParamType = {
  webpackConfig: Configuration[]
  paths: Paths
  port: number
  localhostName: string[]
}

export function localStart({ webpackConfig, paths, port, localhostName }: ParamType) {
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
      sockHost: localhostName[0],
      sockPort: port,
      contentBase: path.resolve(paths.root, 'build/'),
      allowedHosts: [...localhostName],
      historyApiFallback: true,
      https: true,
    }

    const devServer = new WebpackDevServer(compiler, devServerOption)

    devServer.listen(3000, () => {
      console.log(`Devserver Starting server on http://${localhostName[0]}:${port}`)
      console.log('allowed Hosts > ', localhostName)
    })
  }

  watchClientByDevServer()
}
