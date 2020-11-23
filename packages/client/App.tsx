import React,{ useEffect } from 'react'
import {Entity} from 'aframe-react'

import {CyberSpace} from './space'
import HomeBoard from './components/HomeBoard'
import Button from './components/Button'
import Modal from './components/Modal'
import ChartRegister from './components/ChartRegister'

import {usePagesMenagerCtx} from '@vr-monitoring/hooks/Contexts/usePagesMenagerCtx'
import {useModalCtx} from '@vr-monitoring/hooks/Contexts/useModalCtx'
import {hashgen} from '@vr-monitoring/shared/util/hashgen'

import './App.scss'

const App: React.FC = () => {
  const {addPage,pages} = usePagesMenagerCtx()
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

        {pages.map(({Component,...props})=><Component key={props.id} {...props} />)}

        {/* camera config */}
        <Entity primitive="a-camera" wasd-controls="acceleration:500;fly:true;" position="0 2 0" id="mouseCursor" cursor="rayOrigin: mouse" >
          {/* <Entity primitive="a-cursor"   raycaster="far: 100" /> */}
          {/* <Entity laser-controls raycaster="objects: .screen;" /> */}
        </Entity>
      </CyberSpace>
      <Modal 
        visible={modalVisible}
        closeAction={modalOff}
      >
        <ChartRegister />
      </Modal>
    </>
    
  )
}

export default App
