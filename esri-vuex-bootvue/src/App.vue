<template>
  <div id="app">
    <b-button v-b-modal.testModal class="nav-btn">Show Modal</b-button>
    <b-modal id="testModal" :title="'BootstrapVue Modal'">
      <p>This is an example BootstrapVue Modal!</p>
    </b-modal>
    <content-panel></content-panel>
    <map-component :basemap="'topo'"></map-component>

  </div>
</template>

<script>
import MapComponent from './components/Map';
import ContentPanel from './components/contentPanel';

export default {
  components: {MapComponent, ContentPanel},
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

html, body{
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

  .nav-btn{
    position: absolute;
    bottom: 15px;
    bottom: 20px;
    z-index: 1000;
    height: 50px;
    right: 15px;
  }

</style>
