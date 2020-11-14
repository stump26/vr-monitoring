import { localStart } from '@vr-monitoring/shared-webpack'
import { paths } from './config/paths'
import webpackConfig from './webpack.client.config'

localStart({
  webpackConfig,
  paths,
  localhostName: 'localhost',
})
