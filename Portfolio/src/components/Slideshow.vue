<script setup>
import { onMounted } from "vue";
import {useModalStore} from "../stores/modal"


let store = useModalStore();
let slides = store.slideArray

</script>

<template>
    <h2 class="project-title-section">Projects</h2>
    <section class="slideshow-container">
        <ul class="slideshow">
            <li class="slideshow__item" v-for="slide in slides" :key="slide.id">
                <h3 class="item__title">{{ slide.title }}</h3>
                <a :href="slide.link" target="_blank">
                    <div class="item__background-image" :style="{'background-image': 'url('+ slide.imageLinks + ')'}"></div>
                </a>
            </li>
        </ul>
    </section>
</template>

<style>
    .project-title-section {
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

    .item__title {
        position: relative;
        z-index: 1;
        text-align: center;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }

    ::-webkit-scrollbar {
        background-color: rgb(63, 63, 63);
    }

    ::-webkit-scrollbar-track-piece {
        background-color: rgb(63, 63, 63);
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgb(255, 255, 255);
        border-radius: 25px;
        border: 2px solid black;
    }
</style>