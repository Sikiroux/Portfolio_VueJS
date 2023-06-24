<script setup>
import { onMounted } from "vue";
import Modal from "./ModalProject.vue"

</script>

<script>
</script>

<template>
    <header class="header-component">
        <div class="logo-holder"></div>
        <nav class="navigation">
            <a href="#">Présentation</a>
            <a href="#">Créations</a>
            <a href="#">Contact</a>
        </nav>
        <button class="add-project-button" ref="button">Ajouter projet</button>
    </header>
    <Modal/>
</template>




<style>
    .header-component {
        display: flex;
        width: 100%;
        margin-top: 15px;
        align-items: center;
        padding-bottom: 20px;
    }
    
    .logo-holder {
        height: 65px;
        min-width: 65px;
        background-image: url(./icons/Logo.png);
        background-size: cover;
        border-radius: 50%;
        margin-left: 40px;
    }
    
    .logo-holder:hover {
        box-shadow:  rgb(204, 204, 204) 1px 0 10px;
        transition-duration: 450ms;
        cursor: pointer;
    }
    
    .navigation a {
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
    }

    .navigation a:hover {
        text-shadow: rgb(204, 204, 204) 1px 0 10px;
        transition-duration: 450ms;
        transform: scale(1.1);
    }
    

    .navigation {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        margin-right: 70px;
        margin-left: 30%;
        gap: 80px;
    }

    .add-project-button {
        padding: 4px;
        border: 1px solid white;
        background-color: rgb(43, 43, 43);
        color: white;
        border-radius: 5px;
        margin-right: 50px;
    }

    .add-project-button:hover {
        box-shadow:  rgb(204, 204, 204) 1px 0 10px;
        transition-duration: 450ms;
        text-shadow: rgb(204, 204, 204) 1px 0 10px;
        cursor: pointer;
    }

    
</style>