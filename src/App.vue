<template>
  <div id="app">
    <Homepage msg="Welcome to DATALINE SYSTEMS!" />
  </div>
</template>

<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>

<script>
import Homepage from "./components/Homepage.vue";
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default {
  name: "App",
  components: {
    Homepage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
