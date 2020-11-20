import React,{useRef,useEffect} from 'react'
import { Entity } from 'aframe-react';
import {Entity as IEntity} from 'aframe'

type Props ={
  id?:string
  className?:string
  position?:string
  rotation?:string
}

const PlaneBoard:React.FC<Props> =({children,id="",className="",position="",rotation=""})=>{
  const entityRef = function(entityEl:IEntity){
    entityEl.ontransitionend=(ev: TransitionEvent) => {
      console.log(this,ev)
    }
    console.log(entityEl.object3D)
  }

  return (
    <Entity primitive="a-entity" 
      htmlembed="ppu:256" 
      className={`screan ${className}`} 
      position={position} 
      rotation={rotation}
      id={id}
      color="#fff"
      events={{
        // click:()=>{console.log(`${id} clicked`)},
        componentchanged:(e)=>{console.log(`${id} componentchanged`,e)},
        schemachanged:(e)=>{console.log(`${id} schemachanged`,e)}
      }}
      _ref={entityRef}
      >
      {children}
    </Entity>
  )
}

export default PlaneBoard