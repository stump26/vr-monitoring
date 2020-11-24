import React, {useCallback} from 'react'
import styled from 'styled-components'
import {gql,useQuery} from '@apollo/react-hooks'
import {usePagesMenagerCtx} from '@vr-monitoring/hooks/Contexts/usePagesMenagerCtx'
import { Entity } from 'aframe-react';
import PlaneBoard from '../PlaneBoard' 
import Text from '../Text'

type Props = {
  url?:string
  position?:coord
  rotation?:coord
  id?:string
}
interface getChartImagesResponse {
  getWebsiteCapture:string
}

const GET_CHART_IMAGES=gql`
  query getImage($url:String!){
    getWebsiteCapture(url:$url)
  }
`

const ChartBoard:React.FC<Props> = ({id,url,position,rotation})=>{
  const { movePage } = usePagesMenagerCtx()
  const { loading, error, data } = useQuery<getChartImagesResponse>(GET_CHART_IMAGES,{variables:{url}})
  
  const handlePageMove= useCallback((e:any,id:string)=>{
    console.log("changed")
    movePage(id,e.target.object3D.position)
  },[movePage,loading, error,data])

  if(loading && !error){
    return (
      <>
      <PlaneBoard position={position} rotation={rotation} id={id} changeEvent={handlePageMove}/>
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
    <>
      <PlaneBoard position={position} rotation={rotation} id={id} changeEvent={handlePageMove}>
        <Entity 
          primitive="a-image" 
          rotation={rotation}
          position={{z:0.03}}

          src={`data:image/jpg;base64, ${data.getWebsiteCapture}`}
          width={3.8}
          height={2.8}
        />
      </PlaneBoard>
    </>
  )
}

export default ChartBoard