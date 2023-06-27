<script setup>
import { onMounted, ref } from "vue";
import Contact from "./Contact.vue"

const display = ref(true);
</script>

<script>

</script>

<template>
    <header class="header-component">
        <div class="header-container">
            <div class="logo-holder"></div>
            <nav class="navigation">
                <a href="#presentation">Presentation</a>
                <a href="#project">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>
</template>




<style scoped>
    .header-component {
        position: sticky;
        top: 1px;
        transform: translateY(-2px);
        display: flex;
        width: 100%;
        align-items: center;
        padding-bottom: 20px;
        z-index: 10;
        background: linear-gradient(45deg, var(--color-background), rgb(122, 120, 120));
        padding-top: 15px;
    }

    .header-container {
        display: flex;
        align-items: center;
        width: 100%;
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


    
</style>