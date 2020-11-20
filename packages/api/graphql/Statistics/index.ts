import captureWebsite from 'capture-website'

async function getTestString(_) {
  return 'test'
}
async function getWebsiteCapture(_, { url }) {
  return await captureWebsite.base64(url, {
    width: 720,
    height: 520,
    element: 'visualize-app > visualization-embedded',
  })
}

export default {
  Query: {
    getTestString,
    getWebsiteCapture,
  },
}
