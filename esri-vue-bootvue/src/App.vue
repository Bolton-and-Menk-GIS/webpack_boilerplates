<template>
  <div id="app" class="container-fluid">
    <b-button v-b-modal.testModal>Show Modal</b-button>
    <b-modal id="testModal" :title="'BootstrapVue Modal'">
      <p>This is an example BootstrapVue Modal!</p>
    </b-modal>
    <map-component :basemap="'topo'"></map-component>

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
@import url(https://js.arcgis.com/4.6/esri/css/main.css);
@import url(//unpkg.com/bootstrap/dist/css/bootstrap.min.css);
@import url(//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css);

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 750px; /* delete me */
}

</style>
