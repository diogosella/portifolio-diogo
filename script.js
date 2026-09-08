

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
       "Sou desenvolvedor de software com experiência no ciclo completo de desenvolvimento web, front-end e back-end. No front-end, trabalho com React, TypeScript e JavaScript com experiência internacional em produtos de robótica e IA, integrando APIs REST à interface. No back-end, tenho experiência com Node.js, Express e PostgreSQL, incluindo SQL e estruturação de dados. Aplico boas práticas de Git/GitHub e sou estudante de Análise e Desenvolvimento de Sistemas na FATEC Ourinhos."        
    ),
        "web-dev": newSkill(
        "Desenvolvimento Web", 
        "Sou desenvolvedor web com experiência prática na construção de sites e interfaces responsivas usando HTML5, CSS3, JavaScript, TypeScript e React. Tenho experiência em uma startup norte-americana de robótica e IA, desenvolvendo e mantendo interfaces web responsivas em produtos de IA, aplicando componentização, design mobile-first e boas práticas de performance front-end, em um squad distribuído e multicultural com comunicação diária em inglês. Também possuo estudos práticos em WordPress, incluindo customização de temas e criação de páginas, aplicando boas práticas de código limpo e versionamento com Git/GitHub."
    ),
        "design": newSkill(
        "Design", 
        "Sou designer com experiência prática em design de comunicação e artes gráficas, atuando na Art Cópia com a criação de peças gráficas voltadas para vendas reais, com atenção aos detalhes e foco na qualidade das entregas e na experiência do cliente. Também desenvolvo trabalhos em design UX/UI, aplicados tanto em projetos pessoais quanto em projetos para clientes externos, utilizando Figma para prototipação e criação de interfaces, e Photoshop para tratamento de imagens e produção de artes gráficas."
    ),
        "automation": newSkill(
        "Automação", 
        "Tenho experiência prática em automação de processos, propondo e implementando fluxos de automação que integram ferramentas internas e geram ganho de eficiência para a equipe em uma startup norte-americana de robótica e IA. Possuo estudos em n8n e Zapier, aplicando essas ferramentas na criação de workflows automatizados, incluindo o auxílio na estruturação de processos de contratação, otimizando etapas manuais e integrando diferentes sistemas de forma eficiente."
    ),
        "seocc": newSkill(
        "SEO & Criação de conteúdo", 
        "Tenho experiência de 10 anos com criação de conteúdo, atuando com expertise em métricas de SEO e otimização on-page. Possuo conhecimento em análise de dados do Google Analytics, acompanhamento e interpretação de tráfego de usuários, além de estudo constante de algoritmos e sistemas de busca, incluindo o comportamento de algoritmos em mídias sociais no geral, para embasar estratégias de conteúdo mais eficientes."
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
        "FATEC | ADS", "Sou estudante do curso de Análise e Desenvolvimento de Sistemas na FATEC Ourinhos, atualmente no 6º semestre. Ao longo da formação, desenvolvi o projeto FATEC SetQ, uma plataforma web para gerenciamento de times esportivos, na qual assumi a liderança técnica, organizando a arquitetura, distribuindo tarefas entre a equipe e garantindo a entrega dentro do cronograma. Como Trabalho de Conclusão de Curso, estou desenvolvendo o FATEC Acadex, uma aplicação mobile construída em React Native para otimizar a produtividade dos estudos, reunindo ferramentas de gerenciamento de tempo, tarefas e conteúdos acadêmicos de forma simples e organizada, com foco em oferecer uma experiência moderna e eficiente para estudantes em dispositivos móveis.", "/assets/fatec.png", "/assets/selected-fatec.png"
    ),
    "artcopia": newExperience(
        "Art Copia", "Tenho 6 anos de experiência na Art Cópia como designer para fins de comunicação visual, criando artes gráficas para banners, placas, adesivos, social media e outras peças de divulgação. Atendi desde pequenos negócios até empresas de grande porte, desenvolvendo soluções gráficas sob medida para cada perfil de cliente, utilizando CorelDRAW e Photoshop como principais ferramentas de criação. Além da parte criativa, também atuei diretamente no atendimento ao cliente e em vendas, gerenciando prazos de múltiplos projetos simultâneos e construindo uma comunicação clara e próxima em cada entrega.", "/assets/artcopia.png", "/assets/selected-artcopia.png"
    ),
    "flolabs": newExperience(
        "FloLabs Innovations Group", "Experiência como estagiário na FloLabs R&D, startup norte-americana de robótica e IA, atuando de forma ampla como desenvolvedor front-end, além de contribuir com design, automação e criação de conteúdo. Desenvolvi websites para diversos projetos da empresa, como flolabs.international, FloStudios, TARLL, Bootcamp University e MoodChanger, aplicando React, TypeScript e boas práticas de design responsivo em cada entrega. Também estou envolvido no FloBrain, projeto fullstack que integra software a um gadget físico, o CAIPO, ampliando minha experiência para além do desenvolvimento web tradicional. Apesar da atuação multidisciplinar, minha função principal na empresa é como web developer.", "/assets/flolabs.png", "/assets/selected-flolabs.png"
    )
}


const experienceKeys = Object.keys(experiences);
let currentExperienceIndex = 0;

