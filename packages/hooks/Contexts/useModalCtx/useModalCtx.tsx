import React, { useReducer } from 'react'
import { createCtx } from '../createCtx'

interface Context {
  modalVisible:boolean
  modalOff:Function
  modalOn:Function
}

const [useCtx, Provider] = createCtx<Context>()

const reducer = (state:boolean,action):boolean=>{
  switch(action.type){
    case 'ON':
      return true
    case 'OFF':
      return false
  }
}

const ModalCtxProvier: React.FC = ({ children }) => {
  const [modalVisible, dispatch] = useReducer(reducer,false)
  const actions = {
    modalOff:()=>dispatch({type:'OFF'}),
    modalOn:()=>dispatch({type:'ON'})
  }

  return <Provider value={{ modalVisible, ...actions }}>{children}</Provider>
}

export { useCtx as useModalCtx, ModalCtxProvier }
