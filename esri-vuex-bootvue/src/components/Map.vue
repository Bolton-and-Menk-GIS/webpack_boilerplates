<template>
  <div id="viewDiv"></div>
</template>

<script>
  // this is probably the real map component we will want to use, this assumes we are using 4.x
  import { loadModules } from 'esri-loader';
  import store from '../store/index';
  import * as type from '../store/mutation_types';

  export default {
    name: 'map-component',
    props: ['basemap'],
    store,
    data(){
      return {
        map: null,
        view: null
      }
    },
    mounted: function () {
      loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'])
        .then(([Map, MapView, FeatureLayer]) => {
          // initialize map and view
          this.map = new Map({
            basemap: this.basemap || "topo" // can be passed as prop, defaulting to satellite
          });

          this.view = new MapView({
            container: "viewDiv",
            map: this.map,
            zoom: 10,
            center: [-93.3, 45]
          });

          const fl = new FeatureLayer({
//            url: 'https://livefeeds.arcgis.com/arcgis/rest/services/LiveFeeds/NOAA_METAR_current_wind_speed_direction/MapServer/0',
            outFields: ['*'],
            refreshInterval: 0.5,
            portalItem:{
              id: '05636a1ff35947f4b03a7c33ec19cfe7'
//              id: '0f995b7a55894da8bc2e9bd36f0d4c10'
            },
            popupEnabled: false
          });

          this.view.on("click", (evt)=>{
            this.view.hitTest(evt.screenPoint).then((rsp)=>{
              let station = rsp.results?rsp.results[0].graphic.attributes.STATION_NAME:null;
              let temp = rsp.results?rsp.results[0].graphic.attributes.TEMP:null;

              store.dispatch({
                type: type.Station,
                station: station
              });
              store.dispatch({
                type: type.Temperature,
                temp: temp
              })
            })
          });
          this.map.add(fl);
      })
        .catch(err => {
          // handle any script or module loading errors
          console.error(err);
        });
    }
  }


</script>

<style>
  #viewDiv{
    width: 100%;
    height: 100%;
  }
</style>
