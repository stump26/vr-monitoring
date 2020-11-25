import React, { useState } from 'react'
import { createCtx } from '../createCtx'

interface Context {
  camPosition:coord
  camRotation:coord
  setPosition:React.Dispatch<React.SetStateAction<coord>>
  setRotation:React.Dispatch<React.SetStateAction<coord>>
}

const [useCtx, Provider] = createCtx<Context>()

const CameraCtxProvier: React.FC = ({ children }) => {
  const [position, setPosition] = useState<coord>({x:0,y:2,z:0})
  const [rotation, setRotation] = useState<coord>({x:0,y:0,z:0})
  const actions = {
    setPosition,
    setRotation
  }

  return <Provider value={{ camPosition:position, camRotation:rotation, ...actions }}>{children}</Provider>
}

export { useCtx as useCameraCtx, CameraCtxProvier }
