import path from 'path'
import { getPaths } from '@vr-monitoring/shared/config/paths'

const root = path.normalize(`${__dirname}/..`)
const { fileNames, paths } = getPaths('client', root)

export { fileNames, paths }
