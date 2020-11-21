import React from 'react'
import { Entity } from 'aframe-react'

interface IProps {
  color?: string,
  value: string,
  width?: number,
  lineHeight?: number,
  letterSpacing?: number,
  align?: string,
  opacity?: number,
  zOffset?: number,
  position?: object,
}

const Text:React.FC<IProps> = ({
  align, color, letterSpacing, lineHeight, opacity, value, width, zOffset, ...props
})=>{
  return(
    <Entity
      text={{
        value, width, align, letterSpacing, lineHeight, color, opacity, zOffset,
      }}
      {...props}
    >
      {props.children}
    </Entity>
  )

}

export default Text