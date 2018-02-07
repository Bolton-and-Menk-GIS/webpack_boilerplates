<template>
  <div id="viewDiv">
  </div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
  name: 'home-button',
  props: ['map'],
  mounted: function () {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Home'])
      .then(([Map, MapView, HomeButton]) => {
        // create map with the given options

        const map = new Map({
          center: [-56.049, 38.485],
          zoom: 3,
          basemap: 'gray',
        });

        this.view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 16,
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

  .map-container {
    height: 500px;
  }
.HomeButton {
  position: relative;
  top: 125px;
  left: 20px;
  z-index: 50;
}
</style>
