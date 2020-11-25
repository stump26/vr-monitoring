import React from 'react'
import styled from 'styled-components'
import { Joystick as ReactJoystick } from 'react-joystick-component'

const Container = styled.div`
  position: fixed;
  bottom:30px;
  right:30px;
`

const StyledJoystick = styled(ReactJoystick)`
`

const Joystick = ()=>{
  const handleMove=(e)=>{
    console.log("moving",e)
  }
  const handleStop=(e)=>{
    console.log("stoping",e)
  }
  return(
    <Container>
      <StyledJoystick 
        size={100}
        baseColor="#59595978" 
        stickColor="#15151ba6" 
        throttle={100}
        move={handleMove} 
        stop={handleStop} 
      />
    </Container>
  )
}

export default Joystick