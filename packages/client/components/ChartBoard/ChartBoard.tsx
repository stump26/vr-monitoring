import React from 'react'
import styled from 'styled-components'
import {gql,useQuery} from '@apollo/react-hooks'
import { Entity } from 'aframe-react';
import PlaneBoard from '../PlaneBoard' 
import Text from '../Text'

type Props = {
  url:string
  position?:coord
  rotaion?:string
}
interface getChartImagesResponse {
  getWebsiteCapture:string
}


const GET_CHART_IMAGES=gql`
  query getImage($url:String!){
    getWebsiteCapture(url:$url)
  }
`

const ChartBoard:React.FC<Props> = ({url,position,rotaion})=>{
  const { loading, error, data } = useQuery<getChartImagesResponse>(GET_CHART_IMAGES,{variables:{url}})

  console.log(data)
  if(loading && !error){
    return (
      <>
      <PlaneBoard position={position} rotation={rotaion} />
      <Text
        value={"loading"}
        color={"#fff"}
        align="center"
        zOffset={0.02}
        width={10}
        position={position}
      />
      </>
    )
    
  }
  return (
    <PlaneBoard position={position} rotation={rotaion} background={`data:image/jpg;base64, ${data.getWebsiteCapture}`} />
  )
}

export default ChartBoard