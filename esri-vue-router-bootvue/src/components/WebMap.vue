<template>
  <div id="viewDiv"></div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
  name: 'locate-button',
  mounted: function () {
    loadModules(['esri/Map', 'esri/WebMap', 'esri/views/MapView', 'esri/widgets/Locate'])
      .then(([Map, WebMap, MapView, LocateButton]) => {
        // create map with the given options
        const map = new WebMap({
          portalItem: {
            id: "e691172598f04ea8881cd2a4adaa45ba"
          }
        });

//        const map = new Map( {
//          center: [-56.049, 38.485],
//          zoom: 3,
//          basemap: 'streets',
//        });

        this.view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 5,
          center: [-93.3, 45]
        });
        // initialize the locate button
      })
      .catch(err => {
        // handle any script or module loading errors
        console.error(err);
      });
  }
}
</script>

<style>
  .lb {
  position: relative;
  top: 125px;
  left: 20px;
  z-index: 50;
}
</style>
