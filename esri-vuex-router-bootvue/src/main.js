import 'babel-polyfill';
import Vue from 'vue';
import store from './store/index';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import { loadScript } from 'esri-loader';
import App from './App';
import TempsMap from './components/TempsMap.vue';
import WindSpeedMap from './components/WindSpeedMap.vue';

// set up Vue plugins
Vue.use(VueRouter);
Vue.use(BootstrapVue);

// example BootstrapVue component loading globally
import { Button, Modal } from 'bootstrap-vue/es/components';
Vue.use(Button);
Vue.use(Modal);


const routes = [
  { path: '/Temps-Map', component: TempsMap, props: {basemap: 'dark-gray-vector'}},
  { path: '/WindSpeed-Map', component: WindSpeedMap },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

// preload the ArcGIS API
const options = {
  // url: 'https://js.arcgis.com/3.23/', //uncomment this out to use 3.x
  // add any custom options here
};
loadScript(options);

// render the app
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
