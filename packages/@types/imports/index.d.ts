declare module '*.svg' {
  import { SVGFactory } from 'react'

  const content: SVGFactory
  export default content
}

declare module '*.png'

interface coord {
  x: number
  y: number
  z: number
}
