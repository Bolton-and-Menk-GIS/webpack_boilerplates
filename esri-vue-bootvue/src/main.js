import 'babel-polyfill';
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import { loadScript } from 'esri-loader'
import App from './App.vue'

// set up Vue plugins
Vue.use(BootstrapVue);

// example BootstrapVue component loading globally
import { Button, Modal } from 'bootstrap-vue/es/components';
Vue.use(Button);
Vue.use(Modal);


// preload the ArcGIS API
const options = {
  // url: 'https://js.arcgis.com/3.23/', //uncomment this out to use 3.x
  // add any custom options here
};
loadScript(options);

// render the app
new Vue({
  el: '#app',
  render: h => h(App)
});
