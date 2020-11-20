import React from 'react'
import styled from 'styled-components'

import PlaneBoard from '../PlaneBoard' 

const Container = styled(PlaneBoard)`
  position: relative;
  width: 1024px;
  height: 720px;
  background-color: rgba(185, 185, 185, 0.3);
  border-radius: 50px;
  padding: 40px; 
`
const Title = styled.div`
  position: relative;
  font-size: 80px;
  text-align: center;
  margin-top: 80px;
`

const HomeBoard = ()=>{
  
  return (
    <Container id="main" className="screen main dark" position="0 2 -2.3" >
      <Title>vr-monitor</Title>
    </Container>
  )
}

export default HomeBoard