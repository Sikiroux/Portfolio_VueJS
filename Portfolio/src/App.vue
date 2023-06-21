<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/Header.vue'
import TheFooter from './components/Footer.vue'
import Slideshow from './components/Slideshow.vue'
</script>

<template>
  <body>
  <TheHeader></TheHeader>
  <!-- Setting up main content -->
  <main>
    <a href="https://glosbe.com/ty/en/ia%20orana" target="_blank">
      <h1>Ia orana.</h1>
    </a>
    <p>My name is Damien Ekouma Ndong, I'm still learning web developement.
      At the moment I did not build any full fledged website but all my projects can be seen here.  
    </p>
    <br/>
    <p>
      I love learning and I'm always looking to get better day after day.

    </p>
  </main>
  <Slideshow></Slideshow>
  <TheFooter></TheFooter>
  </body>
  
</template>


<style scoped>

 main {
  margin-left: 130px;
  margin-top: 80px;
  color: white;
 }

 main a {
  text-decoration: none;
  color: white;
 }

 main h1 {
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 15px;
 }

 p {
  font-size: 1.2rem;
  width: 700px;
 }
</style>
