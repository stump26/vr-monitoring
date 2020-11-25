import React,{useCallback} from 'react'
import styled from 'styled-components'
import { Joystick as ReactJoystick } from 'react-joystick-component'
import { useCameraCtx } from '@vr-monitoring/hooks/Contexts/useCameraCtx'

const RContainer = styled.div`
  position: fixed;
  bottom:50px;
  right:50px;
`
const LContainer = styled.div`
  position: fixed;
  bottom:50px;
  left:50px;
`

const StyledJoystick = styled(ReactJoystick)`
`

const Joystick = ()=>{
  const {camPosition,camRotation,setPosition,setRotation} = useCameraCtx()

  const handleLMove=useCallback((e)=>{
    const cos=Math.cos(camRotation.y)/10
    const sin=Math.sin(camRotation.y)/10
    switch(e.direction){
      case 'FORWARD':
        setPosition({...camPosition,x:camPosition.x-sin,z:camPosition.z-cos})
        break
      case 'BACKWARD':
        setPosition({...camPosition,x:camPosition.x+sin,z:camPosition.z+cos})
        break
      case 'LEFT':
        setPosition({...camPosition,x:camPosition.x-cos,z:camPosition.z+sin})
        break
      case 'RIGHT':
        setPosition({...camPosition,x:camPosition.x+cos,z:camPosition.z-sin})
        break
    }
  },[camPosition,setPosition])

  const handleRMove=useCallback((e)=>{
    const cos=Math.cos(camRotation.y)/10
    const sin=Math.sin(camRotation.y)/10
    switch(e.direction){
      case 'FORWARD':
        setPosition({...camPosition,y:camPosition.y+0.1})
        break
      case 'BACKWARD':
        setPosition({...camPosition,y:camPosition.y-0.1})
        break
      case 'LEFT':
        setPosition({...camPosition,x:camPosition.x-cos,z:camPosition.z+sin})
        break
      case 'RIGHT':
        setPosition({...camPosition,x:camPosition.x+cos,z:camPosition.z-sin})
        break
    }
  },[camPosition,setPosition])

  const handleStop=(e)=>{
    console.log("stoping",e)
  }

  return(
    <>
    <LContainer>
      <StyledJoystick 
        size={100}
        baseColor="#59595978" 
        stickColor="#15151ba6" 
        throttle={30}
        move={handleLMove} 
        stop={handleStop} 
      />
    </LContainer>    
    <RContainer>
      <StyledJoystick 
        size={100}
        baseColor="#59595978" 
        stickColor="#15151ba6" 
        throttle={30}
        move={handleRMove} 
        stop={handleStop} 
      />
    </RContainer>
    </>
  )
}

export default Joystick