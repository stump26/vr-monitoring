import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import ChartBoard from '../ChartBoard'
import {usePagesMenagerCtx} from '@vr-monitoring/hooks/Contexts/usePagesMenagerCtx'
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

const ChartRegister = ()=>{
  const [url,setUrl] = useState<string>()
  const { addPage } = usePagesMenagerCtx()

  const handleUrlChange = useCallback((e)=>{
    setUrl(e.target.value)
  },[url])

  const handleRegistBtn = useCallback((e)=>{
    console.log(url)
    addPage({
      id:hashgen(12),
      Component: ChartBoard,
      position:{x:5,y:2,z:-2.3},
      url
    })
  },[url])

  return(
    <>
      <div>Register</div>
      <RegisterContainer>
        <label>url, embeded</label>
        <textarea value={url} onChange={handleUrlChange}/>
        <RegisterBtn onClick={handleRegistBtn}>Add</RegisterBtn>
      </RegisterContainer>
    </>
  )
}

export default ChartRegister