<script setup>
import { onMounted, ref } from 'vue';
import {useModalStore} from '../stores/modal'


const store = useModalStore();
const modals = ref(false);
const title = ref("");
const date = ref("");
const technology = ref("");
const links = ref("");
const imageLinks = ref("")

function openModal() {
        modals.value = true;
        console.log("here")
        return;
    }


function onAddButton() {
        preventSubmit(event);
        registeredModalData();
        removeFieldsData();
        closeModal();
}

function closeModal() {
        modals.value = false;
        console.log("there")
    }

    

function preventSubmit(event) {
    event.preventDefault();
}

function registeredModalData() {
    store.title = title.value;
    store.date = date.value;
    store.technology = technology.value;
    store.links = links.value;
    store.imageLinks = imageLinks.value;
    console.log(title.value);
}

function removeFieldsData() {
    title.value = "";
    date.value = "";
    technology.value = "";
    links.value = "";
    imageLinks.value = "";

}


</script>

<script>

</script>

<template>
    <button class="add-project-button" @click="openModal">Ajouter projet</button>
    <form class="modal-container" v-if="modals">
        <div class="input-holder">
            <label for="title">Titre :</label>
            <input id="title" type="text" v-model="title">
        </div>
        <div class="input-holder">
            <label for="date">Date :</label>
            <input id="date" type="date" v-model="date">
        </div>
        <div class="input-holder">
            <label for="technology">Technologie utilisée(s) :</label>
            <input id="technology" type="text" v-model="technology">
        </div>
        <div class="input-holder">
            <label for="links">Liens vers site/repository</label>
            <input type="text" id="links" v-model="links">
        </div>
        <div class="input-holder">
            <label for="image-links">Liens vers image d'exemple: </label>
            <input type="text" id="image-links" v-model="imageLinks">
        </div>
        <div class="button-container">
            <button type="submit" class="form__add-button" @click="onAddButton">Ajouter</button>
            <button type="button" class="form__close-button">X</button>
        </div>
    </form>
</template>

<style scoped>
    .modal-container {
        display: flex;
        position : absolute;
        height : 400px;
        width : 500px;
        top : 80px;
        display: flex;
        flex-direction: column;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 15px;
        padding: 15px; 
        color: white;
        background-color: black;
        align-items: start;
        z-index: 8;
    }

    .form__close-button {
        position: absolute;
        top: -10px;
        right: -10px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-weight: bold;
    }

    .form__add-button {
        font-weight: bold;
    }

    .modal-container input {
        width: 350px;
        margin-bottom: 20px;
    }

    .modal-container label {
        font-weight: bold;
    }
    
    .modal-container input {
        margin-right: auto;
        margin-left: auto;
    }

    .add-project-button{
        position: absolute;
        left: 50%;
        top: 84%;
        transform: translate(-50%);
    }
    
</style>