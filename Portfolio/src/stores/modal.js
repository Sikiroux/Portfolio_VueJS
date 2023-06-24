import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useModalStore = defineStore("modal", ()=> {
    let title = ref("");
    let date = ref("");
    let technology = ref("");
    let links = ref("");
    let imageLinks = ref("");

    return{ title, date, technology, links, imageLinks }
})