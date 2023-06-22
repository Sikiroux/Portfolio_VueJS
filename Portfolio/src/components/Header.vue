<script>
let button = document.body.querySelector("button");



function createModal() {
    // form element variable;
    let title = document.createElement("input");
    let date = document.createElement("input");
    let techno = document.createElement("input");
    let link = document.createElement("input");
    let linkTwo = document.createElement("input");
    let buttonContainer = document.createElement("div");
    let addButton = document.createElement("button");
    let closeButton = document.createElement("button");
    let modalContainer = document.createElement("form");
    let body = document.querySelector("body");

    // label element variable
    let titleLabel = document.createElement("label");
    let dateLabel = document.createElement("label");
    let technoLabel = document.createElement("label");
    let linkLabel = document.createElement("label");
    let linkTwoLabel = document.createElement("label");


    //Add class
    modalContainer.classList.add("modal-container");
    title.classList.add("project-title");
    date.classList.add("project-date");
    techno.classList.add("project-techonlogy");
    link.classList.add("project-link-website");
    linkTwo.classList.add("project-link-website");
    addButton.classList.add("modal__add-button");
    closeButton.classList.add("modal__close-button");

    modalContainer.append(titleLabel);
    modalContainer.append(title);
    modalContainer.append(dateLabel);
    modalContainer.append(date);
    modalContainer.append(technoLabel);
    modalContainer.append(techno);
    modalContainer.append(linkLabel);
    modalContainer.append(link);
    modalContainer.append(linkTwoLabel);
    modalContainer.append(linkTwo);
    buttonContainer.append(addButton);
    buttonContainer.append(closeButton);
    modalContainer.append(buttonContainer);
    body.append(modalContainer);

    //assign data to label
    titleLabel.textContent = "Titre : ";
    dateLabel.textContent = "Date : ";
    technoLabel.textContent = "Technologie utilisée(s): ";
    linkLabel.textContent = "Liens vers site web : ";
    linkTwoLabel.textContent = "Liens vers repo : ";

    //assign data to button 
    addButton.textContent = "Ajouter";
    closeButton.textContent = "X";
    

    //assign attribute
    titleLabel.setAttribute("for", "title");
    title.setAttribute("id", "title");
    dateLabel.setAttribute("for", "date");
    date.setAttribute("id", "date");
    technoLabel.setAttribute("for", "technology");
    techno.setAttribute("id", "technology");
    linkLabel.setAttribute("for", "link");
    link.setAttribute("id", "link");
    linkTwoLabel.setAttribute("for", "linkTwo");
    linkTwo.setAttribute("id", "linkTwo");

    title.setAttribute("type", "text");
    date.setAttribute("type", "date");
    techno.setAttribute("type", "text");
    link.setAttribute("type", "text");
    linkTwo.setAttribute("type", "text");
    addButton.setAttribute("type", "submit");

     addButton.addEventListener("click", executeFunction, false);


    function executeFunction() {
        preventSubmit(event);
        addProject();

    }

    function preventSubmit(event) {
        event.preventDefault();
    }
    
    function addProject() {
        let project = {
            projectTitle : title.value,
            projectDate : date.value,
            projectTechno : techno.value,
            projectLink : link.value,
            projectLinkImage : linkTwo.value,
        }
        console.log(project);
        return project;
    }
}



createModal()
</script>

<template>
    <header class="header-component">
        <div class="logo-holder"></div>
        <nav class="navigation">
            <a href="#">Présentation</a>
            <a href="#">Créations</a>
            <a href="#">Contact</a>
        </nav>
        <button class="add-project-button">Ajouter projet</button>
    </header>
</template>


<style>
    .header-component {
        display: flex;
        width: 100%;
        margin-top: 15px;
        align-items: center;
        padding-bottom: 20px;
    }
    
    .logo-holder {
        height: 65px;
        min-width: 65px;
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
    
    .navigation a {
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
    }

    .navigation a:hover {
        text-shadow: rgb(204, 204, 204) 1px 0 10px;
        transition-duration: 450ms;
        transform: scale(1.1);
    }
    

    .navigation {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        margin-right: 70px;
        margin-left: 30%;
        gap: 80px;
    }

    .add-project-button {
        padding: 4px;
        border: 1px solid white;
        background-color: rgb(43, 43, 43);
        color: white;
        border-radius: 5px;
        margin-right: 50px;
    }

    .add-project-button:hover {
        box-shadow:  rgb(204, 204, 204) 1px 0 10px;
        transition-duration: 450ms;
        text-shadow: rgb(204, 204, 204) 1px 0 10px;
        cursor: pointer;
    }

    .modal-container {
        position : absolute;
        height : 400px;
        width : 500px;
        top : 80px;
        display: flex;
        flex-direction: column;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 15px;
        padding: 15px; 
        color: white;
        background-color: black;
        align-items: start;
    }

    .modal__close-button {
        position: absolute;
        top: -10px;
        right: -10px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-weight: bold;
    }

    .modal__add-button {
        font-weight: bold;
    }

    .modal-container input {
        width: 350px;
        margin-bottom: 20px;
    }

    .modal-container label {
        font-weight: bold;
    }
    
    .modal-container input {
        margin-right: auto;
        margin-left: auto;
    }
    
</style>