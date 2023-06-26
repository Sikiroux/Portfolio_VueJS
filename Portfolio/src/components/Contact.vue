<script setup>
import { ref } from "vue"

const button = ref();

function preventSubmit(event) {
    event.preventDefault();
}

function executeFunction() {
    preventSubmit(event);
}
</script>

<template>
    <section id="contact">
        <form>
            <legend>Contact</legend>
            <div class="input-container">
                <label for="lastname">Nom : </label>
                <input type="text" id="lastname">
            </div>
            <div class="input-container">
                <label for="name">Prénom :  </label>
                <input type="text" id="name">
            </div>
            <div class="input-container">
                <label for="object">Objet : </label>
                <input type="text" id="object">
            </div>
            <div class="input-container message">
                <label for="message">Message : </label>
                <textarea id="message" rows="10" cols="40"></textarea>
            </div>
            <button type="submit" ref="button" @click="executeFunction">Envoyer</button>
        </form>
    </section>
</template>

<style scoped>
    section {
        height: 700px;
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 700px;
        border: 3px solid black;
    }

    legend{
        text-align: center;
        font-weight: bold;
        height: 35px;
        background-color: rgb(51, 49, 49);
    }
    
    form .input-container {
        padding-bottom: 30px;
        display: flex;
        gap: 30px;
    }

    textarea {
        border-radius: 5px;
    }

    form button   {
        width: 100px;
    }
    
</style>