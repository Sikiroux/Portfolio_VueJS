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
        height: 80px;
        width: 80px;
        background-image: url(./icons/Logo.png);
        background-size: cover;
        border-radius: 50%;
        margin-left: 40px;
    }
    
    nav a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
    }

    nav a:hover {
        color: gray;
    }

    nav {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        margin-right: 70px;
        margin-left: 30%;
        gap: 150px;
    }

</style>