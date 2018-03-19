<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <b-button v-b-modal.testModal>Show Modal</b-button>
    <b-modal id="testModal" :title="'BootstrapVue Modal'">
      <p>This is an example BootstrapVue Modal!</p>
    </b-modal>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  @import url(//unpkg.com/bootstrap/dist/css/bootstrap.min.css);
  @import url(//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
