import React, { useCallback } from 'react'
import styled from 'styled-components'

interface IProps {
  visible:boolean
  closeAction:Function
}

const ModalBG = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #2c2c2ccc;
  justify-content: center;
  align-items: center;
`

const ContentsContainer = styled.div`
  display: flex;
  flex-direction:column;
  width:400px;
  height:400px;
  border:1px solid #5e5e5e;
  border-radius:10px;
  justify-content: center;
  align-items: center;
`

const ModalCloseBtn = styled.div`
  font-size:24px;
  padding:10px 60px;
  margin-top: auto;
  border:1px solid #5e5e5e;
  border-radius:10px;
  cursor:pointer;

  &:hover{
    border-color:#fff;
  }
`

const Modal:React.FC<IProps> = ({children,visible=false,closeAction})=>{
  const handleCloseClick = useCallback(()=>{
    closeAction()
  },[])
  return(
    visible&&<ModalBG>
      <ContentsContainer>
        {children}
        <ModalCloseBtn onClick={handleCloseClick}>Close</ModalCloseBtn>
      </ContentsContainer>
    </ModalBG>

  )
}

export default Modal