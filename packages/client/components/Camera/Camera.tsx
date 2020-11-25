import React,{useEffect} from 'react'
import {Entity} from 'aframe-react'
import { useCameraCtx } from '@vr-monitoring/hooks/Contexts/useCameraCtx'
import _ from 'lodash'
import throttling from '@vr-monitoring/shared/util/throttling'
import {hashgen} from '@vr-monitoring/shared/util/hashgen'

const Camera:React.FC =({children})=>{
  const {camPosition,camRotation,setPosition} = useCameraCtx()

  useEffect(()=>{
    AFRAME.registerComponent('cam-listener', {
      schema: {type: 'string'},
      init: function () {
        this.monitorEl = document.getElementById('camera');
        this.oldPosition=null
        this.oldRotation=null
        this.positionHash=hashgen(8)
        this.rotaionHash=hashgen(8)
      },
      tick:function(){
        if(
            this.oldPosition === null ||
            this.oldPosition?.x !==this.monitorEl.object3D.position.x ||
            this.oldPosition?.y !==this.monitorEl.object3D.position.y ||
            this.oldPosition?.z !==this.monitorEl.object3D.position.z
        ){
          throttling(this.positionHash,()=>{
              console.log("position changed",this.oldPosition,this.monitorEl.object3D.position)
          },300)
          this.oldPosition={...this.monitorEl.object3D.position}
        }
        if(
          this.oldRotation === null ||
          this.oldRotation?._x !==this.monitorEl.object3D.rotation._x ||
          this.oldRotation?._y !==this.monitorEl.object3D.rotation._y ||
          this.oldRotation?._z !==this.monitorEl.object3D.rotation._z
        ){
          throttling(this.rotaionHash,()=>{
            console.log("rotation changed",this.oldRotation,this.monitorEl.object3D.rotation)
          },300)
          this.oldRotation={...this.monitorEl.object3D.rotation}
        }
      }
    });
  },[])

  return(
    <Entity 
      primitive="a-camera" 
      wasd-controls="acceleration:500;fly:true;" 
      position={camPosition} rotation={camRotation} 
      cam-listener
      id="camera" 
      cursor="rayOrigin: mouse" 
      events={{
        componentchanged:()=>console.log('cam changed')
      }}
    >
      {children}
    </Entity>
  )
}

export default Camera