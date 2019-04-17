<template>
  <div id="app" class="container-fluid">
    <div class='navbar'>
      <b-button v-b-modal.testModal>Show Modal</b-button>
    <b-modal id="testModal" :title="'BootstrapVue Modal'">
      <p>This is an example BootstrapVue Modal!</p>
    </b-modal>
    </div>
    <map-component :basemap="'topo'"></map-component>
    <div id="mapnav" style="margin: 50px 0 0 1px;"></div>
  </div>
</template>

<script>
import MapComponent from "./components/Map.vue";
export default {
  components: {MapComponent},
  name: 'app',
  data () {
    return {
      msg: 'ArcGIS JS API Samples in a Vue.js App'
    }
  }
}
</script>

<style>
/* esri styles */
@import url(https://js.arcgis.com/4.11/esri/css/main.css);
@import url(//unpkg.com/bootstrap/dist/css/bootstrap.min.css);
@import url(//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css);

html,body{
    font-family: 'Voces', sans-serif;
    /*font-family: Voces, cursive;*/
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
}

#app {
  position: relative;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 10px; */
  height: 100%;
}

.navbar{
  z-index: 1000;
  position: absolute;
  height: 50px;
}
</style>
