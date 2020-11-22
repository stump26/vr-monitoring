import React, { useState } from 'react'
import { createCtx } from '../createCtx'

export interface IPage {
  Component: React.FunctionComponent
  [key:string]:any
}

interface Context {
  pages: IPage[]
  addPage: (newPage:IPage)=>void
}

const [useCtx, Provider] = createCtx<Context>()

const PagesMenagerCtxProvider: React.FC = ({ children }) => {
  const [pages, setPages] = useState<IPage[]>([])
  const actions = {
    addPage:(newPage)=>{
      setPages([...pages,newPage])
    },
  }

  return <Provider value={{ pages, ...actions }}>{children}</Provider>
}

export { useCtx as usePagesMenagerCtx, PagesMenagerCtxProvider }
