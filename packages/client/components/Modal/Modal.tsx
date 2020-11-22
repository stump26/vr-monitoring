import React, { useCallback } from 'react'
import styled from 'styled-components'

interface IProps {
  Contents: React.ReactNode
  visible:boolean
  closeAction:Function
}

const ModalBG = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #2c2c2ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal:React.FC<IProps> = ({Contents,visible=false,closeAction})=>{
  const handleCloseClick = useCallback(()=>{
    closeAction()
  },[])
  return(
    visible&&<ModalBG>
      {Contents}

      <button onClick={handleCloseClick}>Close</button>
    </ModalBG>

  )
}

export default Modal