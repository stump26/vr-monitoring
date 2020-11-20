import React,{useEffect, useState} from 'react'
import {Entity} from 'aframe-react'

import {CyberSpace} from './space'
import HomeBoard from './components/HomeBoard'
import ChartBoard from './components/ChartBoard'
import './App.scss'

const App: React.FC = () => {
  useEffect(()=>{
  },[])
  return (
    <CyberSpace >
      <HomeBoard />
      <ChartBoard 
        url="http://localhost:5601/app/kibana#/visualize/edit/14e2e710-4258-11e8-b3aa-73fdaf54bfc9?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15d%2Cto%3Anow))"
        position="5 2 -2.3"
      />
      <ChartBoard 
        url="http://localhost:5601/app/kibana#/visualize/edit/935afa20-e0cd-11e7-9d07-1398ccfcefa3?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(vis:(defaultColors:('0%20-%204':'rgb(255,245,240)','12%20-%2016':'rgb(252,171,142)','16%20-%2020':'rgb(252,138,106)','20%20-%2024':'rgb(251,106,74)','24%20-%2028':'rgb(241,68,50)','28%20-%2032':'rgb(217,38,35)','32%20-%2036':'rgb(188,20,26)','36%20-%2040':'rgb(152,12,19)','4%20-%208':'rgb(254,228,216)','8%20-%2012':'rgb(253,202,181)'))),vis:(aggs:!((enabled:!t,id:'1',params:(field:clientip),schema:metric,type:cardinality),(enabled:!t,id:'3',params:(customLabel:'Country%20Source',field:geo.src,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:group,type:terms),(enabled:!t,id:'2',params:(customLabel:'Hour%20of%20Day',field:hour_of_day,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:25),schema:segment,type:terms)),params:(addLegend:!t,addTooltip:!t,colorSchema:Reds,colorsNumber:10,colorsRange:!(),enableHover:!t,invertColors:!f,legendPosition:right,percentageMode:!f,setColorRange:!f,times:!(),type:heatmap,valueAxes:!((id:ValueAxis-1,labels:(color:%23555,overwriteColor:!f,rotate:0,show:!f),scale:(defaultYExtents:!f,type:linear),show:!f,type:value))),title:'%5BLogs%5D%20Heatmap',type:heatmap))"
        position="10 2 -2.3"
      />
      <ChartBoard 
        url="http://localhost:5601/app/kibana#/visualize/edit/06cf9c40-9ee8-11e7-8711-e7a007dcef99?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Unique%20Visitors',field:clientip),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(field:geo.src,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:50),schema:segment,type:terms)),params:(addTooltip:!t,colorSchema:Reds,emsHotLink:!n,isDisplayWarning:!f,legendPosition:bottomright,mapCenter:!(0,0),mapZoom:2,outlineWeight:1,selectedJoinField:(description:'Two%20letter%20abbreviation',name:iso2),selectedLayer:(attribution:'%3Cp%3E%3Ca%20href%3D%22http:%2F%2Fwww.naturalearthdata.com%2Fabout%2Fterms-of-use%22%3EMade%20with%20NaturalEarth%3C%2Fa%3E%20%7C%20%3Ca%20href%3D%22https:%2F%2Fwww.elastic.co%2Felastic-maps-service%22%3EElastic%20Maps%20Service%3C%2Fa%3E%3C%2Fp%3E%26%2310;',created_at:'2017-04-26T17:12:15.978370',fields:!((description:'Two%20letter%20abbreviation',name:iso2),(description:'Country%20name',name:name),(description:'Three%20letter%20abbreviation',name:iso3)),format:(type:geojson),id:5659313586569216,layerId:'elastic_maps_service.World%20Countries',name:'World%20Countries',tags:!(),url:'https:%2F%2Fvector.maps.elastic.co%2Fblob%2F5659313586569216%3Felastic_tile_service_tos%3Dagree%26my_app_version%3D6.2.3%26license%3D77ab0ecf-a521-499d-bd52-fbd740bb81d0',weight:1),showAllShapes:!t,wms:(baseLayersAreLoaded:(),enabled:!f,options:(format:image%2Fpng,transparent:!t),selectedTmsLayer:(attribution:'%3Cp%3E%26%23169;%20%3Ca%20href%3D%22http:%2F%2Fwww.openstreetmap.org%2Fcopyright%22%3EOpenStreetMap%3C%2Fa%3E%20contributors%20%7C%20%3Ca%20href%3D%22https:%2F%2Fwww.elastic.co%2Felastic-maps-service%22%3EElastic%20Maps%20Service%3C%2Fa%3E%3C%2Fp%3E%26%2310;',id:road_map,maxZoom:18,minZoom:0,subdomains:!(),url:'https:%2F%2Ftiles.maps.elastic.co%2Fv2%2Fdefault%2F%7Bz%7D%2F%7Bx%7D%2F%7By%7D.png%3Felastic_tile_service_tos%3Dagree%26my_app_name%3Dkibana%26my_app_version%3D6.2.3%26license%3D77ab0ecf-a521-499d-bd52-fbd740bb81d0'),tmsLayers:!((attribution:'%3Cp%3E%26%23169;%20%3Ca%20href%3D%22http:%2F%2Fwww.openstreetmap.org%2Fcopyright%22%3EOpenStreetMap%3C%2Fa%3E%20contributors%20%7C%20%3Ca%20href%3D%22https:%2F%2Fwww.elastic.co%2Felastic-maps-service%22%3EElastic%20Maps%20Service%3C%2Fa%3E%3C%2Fp%3E%26%2310;',id:road_map,maxZoom:18,minZoom:0,subdomains:!(),url:'https:%2F%2Ftiles.maps.elastic.co%2Fv2%2Fdefault%2F%7Bz%7D%2F%7Bx%7D%2F%7By%7D.png%3Felastic_tile_service_tos%3Dagree%26my_app_name%3Dkibana%26my_app_version%3D6.2.3%26license%3D77ab0ecf-a521-499d-bd52-fbd740bb81d0')))),title:'%5BLogs%5D%20Unique%20Visitors%20by%20Country',type:region_map))"
        position="5 5.5 -2.3"
      />
      {/* camera config */}
      <Entity primitive="a-camera" wasd-controls="acceleration:500;fly:true;" position="0 2 0" >
        {/* <Entity primitive="a-cursor" id="mouseCursor" cursor="rayOrigin: mouse" raycaster="objects: .screen"/> */}
        <Entity laser-controls raycaster="objects: .screen;" />
      </Entity>
    </CyberSpace>
  )
}

export default App
