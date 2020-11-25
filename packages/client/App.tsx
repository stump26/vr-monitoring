import React,{ useEffect } from 'react'
import {Entity} from 'aframe-react'
import styled from 'styled-components'

import {CyberSpace} from './space'
import HomeBoard from './components/HomeBoard'
import Button from './components/Button'
import Modal from './components/Modal'
import ChartRegister from './components/ChartRegister'
import Joystick from './components/Joystick'
import Camera from './components/Camera'

import {usePagesMenagerCtx} from '@vr-monitoring/hooks/Contexts/usePagesMenagerCtx'
import {useModalCtx} from '@vr-monitoring/hooks/Contexts/useModalCtx'

import './App.scss'
import { useCameraCtx } from '@vr-monitoring/hooks/Contexts/useCameraCtx'

const Handle = styled.div`
  position: fixed; 
  display: block; 
  width: 100px; 
  height: 100px; 
  right: 20px; 
  bottom: 20px; 
  background-color: rgba(200, 200, 200, 0.5); 
  z-index: 20; 
  touch-action: none;
  &>p{
    text-align: center;
    margin-top:40px;
    font-size:12px Roboto; 
    opacity:.5;
  }
`

const App: React.FC = () => {
  const {addPage,getPages} = usePagesMenagerCtx()
  const {modalVisible,modalOff} = useModalCtx()

  return (
    <>
      <CyberSpace >
        <Button 
          text="Button" 
          width={1.7}
          height={0.5}
          textColor="#ffa600"
          position={{x:1,y:1,z:0}}
          textWidth={10}
        />

        <HomeBoard position={{x:0,y:2,z:-2.3}}/>

        {getPages().map(({Component,...props})=><Component id={props.id} key={props.id} {...props} />)}

        {/* camera config */}
        <Camera>
          {/* <Entity primitive="a-cursor"   raycaster="far: 100" /> */}
          {/* <Entity laser-controls raycaster="objects: .screen;" /> */}
        </Camera>
      </CyberSpace>
      <Modal 
        visible={modalVisible}
        closeAction={modalOff}
      >
        <ChartRegister />
      </Modal>
      <Joystick />
    </>
    
  )
}

export default App
