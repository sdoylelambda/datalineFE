<template>
  <div id="app">
    <NavbarComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/shared/NavbarComponent.vue";
import FooterComponent from "./components/shared/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
