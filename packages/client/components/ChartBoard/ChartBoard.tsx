import React from 'react'
import styled from 'styled-components'
import {gql,useQuery} from '@apollo/react-hooks'
import { Entity } from 'aframe-react';
import PlaneBoard from '../PlaneBoard' 

type Props = {
  url:string
  position?:string
  rotaion?:string
}
interface getChartImagesResponse {
  getWebsiteCapture:string
}

const Container = styled(PlaneBoard)`
  position: relative;
  width: 1024px;
  height: 720px;
  background-color: rgba(185, 185, 185, 0.3);
  border-radius: 50px;
  padding: 40px; 
`

const GET_CHART_IMAGES=gql`
  query getImage($url:String!){
    getWebsiteCapture(url:$url)
  }
`

const ChartBoard:React.FC<Props> = ({url,position,rotaion})=>{
  const { loading, error, data } = useQuery<getChartImagesResponse>(GET_CHART_IMAGES,{variables:{url}})

  console.log(data)
  return (
    <Container position={position} rotation={rotaion} >
      {
        loading && !error
          ?<div>loading</div>
          :<img src={`data:image/jpg;base64, ${data.getWebsiteCapture}`} width="100%"/>
      }
    </Container>
  )
}

export default ChartBoard