import React,{useEffect, useState} from 'react'
import {Entity} from 'aframe-react'

import {CyberSpace} from './space'
import HomeBoard from './components/HomeBoard'

import './App.scss'

const App: React.FC = () => {
  useEffect(()=>{
  },[])
  return (
    <CyberSpace >
      <HomeBoard />

      {/* camera config */}
      <Entity primitive="a-camera" wasd-controls="acceleration:500" position="0 2 0">
        {/* <Entity primitive="a-cursor" id="mouseCursor" cursor="rayOrigin: mouse" raycaster="objects: .screen"/> */}
        <Entity laser-controls raycaster="objects: .screen;" />
      </Entity>
    </CyberSpace>
  )
}

export default App
