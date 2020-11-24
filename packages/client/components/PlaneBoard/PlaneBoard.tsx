import React,{useCallback} from 'react'
import { Entity } from 'aframe-react'

type Props ={
  id?:string
  className?:string
  position?:coord
  rotation?:coord
  changeEvent?:(e:any,id:string)=>void
}

const PlaneBoard:React.FC<Props> =({children,id="",className="",position={x:0,y:0,z:0},rotation="",changeEvent})=>{
  let timer;
  const handleChange = useCallback((e)=>{
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      timer = null;
      console.log("planeboard>",e)
      changeEvent?.call(this,e,id)
    }, 400);
  },[id,changeEvent])
  
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
        events={{
          click:()=>{console.log(`${id} clicked`)},
          componentchanged:handleChange,
          // schemachanged:(e)=>{console.log(`${id} schemachanged`,e)}
        }}
        >
          {children}
      </Entity>
    </>
  )
}

export default PlaneBoard