const experienceIcon = document.getElementById("experience-icon");
const prevExperienceBtn = document.getElementById("prev-experience");
const nextExperienceBtn = document.getElementById("next-experience");
const xpTitle = document.getElementById("xp-title");
const xpDescription = document.getElementById("xp-description");

function renderExperience(index) {
    const key = experienceKeys[index];
    const data = experiences[key];

    experienceIcon.src = data.iconDefault;
    experienceIcon.alt = data.title;
    xpTitle.innerHTML = data.title;
    xpDescription.innerHTML = data.description;
}

nextExperienceBtn.addEventListener("click", () => {
    currentExperienceIndex = (currentExperienceIndex + 1) % experienceKeys.length;
    renderExperience(currentExperienceIndex);
});

prevExperienceBtn.addEventListener("click", () => {
    currentExperienceIndex = (currentExperienceIndex - 1 + experienceKeys.length) % experienceKeys.length;
    renderExperience(currentExperienceIndex);
});

renderExperience(currentExperienceIndex); // estado inicial


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
    "acadex": createProject("ACADEX",
        "O FATEC Acadex é uma aplicação mobile desenvolvida para otimizar a produtividade dos estudos de forma simples e organizada. A plataforma reúne ferramentas essenciais para auxiliar estudantes no gerenciamento de tempo, tarefas e conteúdos acadêmicos.\nEste trabalho foi desenvolvido como TCC para a FATEC Ourinhos.",
        "Figma | React | Typescript",
        "https://github.com/diogosella/acadex",
        "/assets/projects/acadex.png")
    ,
    "cashble": createProject("Cashble",
        "Aplicação web de controle financeiro pessoal, permitindo gerenciar múltiplas contas (caixas), registrar transações e transferências entre elas, além de configurar metas com aportes mensais automáticos.\nAtuei como Desenvolvedor Fullstack, responsável pela integração entre front-end, back-end e banco de dados.",
        "React | Typescript | Node.js | Express | Supabase",
        "https://github.com/diogosella/cashble",
        "/assets/projects/cashble.png")
    ,
    "youcrowd": createProject("YouCrowd",
        "Painel de compradores sintéticos (personas geradas por IA) que reage a uma oferta de infoproduto antes dela ir ao ar, simulando objeções reais de compra e retornando um diagnóstico com recomendações específicas de copy.\nAtuei como Desenvolvedor Fullstack, responsável pela arquitetura, integração com LLM e criação das personas.",
        "Next.js | React | Typescript | OpenAI API",
        "https://github.com/diogosella/YouCrowd",
        "/assets/projects/youcrowd.png")
    ,
    "tarrl": createProject("TARRL",
        "Website institucional criado para promover o programa de estágios internacionais da FloLabs Innovations Group, apresentando a proposta do programa e atraindo candidatos ao redor do mundo.\nAtuei como Designer UX/UI e Desenvolvedor Front-end, responsável pela criação da interface e sua implementação.",
        "Figma | Next.js | React | Typescript",
        "https://www.tarrl.org/",
        "/assets/projects/tarrl.png")
    ,
    "flolabs-international": createProject("FloLabs International",
        "Website institucional que serve como hub central de divulgação da FloLabs Innovations Group, apresentando a incubadora, seu portfólio de projetos em IA e robótica e os programas de estágio.\nAtuei como Designer UX/UI e Desenvolvedor Front-end, responsável pela criação da interface e sua implementação.",
        "Figma | Next.js | React | Typescript",
        "https://www.flolabs.international/",
        "/assets/projects/international.png")
    ,
    "bootcamp-university": createProject("Bootcamp University",
        "Website institucional voltado para career changers, divulgando o programa de educação cooperativa da FloLabs, que une aprendizado a estágio real desde o primeiro dia.\nDesigner UX/UI e Desenvolvedor Front-end, criando interface e implementando-a.",
        "Figma | Next.js | React | Typescript",
        "https://www.bootcampuniversity.org/",
        "/assets/projects/bootcamp.png")
    ,
    "valodle": createProject("VALODLE",
        "Jogo diário no estilo Wordle onde o objetivo é adivinhar o agente secreto de Valorant do dia, comparando atributos como função, gênero e ano de lançamento a cada tentativa até acertar.\nAtuei como Desenvolvedor Fullstack, responsável pela lógica do jogo, API e modelagem do banco de dados.",
        "Javascript | Node.js | Express | PostgreSQL | Sequelize",
        "https://github.com/diogosella/VALODLE",
        "/assets/projects/valodle.png")
    ,
    "artcopia": createProject("ArtCópia Website",
        "Website institucional da Art Cópia, destacando os serviços de banners, adesivos, cartões e fachadas, com carrossel de produtos e seção de contato.\nAtuei como Designer UX/UI e Desenvolvedor Front-end, responsável pela criação da interface e sua implementação.",
        "HTML | SCSS | Javascript | Parcel",
        "https://github.com/diogosella/ArtCopia-v2",
        "/assets/projects/artcopia.png")
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


// Form.JS integration

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_khzk068", "template_rz0exhe", this)
    .then(() => {
      alert("Obrigado! Irei retornar o contato o mais rápido possível");
      e.target.reset();
    })
    .catch((err) => {
      console.error("Erro ao enviar:", err);
      alert("Houve um erro ao enviar a mensagem.");
    });
});