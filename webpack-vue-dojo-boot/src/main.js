import Vue from 'vue';
import App from './App.vue';
import MapModule from './map';

// example imports
// dojo bootstrap stuff
// import Modal from 'bootstrap/Modal';

// dojo import example
// import query from 'dojo/query';

// compile css into bundle
import './css/style.css';

let vue = new Vue({
  el: '#app',
  render: h => h(App),
  data: {

  },
  mounted: function(){
    console.log('vue instance mounted! ', this);
  }
});
