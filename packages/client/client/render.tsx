import React from 'react'
import ReactDOM from 'react-dom'
import Providers from './Providers'
import './reset.scss'

export const renderClient = (App: React.FC) => {
  ReactDOM.render(
    <Providers>
      <App />
    </Providers>,
    document.getElementById('app'),
  )
}
