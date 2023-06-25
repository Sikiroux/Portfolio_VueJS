import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useModalStore = defineStore("modal", ()=> {
    let title = ref("");
    let date = ref("");
    let technology = ref("");
    let links = ref("");
    let imageLinks = ref("");

    let id = 0;
    let slideArray = ref([
        {
            id: id++,
            title: "Signup form",
            technology: "",
            link: "https://github.com/Sikiroux/TOP-Sign-up-form",
            imageLinks: "./src/components/images/TOP-signup-form.png"
        }
    ])

    return{ title, date, technology, links, imageLinks, slideArray }
    
})