import React from 'react'
import { Entity, Scene } from 'aframe-react';

import groundTexture from '../../assets/floor.png'

const CyberSpace:React.FC = ({children})=>{
  return (
    <Scene fog="type: linear; color: #222222; far: 20;">
      <a-assets>
        <img id="groundTexture" src={groundTexture}/>
      </a-assets>
      
      <Entity primitive="a-plane" material={{src:"#groundTexture", repeat:"700 700", transparent:true}}  src="#groundTexture" rotation="-90 0 0" height="500" width="500"   />
      <Entity primitive="a-sky" color="#222222" />

      {children}
    </Scene>

  )
}

export default CyberSpace