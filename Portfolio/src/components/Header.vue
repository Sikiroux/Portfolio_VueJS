<script>
import Modal from "./ModalProject.vue"
let button = document.body.querySelector("button");
</script>

<template>
    <header class="header-component">
        <div class="logo-holder"></div>
        <nav class="navigation">
            <a href="#">Présentation</a>
            <a href="#">Créations</a>
            <a href="#">Contact</a>
        </nav>
        <button class="add-project-button">Ajouter projet</button>
    </header>
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
    }

    .modal__close-button {
        position: absolute;
        top: -10px;
        right: -10px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-weight: bold;
    }

    .modal__add-button {
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