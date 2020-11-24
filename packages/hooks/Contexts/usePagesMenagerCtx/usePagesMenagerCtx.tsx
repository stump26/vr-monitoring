import React, { useState } from 'react'
import { clearTimeout } from 'timers'
import { createCtx } from '../createCtx'

interface ComponentProps {
  id:string
  position:coord
  rotation?: coord
}

export interface IPage extends ComponentProps {
  id:string
  Component: React.FunctionComponent<ComponentProps & React.HTMLProps<HTMLDivElement>>
  position: coord
  rotation?: coord
  [key:string]:any
}

interface Context {
  getPages:()=>IPage[]
  addPage: (newPage:IPage)=>void
  movePage:(targetId:string,newCoord:coord)=>void
}

const [useCtx, Provider] = createCtx<Context>()

const PagesMenagerCtxProvider: React.FC = ({ children }) => {
  const [pages, setPages] = useState<Map<string,IPage>>(new Map())
  const actions = {
    getPages:()=>([...pages.values()]),
    addPage:(newPage)=>{
      setPages(new Map([...pages,[newPage.id,newPage]]))
    },
    movePage:(targetId:string,newCoord:coord)=>{
      const target = pages.get(targetId)
      if(
        target.position.x!==newCoord.x ||
        target.position.y!==newCoord.y ||
        target.position.z!==newCoord.z
      ){
        setPages(new Map([...pages,[targetId,{
          ...target,
          position:newCoord
        }]]))
      }
    }
  }

  return <Provider value={{ ...actions }}>{children}</Provider>
}

export { useCtx as usePagesMenagerCtx, PagesMenagerCtxProvider }
