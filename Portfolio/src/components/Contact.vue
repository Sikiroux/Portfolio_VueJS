<script setup>
import { ref } from "vue"

const button = ref();

function preventSubmit(event) {
    event.preventDefault();
}

function executeFunction() {
    preventSubmit();
    console.log("here")
}
</script>

<template>
    <section>
        <form>
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
            <div class="input-container">
                <label for="message">Message : </label>
                <input type="text" id="message"> 
            </div>
            <button type="submit" ref="button" @click="executeFunction">Envoyer</button>
        </form>
    </section>
</template>

<style scoped>
    section {
        height: 700px;
    }
</style>