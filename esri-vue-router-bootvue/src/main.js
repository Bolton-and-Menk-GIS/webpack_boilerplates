import 'babel-polyfill';
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';
import { loadScript } from 'esri-loader'
import App from './App.vue'
import PlainMap from './components/PlainMap.vue';
import WebMap from './components/WebMap.vue';

// set up Vue plugins
Vue.use(VueRouter);
Vue.use(BootstrapVue);

// example BootstrapVue component loading
import { Button, Modal } from 'bootstrap-vue/es/components';

Vue.use(Button);
Vue.use(Modal);


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/Plain-Map', component: PlainMap },
  { path: '/Web-Map', component: WebMap },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

// preload the ArcGIS API
const options = {
  // url: 'https://js.arcgis.com/3.23/', //comment this out to use latest (4.x)
};
loadScript(options);

// render the app
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
