<script setup>
import TheHeader from "../components/Header.vue"
import TheFooter from "../components/Footer.vue"
import Slideshow from "../components/Slideshow.vue"
import Contact from "../components/Contact.vue"

</script>


<template>
    <div class="page-container">
        <TheHeader></TheHeader>
        <!-- Setting up main content -->
        <section class="main">
                <a class="anchor" id="presentation"></a>
                <section>
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
                </section>
            <Slideshow></Slideshow>
            <Contact></Contact>
        
        </section>
        <TheFooter></TheFooter>
    </div>
  
</template>

<style scoped>

.page-container {
    display: flex;
    flex-direction: column;
}

.main section{
  margin-left: 130px;
  margin-top: 80px;
  color: white;
 }

 a.anchor {
  display: block;
  position: relative;
  top: -200px;
  visibility: hidden;
 }


 .main a {
  text-decoration: none;
  color: white;
  max-width: 300px;
 }

 .main h1 {
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 15px;
  max-width: 300px;
  
 }


 p {
  font-size: 1.2rem;
  width: 700px;
 }

</style>