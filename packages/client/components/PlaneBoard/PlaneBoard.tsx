import React from 'react'
import { Entity } from 'aframe-react'

type Props ={
  id?:string
  className?:string
  position?:object
  rotation?:string
  background?:string
}

const PlaneBoard:React.FC<Props> =({id="",className="",position={x:0,y:0,z:0},rotation="",background})=>{
  return (
    <>
      <Entity 
        className={`screan ${className}`} 
        position={position} 
        rotation={rotation}
        geometry="primitive: box; width: 4; height: 3; depth: 0.02;"
        material="transparent: true; opacity: 0.4; shader: standard"
        id={id}
        color="#535353"
        src={background}
        events={{
          click:()=>{console.log(`${id} clicked`)},
          // componentchanged:(e)=>{console.log(`${id} componentchanged`,e)},
          // schemachanged:(e)=>{console.log(`${id} schemachanged`,e)}
        }}
        >
      </Entity>
    </>
  )
}

export default PlaneBoard