<script>

</script>

<template>
    <h2>Projects</h2>
    <section class="slideshow-container">
        <ul class="slideshow">
            <li class="slideshow__item" >
                <h3>Signup-Form</h3>
                <a href="https://github.com/Sikiroux/TOP-Sign-up-form" target="_blank">
                    <div class="item__background-image"></div>
                </a>
            </li>
        </ul>
    </section>
</template>

<style scoped>
    h2 {
        text-align: center;
        margin-top: 60px;
        font-size: 2.3rem;
        font-weight: bold;
        color: white;
    }

    .slideshow {
        display: flex;
        overflow-x: scroll;
        height: 360px;
    }

    .slideshow__item {
        list-style-type: none;
        margin-left: 35px;
    }

    .item__background-image {
        background-image: url(./images/TOP-signup-form.png);
        background-size: cover;
        background-repeat: no-repeat;
        height: 290px;
        width: 500px;
        margin-top: 10px;
        filter: blur(2px);
        border-radius: 15px;
        transition-duration: 450ms;
    }

    .item__background-image:hover {
        transition-duration: 450ms;
        filter: blur(0);
    }

    h3 {
        position: relative;
        z-index: 1;
        text-align: center;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }
</style>