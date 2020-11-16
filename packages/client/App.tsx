import React from 'react'
import styled from 'styled-components'
import {Entity} from 'aframe-react'
import {CyberSpace} from './space'

import PlaneBoard from './components/PlaneBoard' 
import './App.scss'



const App: React.FC = () => {
  return (
    <CyberSpace >
      <PlaneBoard id="main" className="screen main dark" position="0 2 -2.3" >
        <h2>Menu</h2>
        <ul>
          <li><a href="#" className="button">Home</a></li>
          <li><a href="#slide2" className="button">CSS</a></li>
          <li><a href="#slide3" className="button">Interactivity</a></li>
          <li><a href="#slide4" className="button">Limitations</a></li>
        </ul>
      </PlaneBoard>
    
      {/* camera config */}
      <Entity primitive="a-camera" wasd-controls="acceleration:500">
        <Entity primitive="a-cursor" id="mouseCursor" cursor="rayOrigin: mouse" raycaster="objects: .screen"/>
        <Entity laser-controls raycaster="objects: .screen;" />
      </Entity>
    </CyberSpace>
  )
}

export default App
