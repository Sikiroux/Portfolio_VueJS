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
        },
        {
            id: id++,
            title: "Calculator",
            technology: "",
            link:"https://github.com/Sikiroux/TOP-Calculator",
            imageLinks: "./src/components/images/Calculator.png"
        },
        {
            id: id++,
            title: "Curriculum vitae",
            technology: "",
            link:"https://github.com/Sikiroux/Curriculum-Vitae",
            imageLinks: "./src/components/images/CV.png"
        },
        {
            id: id++,
            title: "Landing page",
            technology: "",
            link:"https://github.com/Sikiroux/odin-landing-page",
            imageLinks: "./src/components/images/landing-page.png"
        },
        {
            id: id++,
            title: "Etch a sketch",
            technology: "",
            link:"https://github.com/Sikiroux/TOP-Etch-A-Sketch",
            imageLinks: "./src/components/images/Etch-a-Sketch.png"
        },
        {
            id: id++,
            title: "Admin dashboard",
            technology: "",
            link:"https://github.com/Sikiroux/TOP-Admin-Dashboard",
            imageLinks: "./src/components/images/static-admin-dashboard.png"
        }
        
    ])

    return{ title, date, technology, links, imageLinks, slideArray }
    
})