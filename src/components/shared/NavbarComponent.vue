<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../../assets/logo.png" class="app-logo" alt="Logotipo" />
      
       
            <router-link to="/" active-class="active">DATALINE SYSTEMS</router-link>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <!-- <li>
            <router-link to="/home" active-class="active">DATALINE SYSTEMS</router-link>
          </li> -->
          <li>
            <router-link to="/about" active-class="active">ABOUT</router-link>
          </li>
          <li>
            <router-link to="/services" active-class="active">SERVICES</router-link>
          </li>
          <li>
            <router-link to="/caseStudies" active-class="active">CASE STUDIES</router-link>
          </li>
          <li>
            <router-link to="/location" active-class="active">LOCATION</router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="active">CONTACT</router-link>
          </li>
        </ul>
      </nav>

      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style>
</style>