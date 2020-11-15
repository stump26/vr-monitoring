import { localStart } from '@vr-monitoring/shared-webpack'
import { paths } from './config/paths'
import webpackConfig from './webpack.client.config'

localStart({
  webpackConfig,
  paths,
  port: 3000,
  localhostName: ['localhost', '192.168.0.3'],
})
