import React, { useCallback } from 'react'
import styled from 'styled-components'

import {useModalCtx} from '@vr-monitoring/hooks/Contexts/useModalCtx'

import PlaneBoard from '../PlaneBoard' 
import Button from '../Button'

interface IProps {
  position:coord
}

const HomeBoard:React.FC<IProps> = ({position})=>{
  const {modalOn} = useModalCtx()
  const handleButtonClick = useCallback(()=>{
    modalOn()
  },[])

  return (
    <>
      <PlaneBoard id="main" className="screen main dark" position={position} />
      <Button 
        text="Regist Chart" 
        width={3}
        height={0.5}
        textColor="#ffa600"
        textWidth={10}
        position={{...position,z:position.z+0.03}}
        actionToTrigger={handleButtonClick}  
      />
    </>
  )
}

export default HomeBoard