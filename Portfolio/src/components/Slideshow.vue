<script setup>
import { onMounted, ref, watch } from "vue";
import {useModalStore} from "../stores/modal"
import Modal from "./ModalProject.vue"


let store = useModalStore();
let slides = store.slideArray
let display = ref(false);
let title = ref("");
let date = ref("");
let technology = ref("");
let links = ref("");
let imageLinks = ref("");

function openModal() {
    display.value = true;
}

//Get the slide data from the store then assign it to variables
function getDataForModal(slide) {
    title.value = slide.title;
    date.value = slide.date;
    technology.value = slide.technology;
    links.value = slide.link;
    imageLinks.value = slide.imageLinks;

}

function executeFunction(slide) {
    getDataForModal(slide);
    openModal();
}

function handleCloseModal() {
    display.value = false;
}


//Create a watch function to verify when the modal is open and a a listener to it when it's true 
watch(display, (newValue, oldValue) => {
    if(newValue === true) {

        //Add timeout to prevent modal from closing directly

        setTimeout(() => {
            function clickHandler() {
                let modal = document.querySelector(".modal-container");

                //Close modal if clicked outside and only outside of it
                if(modal && !modal.contains(event.target)) {
                    handleCloseModal();
                }
            }

            window.addEventListener("mousedown", clickHandler)

            //We watch the value again to see when we can remove the listener
            watch(display, (newValue) => {
                //when display go back to its default value remove evenListener
                if(newValue === false) {
                    window.removeEventListener("mousedown", clickHandler)
                }
            })
        }, 200)
    }
})
</script>

<template>
    <!-- Create an anchor for the anchor link -->
    <a class="anchor" id="project"></a>
    <h2 class="project-title-section">Projects</h2>
    <section class="slideshow-container">
        <ul class="slideshow">
            <li class="slideshow__item" v-for="slide in slides" :key="slide.id" @click="executeFunction(slide)">
                <h3 class="item__title">{{ slide.title }}</h3>
                <div class="item__background-image" :style="{'background-image': 'url('+ slide.imageLinks + ')'}"></div>
            </li>
        </ul>
    </section>
    <Modal :display="display" :title="title" :date="date" :technology="technology" :links="links" :imageLinks="imageLinks"  @close="handleCloseModal"></Modal>
</template>

<style>
    .project-title-section {
        text-align: center;
        margin-top: 60px;
        font-size: 2.3rem;
        font-weight: bold;
        color: white;
        margin-top: 100px;
    }

    a.anchor{
        display: block; 
        position: relative; 
        top: -50px; 
        visibility: hidden;
    }

    .slideshow {
        display: flex;
        overflow-x: scroll;
        height: 380px;
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
        box-shadow: 8px 8px 10px rgb(251, 255, 197);
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