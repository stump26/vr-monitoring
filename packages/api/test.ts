import captureWebsite from 'capture-website'
;(async () => {
  await captureWebsite.base64(
    'http://localhost:5601/app/kibana#/visualize/edit/14e2e710-4258-11e8-b3aa-73fdaf54bfc9?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15d%2Cto%3Anow))',
    {
      width: 720,
      height: 420,
      element: 'visualize-app > visualization-embedded',
    },
  )
})()
