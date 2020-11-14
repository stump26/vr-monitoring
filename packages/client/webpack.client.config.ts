import { getClientWebpackConfigs } from '@vr-monitoring/shared-webpack'
import { paths, fileNames } from './config/paths'

const webpackConfig = getClientWebpackConfigs({
  name: 'monitor',
  paths,
  fileNameKey: 'monitor',
  fileNames,
  entry: {
    main: './client/index.tsx',
  },
})

export default webpackConfig
