<script setup>
import { onMounted } from 'vue';
function sayHello(){
    alert("Hello");
}
onMounted(() => {
    const addButton = document.querySelector(".form__add-button");
    const closeButton = document.querySelector(".form__close-button");
    const modal = document.querySelector(".modal-container");
    const buttonProject = document.querySelector(".add-project-button");
    const title = document.querySelector("#title");
    const date = document.querySelector("#date");
    const technology = document.querySelector("#technology");
    const links = document.querySelector("#links");
    const imageLinks = document.querySelector("#image-links");


    
    function closeModal() {
        modal.style.display = "none";
    }

    function openModal() {
        modal.style.display = "flex";
    }

    function preventSubmit(event) {
        event.preventDefault();
        
    }

    function getModalData() {
        let modalData = {
            title: title.value,
            date: date.value,
            technology: technology.value,
            links: links.value,
            imageLinks: imageLinks.value,
        }
        console.log(modalData);
    }

    function removeFieldsData() {
        title.value = "";
        date.value = "";
        technology.value = "";
        links.value = "";
        imageLinks.value = "";

    }
    
    function onAddButton() {
        preventSubmit(event);
        getModalData();
        removeFieldsData();
        closeModal();
    }


    closeButton.addEventListener("click", closeModal, false);
    buttonProject.addEventListener("click", openModal, false);
    addButton.addEventListener("click", onAddButton, false);

    modal.style.display = "none";
})


</script>

<template>
    <form class="modal-container">
        <div class="input-holder">
            <label for="title">Titre :</label>
            <input id="title" type="text">
        </div>
        <div class="input-holder">
            <label for="date">Date :</label>
            <input id="date" type="date">
        </div>
        <div class="input-holder">
            <label for="technology">Technologie utilisée(s) :</label>
            <input id="technology" type="text">
        </div>
        <div class="input-holder">
            <label for="links">Liens vers site/repository</label>
            <input type="text" id="links">
        </div>
        <div class="input-holder">
            <label for="image-links">Liens vers image d'exemple: </label>
            <input type="text" id="image-links">
        </div>
        <div class="button-container">
            <button type="submit" class="form__add-button">Ajouter</button>
            <button type="button" class="form__close-button">X</button>
        </div>
    </form>
</template>

<style scoped>
    .modal-container {
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
        z-index: 1;
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
    
</style>