import React from 'react'
import styled from 'styled-components'

import PlaneBoard from '../PlaneBoard' 
import Button from '../Button'

interface IProps {
  position:coord
}

const HomeBoard:React.FC<IProps> = ({position})=>{
  return (
    <>
      <PlaneBoard id="main" className="screen main dark" position={position} />
      <Button 
        text="Button" 
        width={1.7}
        height={0.5}
        textColor="#ffa600"
        textWidth={10}
        position={{...position,z:position.z+0.03}}
      />
    </>
  )
}

export default HomeBoard