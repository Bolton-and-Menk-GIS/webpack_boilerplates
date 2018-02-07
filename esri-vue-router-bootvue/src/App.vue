<template>
  <div id="app">
    <div id="content-container">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/Plain-Map">Plain Map</router-link></li>
      <li><router-link to="/Web-Map">Web Map</router-link></li>
      <li><b-button v-b-modal.testModal>Show Modal</b-button></li>
    </ul>
    <b-modal id="testModal" :title="'BootstrapVue Modal'">
      <p>This is an example BootstrapVue Modal!</p>
    </b-modal>
    </div>
    <!--<Maps></Maps>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Maps from './components/Map'
export default {
  name: 'app',
//  components: {Maps},
  data () {
    return {
      msg: 'ArcGIS JS API Samples in a Vue.js App'
    }
  }
}
</script>

<style>
/* esri styles */
/*@import url('https://js.arcgis.com/3.23/esri/css/esri.css');*/
@import url('//js.arcgis.com/4.6/esri/css/main.css');

#viewDiv{
  width: 100%;
  height: 100%;
}


html,body{
  overflow: hidden;
  width: 100%;
  height:100%;
}

.map-container{
  width:100%;
  height:100%;
}

#content-container{
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 20px;
  background: white;
  border-radius: 10px;
  padding: 20px;
}

#app {
  width: 100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
