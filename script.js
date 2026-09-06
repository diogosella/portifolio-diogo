

// About Bar

function newSkill(title, description) {
    return {
        title: title,
        description: description
    }
}

const skills = {
    "software-dev": newSkill(
        "Desenvolvimento de Software", 
        "Esse é um texto para explicar sobre desenvolvimento de software"
    ),
        "web-dev": newSkill(
        "Desenvolvimento Web", 
        "Esse é um texto para explicar sobre desenvolvimento de software"
    ),
        "design": newSkill(
        "Design", 
        "Esse é um texto para explicar sobre desenvolvimento de software"
    ),
        "automation": newSkill(
        "Automação", 
        "Esse é um texto para explicar sobre desenvolvimento de software"
    ),
        "seocc": newSkill(
        "SEO & Criação de conteúdo", 
        "Esse é um texto para explicar sobre desenvolvimento de software"
    )
}



const selectedSkill = document.querySelectorAll('.skillItem');
const skillTitle = document.getElementById('skill-title');
const skillDescription = document.getElementById('skill-description')

    selectedSkill.forEach(item => {
     item.addEventListener("click" , (event) => {
            selectedSkill.forEach(el => el.classList.remove("selectedSkillItem"))
            const skillId = event.currentTarget.id;
            item.classList.add("selectedSkillItem");
         skillTitle.innerHTML = skills[skillId].title;
         skillDescription.innerHTML = skills[skillId].description;

    })
});



// Experience Secion

function newExperience(title, description, iconDefault, iconActive) {
    return {
        title: title,
        description: description,
        iconDefault: iconDefault,
        iconActive: iconActive
    }
}

const experiences = {
    "fatec": newExperience(
        "FATEC", "descrição sobre a fatec", "/assets/fatec.png", "/assets/selected-fatec.png"
    ),
    "artcopia": newExperience(
        "Art Copia", "descricao sobre a artcopia", "/assets/artcopia.png", "/assets/selected-artcopia.png"
    ),
    "flolabs": newExperience(
        "FloLabs Innovations Group", "descrição sobre a FloLabs", "/assets/flolabs.png", "/assets/selected-flolabs.png"
    )
}


const xpIcon = document.querySelectorAll(".experienceIcon");
const xpTitle = document.getElementById("xp-title");
const xpDescription = document.getElementById("xp-description");


xpIcon.forEach(item => {
    item.addEventListener("click", (event) => {
        const xpId = event.currentTarget.id;
        
        xpIcon.forEach(el => {
            el.src = experiences[el.id].iconDefault;
        });

        event.currentTarget.src = experiences[xpId].iconActive;

        xpTitle.innerHTML = experiences[xpId].title;
        xpDescription.innerHTML = experiences[xpId].description;
    })
})



// Projects showcase

function createProject(title, description, stack, url, image) {
    return {
        title: title,
        description: description,
        stack: stack,
        url: url,
        image: image
    }
} 

const projects = {
    "setq": createProject("FATEC SetQ",
        "Sistema de gerenciamento de times e partidas para quadra de volei para universidades.\nAtuei como Designer UX/UI, Desenvolvedor Fullstack e Team-lead colaborando com outros 2 integrantes.",
        "Figma | React | Typescript | PostgreSQL | Supabase",
        "https://github.com/diogosella/FATEC-SETQ",
        "/assets/projects/setq.png")
    ,
    
}

const projectContainer = document.querySelector(".projectsShowcase")

    function showcaseProjects(projectId) {
        const data = projects[projectId];
        
        const newProject = document.createElement("div");
            newProject.classList.add("projectItem");

        const projectImageDiv = document.createElement("div");
            projectImageDiv.classList.add("projectImage");

        const projectIcon = document.createElement("img");
        projectIcon.classList.add("projectIcon")
            projectIcon.src = data.image;
            projectIcon.alt = data.title;

        const projectTextDiv = document.createElement("div");
            projectTextDiv.classList.add("projectInfo");

        const projectName = document.createElement("p");
            projectName.classList.add("projectName");
            projectName.textContent = data.title;
        
        const projectDesc = document.createElement("p");
            projectDesc.classList.add("projectDescription");
            projectDesc.textContent = data.description;
            
        const projectStack = document.createElement("p");
            projectStack.classList.add("projectStack");
            projectStack.textContent = data.stack;

        const projectRepo = document.createElement("a");
            projectRepo.classList.add("projectLink");
            projectRepo.textContent = "Ver projeto";
            projectRepo.href = data.url; 
            projectRepo.target = "_blank";


            projectImageDiv.appendChild(projectIcon);

            projectTextDiv.appendChild(projectName);
            projectTextDiv.appendChild(projectDesc);
            projectTextDiv.appendChild(projectStack);
            projectTextDiv.appendChild(projectRepo);


            newProject.appendChild(projectImageDiv);
            newProject.appendChild(projectTextDiv);

            projectContainer.appendChild(newProject);
    }

Object.keys(projects).forEach(projectId => {
    showcaseProjects(projectId);
}) 


