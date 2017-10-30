# webpack_example_configurations
Example Webpack Configurations

## webpack-vue-dojo-boot
This example combines usage of vue.js, dojo, dojo/bootstrap, and the ArcGIS JavaScript API.  This works by first loading dojo and the ArcGIS JavaScript API (4.4), and then loads the webpack bundles via dojo's AMD loader.  Dojo bootstrap is loaded using the dojo config set in the index.html; any other dojo dependant libraries need to be configured there as well. Babel is also used to transpile es6 code. See [this repo](https://github.com/tomwayson/esri-webpack-babel) for just loading dojo and the ArcGIS JS API in webapck.

### The following dependencies are used:

 - babel-core, babel-loader
 - cross-env
 - css-loader, style-loader, file-loader
 - vue-loader, vue-template-compiler
 - webpack, webpack-dev-server

### Run demo:
```
npm install
npm run build
```
