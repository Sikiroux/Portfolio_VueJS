<script>

</script>

<template>
    <header>
        <div class="logo-holder"></div>
        <nav>
            <a href="#">Présentation</a>
            <a href="#">Créations</a>
            <a href="#">Contact</a>
        </nav>
        <button>Ajouter projet</button>
    </header>
</template>


<style scoped>
    header {
        display: flex;
        width: 100%;
        margin-top: 15px;
        align-items: center;
        border-bottom: 3px solid rgb(31, 30, 30);
        padding-bottom: 20px;
    }
    
    .logo-holder {
        height: 65px
        ;
        width: 65px;
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
    
    nav a {
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
    }

    nav a:hover {
        text-shadow: rgb(204, 204, 204) 1px 0 10px;
        transition-duration: 450ms;
        transform: scale(1.1);
    }
    

    nav {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        margin-right: 70px;
        margin-left: 30%;
        gap: 80px;
    }

    button {
        padding: 4px;
        border: 1px solid white;
        background-color: rgb(43, 43, 43);
        color: white;
        border-radius: 5px;
        margin-right: 50px;
    }

    button:hover {
        box-shadow:  rgb(204, 204, 204) 1px 0 10px;
        transition-duration: 450ms;
        text-shadow: rgb(204, 204, 204) 1px 0 10px;
        cursor: pointer;
    }

</style>