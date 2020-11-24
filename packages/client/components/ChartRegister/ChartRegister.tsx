import React, { useState, useReducer, useCallback } from 'react'
import styled from 'styled-components'
import ChartBoard from '../ChartBoard'
import {usePagesMenagerCtx} from '@vr-monitoring/hooks/Contexts/usePagesMenagerCtx'
import {useModalCtx} from '@vr-monitoring/hooks/Contexts/useModalCtx'
import {hashgen} from '@vr-monitoring/shared/util/hashgen'


const RegisterContainer = styled.div`
  position:relative;
  display:flex;
  flex:1;
  width:95%;
  flex-direction:column;
  margin:20px 0;
  font-size:20px;
`
const RegisterBtn = styled.div`
  font-size:24px;
  padding:10px 60px;
  margin-top: auto;
  border:1px solid #5e5e5e;
  border-radius:10px;
  text-align:center;
  cursor:pointer;

  &:hover{
    border-color:#fff;
  }
`

function coordReducer(state,action){
  switch(action.type){
    case 'X':
      return {...state,x:action.value}
    case 'Y':
      return {...state,y:action.value}
    case 'Z':
      return {...state,z:action.value}
  }
}

// TODO register 폼 레이아웃 설정, position 설정
const ChartRegister = ()=>{
  const { addPage } = usePagesMenagerCtx()
  const { modalOff }=useModalCtx()
  const [rawUrl,setUrl] = useState<string>()
  const [coord,dispatch] = useReducer(coordReducer,{x:0,y:0,z:0})

  const handleUrlChange = useCallback((e)=>{
    setUrl(e.target.value)
  },[rawUrl])

  const handleRegistBtn = useCallback((e)=>{
    let [aa] = rawUrl?.match(/src="(?:[^"\\]|\\.)*"/gi)
    const url =aa.match(/"(.*?)"/g)[0].replace(/^[^"]*"|".*/g, '')
    addPage({
      id:hashgen(12),
      Component: ChartBoard,
      position:coord,
      url
    })
    modalOff()
  },[rawUrl,coord])

  const handleXpos = useCallback(e=>dispatch({type:'X',value:e.target.value}),[coord,dispatch])
  const handleYpos = useCallback(e=>dispatch({type:'Y',value:e.target.value}),[coord,dispatch])
  const handleZpos = useCallback(e=>dispatch({type:'Z',value:e.target.value}),[coord,dispatch])

  return(
    <>
      <div>Register</div>
      <RegisterContainer>
        <label>url, embeded</label> 
        <textarea value={rawUrl} onChange={handleUrlChange}/>
        <label>pogition</label>
        <label>x</label>
        <input type="number" defaultValue={0} onChange={handleXpos}/>
        <label>y</label>
        <input type="number" defaultValue={0} onChange={handleYpos}/>
        <label>z</label>
        <input type="number" defaultValue={0} onChange={handleZpos}/>
        <RegisterBtn onClick={handleRegistBtn}>Add</RegisterBtn>
      </RegisterContainer>
    </>
  )
}

export default ChartRegister