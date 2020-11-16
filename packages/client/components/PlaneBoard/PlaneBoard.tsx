import React from 'react'
import { Entity } from 'aframe-react';

type Props ={
  id?:string
  className?:string
  position?:string
  rotation?:string
}

const PlaneBoard:React.FC<Props> =({children,id="",className="",position="",rotation=""})=>{
  return (
    <Entity primitive="a-entity" 
      htmlembed="ppu:256" 
      className={`screan ${className}`} 
      position={position} 
      rotation={rotation}
      id={id}
      color="#fff"
      >
        
      {children}
    </Entity>
  )
}

export default PlaneBoard