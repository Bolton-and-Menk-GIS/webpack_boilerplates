import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
// Single State Tree
const store = new Vuex.Store({
    state:{
      // Central data structure
      station: '',
      temp: ''
    },
    actions:{
      // Calls to commit changes to store
      station(context,payload){
          context.commit('station', payload);
      },
      temp(context,payload){
        context.commit('temp', payload);
      }
    },
    mutations:{
      // Object making changes to store
      station(state,payload){
          state.station = payload.station;
          // return state.count;
      },
      temp(state,payload){
          state.temp = payload.temp;
          // return state.average;
      }
    },
    getters:{
      //
      // getCount(state){
      //   return this.state.count;
      // }
    }
});
hook.store = store;

export default store