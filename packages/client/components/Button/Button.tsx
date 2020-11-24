import React, {useState,useCallback} from 'react'
import styled from 'styled-components'
import {Entity} from 'aframe-react'
import Text from '../Text'

interface Props extends React.HTMLProps<HTMLDivElement> {
  actionToTrigger?: Function,
  id?: string,
  buttonColor?: string,
  width?: number,
  height?: number,
  position?: object,
  text?: string,
  textColor?: string,
  textWidth?: number,
  value?: string
}

const Button:React.FC<Props>=({
  id="", className="", position, width, height, buttonColor, text, textColor, textWidth,actionToTrigger, value,onClick
})=>{
  const [opacity,setOpacity] = useState(1)

  const startIntersection = useCallback(()=>{
    console.log("startInterscection")
    setOpacity(0.2)
  },[value])
  const endIntersection = useCallback(()=>{
    console.log("endInterscection")
    setOpacity(1)
  },[])

  return( 
    <Entity 
      id={id}
      className={className}
      geometry={{
        primitive: 'box', height, width, depth:0.02,
      }}
      material={{
        shader: 'flat', side: 'double', color: buttonColor, opacity,
      }}
      scale={{ x: 0.5, y: 0.5, z: 0.5 }}
      position={position}
      events={{
        click:actionToTrigger,
        'mouseenter': startIntersection,
        'mouseleave': endIntersection,
      }}
    >
      <Text
        value={text}
        color={textColor}
        align="center"
        zOffset={0.02}
        width={textWidth}
        position={{ x: 0, y: 0, z: 0 }}
      />
    </Entity>
  )
}

export default Button