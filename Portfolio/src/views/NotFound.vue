<script setup>
import { RouterLink } from "vue-router"
import TheHeader from "../components/Header.vue"
import TheFooter from "../components/Footer.vue"
</script>

<template>
    <section>
        <h1>404 Error</h1>
        <p>Page not found</p>
        <p>That's awkward try and go to </p>
        <RouterLink to="/">Home</RouterLink>
        <img src="../components/images/computer.png">
        <TheFooter></TheFooter>
    </section>
</template>

<style scoped>


    
    template {
        display: flex;
        color: blue;
    }

    section {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        color: white;
    }

    footer {
        margin-top: auto;
    }

    h1  {
        font-family: "Robotech";
        font-size: 8rem;
        font-weight: bold;
    }

    img {
        height: 200px;
        width: 200px;
    }

</style>