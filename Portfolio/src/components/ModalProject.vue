<script>
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