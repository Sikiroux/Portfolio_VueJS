<script setup>
import { RouterLink } from "vue-router"
import TheHeader from "../components/Header.vue"
import TheFooter from "../components/Footer.vue"
</script>

<template>
    <section>
        <h1>404 Error</h1>
        <img src="../components/images/computer.png">
        <p>Page not found</p>
        <p>That's awkward try and go to :</p>
        <RouterLink to="/">Home</RouterLink>
    </section>
</template>

<style scoped>

    section {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        color: white;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }

    h1  {
        font-family: "Robotech";
        font-size: 8rem;
        font-weight: bold;
    }

    img {
        height: 200px;
        width: 200px;
        margin: 30px 0;
        color: white;
    }

    a {
        color: white;
        margin-top: 20px;
        border: 2px solid black;
        padding: 5px;
        border-radius: 2px;
        background-color: rgb(32, 32, 32);
    }
</style>