<script>

</script>

<template>
    <footer>
        <nav>
            <a href="https://github.com/Sikiroux" target="_blank">
                <div class="github-icon"></div>
            </a>
            <a href="https://www.linkedin.com/in/damien-ekouma-79b17024b/" target="_blank">
                <div class="indeed-icon"></div>
            </a>
        </nav>
        <p>Mise a jour le <time datetime="2023-06-19">19/06/2023</time></p>
    </footer>
</template>

<style scoped>

    footer {
        width: 100%;
        position: absolute;
        bottom: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    nav{
        margin: 0;
        display: flex;
        gap: 45px;
        margin-bottom: 15px;
    }

    a div {
        height: 70px;
        width: 70px;
        background-size: cover;
    }

    a div:hover {
        opacity: 45%;
    }

    a {
        height: 70px;
        width: 70px;
    }

    a div.github-icon {
        background-image: url(./icons/github.png);
    }

    a div.indeed-icon {
        background-image: url(./icons/linkedin.png);
    }
</style>