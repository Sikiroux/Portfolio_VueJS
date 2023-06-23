<script>

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
            <label for="image-links">Liens vers image d'exemple</label>
            <input type="text" id="image-links">
        </div>
        <div class="button-container">
            <button type="submit" class="form__add-button">Ajouter</button>
            <button class="form__close-button">X</button>
        </div>
    </form>
</template>

<style>
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