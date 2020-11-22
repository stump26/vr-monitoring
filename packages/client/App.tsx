import React,{useEffect, useState} from 'react'
import {Entity} from 'aframe-react'

import {CyberSpace} from './space'
import HomeBoard from './components/HomeBoard'
import ChartBoard from './components/ChartBoard'
import Button from './components/Button'
import {usePagesMenagerCtx, IPage} from '@vr-monitoring/hooks/Contexts/usePagesMenagerCtx'

import './App.scss'

const App: React.FC = () => {
  const {addPage,pages} = usePagesMenagerCtx()
  useEffect(()=>{
    addPage({
      Component: ChartBoard,
      position:{x:5,y:2,z:-2.3},
      url:"http://localhost:5601/app/kibana#/visualize/edit/14e2e710-4258-11e8-b3aa-73fdaf54bfc9?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15d%2Cto%3Anow))"
    })
  },[])
  return (
    <CyberSpace >
      <Button 
        text="Button" 
        width={1.7}
        height={0.5}
        textColor="#ffa600"
        position={{x:1,y:1,z:0}}
        textWidth={10}/>

      <HomeBoard position={{x:0,y:2,z:-2.3}}/>

      {pages.map(({Component,...props})=><Component {...props} />)}

      {/* camera config */}
      <Entity primitive="a-camera" wasd-controls="acceleration:500;fly:true;" position="0 2 0" id="mouseCursor" cursor="rayOrigin: mouse" >
        {/* <Entity primitive="a-cursor"   raycaster="far: 100" /> */}
        {/* <Entity laser-controls raycaster="objects: .screen;" /> */}
      </Entity>
    </CyberSpace>
  )
}

export default App
