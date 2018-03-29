# webpack_boilerplates
Example Webpack Configurations that use Vue.js

## esri-vue-bootvue
This example uses [Vue.js](https://vuejs.org), [BootstrapVue](https://bootstrap-vue.js.org), and the ArcGIS JavaScript API via the `esri-loader`.  BootstrapVue provides Bootstrap 4 components built for Vue.js.  This is more suitable for map-centric applications where you want to use bootstrap.

## esri-vue-router-bootvue
This example uses [Vue.js](https://vuejs.org), [VueRouter](https://router.vuejs.org/en/), [BootstrapVue](https://bootstrap-vue.js.org), and the ArcGIS JavaScript API via the `esri-loader`.  BootstrapVue provides Bootstrap 4 components built for Vue.js.  The VueRouter is great for creating single-page applications by allowing easy navigation between different components.  Based on the [esri-vue-cli-example](https://github.com/tomwayson/esri-vue-cli-example).

## esri-vuex-bootvue
This configuration uses [Vue.js](https://vuejs.org), [Vuex] (https://vuex.vuejs.org/en/), [BootstrapVue](https://bootstrap-vue.js.org), and the ArcGIS JavaScript API via the `esri-loader`.  BootstrapVue provides Bootstrap 4 components built for Vue.js.  The VueRouter is great for creating single-page applications by allowing easy navigation between different components.  Vuex is a state management pattern + library for Vue.js applications enforcing good state management practices. Built using vue-cli. 

## webpack-vue-dojo-boot
This example combines usage of vue.js, dojo, dojo/bootstrap, and the ArcGIS JavaScript API.  This works by first loading dojo and the ArcGIS JavaScript API (4.4), and then loads the webpack bundles via dojo's AMD loader.  Dojo bootstrap is loaded using the dojo config set in the index.html; any other dojo dependant libraries need to be configured there as well. Babel is also used to transpile es6 code. See [this repo](https://github.com/tomwayson/esri-webpack-babel) for just loading dojo and the ArcGIS JS API in webapck.

#### Note - Templates that use the esri-loader should be used instead.  See this blog for more details:
[Loader of the Things: One Library to Load Them All](http://tomwayson.com/2018/01/05/loader-of-the-things-one-library-to-load-them-all/)

### To run all demos:
```
npm install
npm run build
npm run dev
```
