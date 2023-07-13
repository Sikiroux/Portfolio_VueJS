import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useModalStore = defineStore("modal", ()=> {
    let title = ref("");
    let date = ref("");
    let technology = ref("");
    let links = ref("");
    let imageLinks = ref("");
    let display = ref("");

    let id = 0;

    //Create the array for the information stored inside the slide within the slideshow
    let slideArray = ref([
        {
            id: id++,
            title: "Signup form",
            date: "27 janvier 2023",
            technology: "HTML, CSS",
            link: "https://github.com/Sikiroux/TOP-Sign-up-form",
            imageLinks: "./src/components/images/TOP-signup-form.png"
        },
        {
            id: id++,
            title: "Calculator",
            date: "23 novembre 2022",
            technology: "HTML, CSS, JavaScript",
            link:"https://github.com/Sikiroux/TOP-Calculator",
            imageLinks: "./src/components/images/Calculator.png"
        },
        {
            id: id++,
            title: "Curriculum vitae",
            date: "25 mai 2023",
            technology: "HTML, CSS",
            link:"https://github.com/Sikiroux/Curriculum-Vitae",
            imageLinks: "./src/components/images/CV.png"
        },
        {
            id: id++,
            title: "Landing page",
            date: "7 octobre 2022",
            technology: "HTML, CSS",
            link:"https://github.com/Sikiroux/odin-landing-page",
            imageLinks: "./src/components/images/landing-page.png"
        },
        {
            id: id++,
            title: "Etch a sketch",
            date: "15 novembre 2022",
            technology: "HTML, CSS, JavaScript",
            link:"https://github.com/Sikiroux/TOP-Etch-A-Sketch",
            imageLinks: "./src/components/images/Etch-a-Sketch.png"
        },
        {
            id: id++,
            title: "Admin dashboard",
            date: "4 février 2023",
            technology: "HTML, CSS",
            link:"https://github.com/Sikiroux/TOP-Admin-Dashboard",
            imageLinks: "./src/components/images/static-admin-dashboard.png"
        }
        
    ])

    return{ title, date, technology, links, imageLinks, slideArray }
    
})