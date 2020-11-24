import React from 'react'
import ReactDOM from 'react-dom'
import Providers from './Providers'
import './reset.scss'
import 'aframe';
import 'aframe-particle-system-component';
import 'aframe-htmlembed-component';

export const renderClient = (App: React.FC) => {
  ReactDOM.render(
    <Providers>
      <App />
    </Providers>,
    document.getElementById('app'),
  )
}
