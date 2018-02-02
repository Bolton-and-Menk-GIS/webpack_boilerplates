<template>
  <div id="viewDiv"></div>
</template>

<script>
  // this is probably the real map component we will want to use, this assumes we are using 4.x
  import { loadModules } from 'esri-loader';

  export default {
    name: 'map-component',
    props: ['basemap'],
    data(){
      return {
        map: null,
        view: null
      }
    },
    mounted: function () {
      loadModules(['esri/map', 'esri/MapView'])
        .then(([Map, MapView]) => {
          // initialize map and view
          this.map = new Map({
            basemap: this.basemap || "satellite" // can be passed as prop, defaulting to satellite
          });

          this.view = new MapView({
            container: "viewDiv",
            map: this.map,
            zoom: 16,
            center: [-93.3, 45]
          });
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
