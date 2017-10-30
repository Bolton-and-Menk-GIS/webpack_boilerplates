import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

let map = new Map({
  basemap: "streets"
});

let view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 10,
  center: [-93.3, 45]
});

const MapModule = {
  map: map,
  view: view
}

export default MapModule;