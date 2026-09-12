let currentLang = "pt";

const uiText = {
    pt: {
        "hero.greeting": "Olá, eu sou",
        "hero.role": "Desenvolvedor Fullstack",
        "hero.ctaPrimary": "Entre em contato",
        "hero.ctaSecondary": "Ver Projetos",
        "stats.years": "4 anos",
        "stats.coding": "Programando",
        "stats.projectsLabel": "Projetos criados",
        "stats.globalLabel": "Experiência internacional",
        "about.navSoftware": "Des. de Software",
        "about.navWeb": "Des. Web",
        "about.navDesign": "Design",
        "about.navAutomation": "Automação",
        "about.navSeo": "SEO & Criação de conteúdo",
        "projects.title": "Projetos relevantes",
        "projects.subtitle": "Confira alguns dos projetos criados durante esse período",
        "projects.viewMore": "Ver mais",
        "contact.title": "Vamos conversar!",
        "contact.subtitle": "Tem algum projeto/oportunidade para colaborarmos juntos? Me envie um e-mail!",
        "contact.emailAdvice": "(Esse formulário irá enviar um email para <b>diogosees@gmail.com</b>)",
        "contact.social": "Me encontre também em:",
        "form.name": "Nome",
        "form.email": "Email",
        "form.subject": "Assunto",
        "form.message": "Mensagem",
        "form.submit": "Enviar"
    },
    en: {
        "hero.greeting": "Hi, I'm",
        "hero.role": "Fullstack Developer",
        "hero.ctaPrimary": "Get in touch",
        "hero.ctaSecondary": "View Projects",
        "stats.years": "4 years",
        "stats.coding": "Coding",
        "stats.projectsLabel": "Projects built",
        "stats.globalLabel": "International experience",
        "about.navSoftware": "Software Dev",
        "about.navWeb": "Web Dev",
        "about.navDesign": "Design",
        "about.navAutomation": "Automation",
        "about.navSeo": "SEO & Content",
        "projects.title": "Featured projects",
        "projects.subtitle": "Check out some of the projects built during this period",
        "projects.viewMore": "See more",
        "contact.title": "Let's talk!",
        "contact.subtitle": "Have a project or opportunity for us to collaborate on? Send me an email!",
        "contact.emailAdvice": "(This form will send an email to <b>diogosees@gmail.com</b>)",
        "contact.social": "You can also find me on:",
        "form.name": "Name",
        "form.email": "Email",
        "form.subject": "Subject",
        "form.message": "Message",
        "form.submit": "Send"
    }
};

const skills = {
    "software-dev": {
        pt: {
            title: "Desenvolvimento de Software",
            description: "Sou desenvolvedor de software com experiência no ciclo completo de desenvolvimento web, front-end e back-end. No front-end, trabalho com React, TypeScript e JavaScript com experiência internacional em produtos de robótica e IA, integrando APIs REST à interface. No back-end, tenho experiência com Node.js, Express e PostgreSQL, incluindo SQL e estruturação de dados. Aplico boas práticas de Git/GitHub e sou estudante de Análise e Desenvolvimento de Sistemas na FATEC Ourinhos."
        },
        en: {
            title: "Software Development",
            description: "I'm a software developer with experience across the full web development cycle, front-end and back-end. On the front-end, I work with React, TypeScript and JavaScript, including international experience in robotics and AI products, integrating REST APIs into the interface. On the back-end, I have experience with Node.js, Express and PostgreSQL, including SQL and data modeling. I follow Git/GitHub best practices and I'm currently studying Systems Analysis and Development at FATEC Ourinhos."
        }
    },
    "web-dev": {
        pt: {
            title: "Desenvolvimento Web",
            description: "Sou desenvolvedor web com experiência prática na construção de sites e interfaces responsivas usando HTML5, CSS3, JavaScript, TypeScript e React. Tenho experiência em uma startup norte-americana de robótica e IA, desenvolvendo e mantendo interfaces web responsivas em produtos de IA, aplicando componentização, design mobile-first e boas práticas de performance front-end, em um squad distribuído e multicultural com comunicação diária em inglês. Também possuo estudos práticos em WordPress, incluindo customização de temas e criação de páginas, aplicando boas práticas de código limpo e versionamento com Git/GitHub."
        },
        en: {
            title: "Web Development",
            description: "I'm a web developer with hands-on experience building responsive websites and interfaces using HTML5, CSS3, JavaScript, TypeScript and React. I worked at a US-based robotics and AI startup, developing and maintaining responsive web interfaces for AI products, applying componentization, mobile-first design and front-end performance best practices, in a distributed, multicultural squad with daily communication in English. I also have hands-on experience with WordPress, including theme customization and page creation, following clean code and Git/GitHub versioning practices."
        }
    },
    "design": {
        pt: {
            title: "Design",
            description: "Sou designer com experiência prática em design de comunicação e artes gráficas, atuando na Art Cópia com a criação de peças gráficas voltadas para vendas reais, com atenção aos detalhes e foco na qualidade das entregas e na experiência do cliente. Também desenvolvo trabalhos em design UX/UI, aplicados tanto em projetos pessoais quanto em projetos para clientes externos, utilizando Figma para prototipação e criação de interfaces, e Photoshop para tratamento de imagens e produção de artes gráficas."
        },
        en: {
            title: "Design",
            description: "I'm a designer with hands-on experience in visual communication and graphic design, having worked at Art Cópia creating graphic pieces for real sales, with attention to detail and a focus on delivery quality and client experience. I also work on UX/UI design, applied to both personal and client projects, using Figma for prototyping and interface design, and Photoshop for image editing and graphic production."
        }
    },
    "automation": {
        pt: {
            title: "Automação",
            description: "Tenho experiência prática em automação de processos, propondo e implementando fluxos de automação que integram ferramentas internas e geram ganho de eficiência para a equipe em uma startup norte-americana de robótica e IA. Possuo estudos em n8n e Zapier, aplicando essas ferramentas na criação de workflows automatizados, incluindo o auxílio na estruturação de processos de contratação, otimizando etapas manuais e integrando diferentes sistemas de forma eficiente."
        },
        en: {
            title: "Automation",
            description: "I have hands-on experience with process automation, proposing and implementing automated workflows that integrate internal tools and improve team efficiency at a US-based robotics and AI startup. I've studied n8n and Zapier, using them to build automated workflows, including helping structure hiring processes by streamlining manual steps and integrating different systems efficiently."
        }
    },
    "seocc": {
        pt: {
            title: "SEO & Criação de conteúdo",
            description: "Tenho experiência de 10 anos com criação de conteúdo, atuando com expertise em métricas de SEO e otimização on-page. Possuo conhecimento em análise de dados do Google Analytics, acompanhamento e interpretação de tráfego de usuários, além de estudo constante de algoritmos e sistemas de busca, incluindo o comportamento de algoritmos em mídias sociais no geral, para embasar estratégias de conteúdo mais eficientes."
        },
        en: {
            title: "SEO & Content Creation",
            description: "I have 10 years of experience creating content, with expertise in SEO metrics and on-page optimization. I'm familiar with Google Analytics, tracking and interpreting user traffic, and I continuously study search engine and social media algorithms to inform more effective content strategies."
        }
    }
};

let currentSkillId = "software-dev";

const selectedSkill = document.querySelectorAll('.skillItem');
const skillTitle = document.getElementById('skill-title');
const skillDescription = document.getElementById('skill-description');

selectedSkill.forEach(item => {
    item.addEventListener("click", (event) => {
        selectedSkill.forEach(el => el.classList.remove("selectedSkillItem"));
        currentSkillId = event.currentTarget.id;
        item.classList.add("selectedSkillItem");
        skillTitle.innerHTML = skills[currentSkillId][currentLang].title;
        skillDescription.innerHTML = skills[currentSkillId][currentLang].description;
    });
});

const experiences = {
    "fatec": {
        iconDefault: "/assets/fatec.png",
        iconActive: "/assets/selected-fatec.png",
        pt: {
            title: "FATEC | ADS",
            description: "Sou estudante do curso de Análise e Desenvolvimento de Sistemas na FATEC Ourinhos, atualmente no 6º semestre. Ao longo da formação, desenvolvi o projeto FATEC SetQ, uma plataforma web para gerenciamento de times esportivos, na qual assumi a liderança técnica, organizando a arquitetura, distribuindo tarefas entre a equipe e garantindo a entrega dentro do cronograma. Como Trabalho de Conclusão de Curso, estou desenvolvendo o FATEC Acadex, uma aplicação mobile construída em React Native para otimizar a produtividade dos estudos, reunindo ferramentas de gerenciamento de tempo, tarefas e conteúdos acadêmicos de forma simples e organizada, com foco em oferecer uma experiência moderna e eficiente para estudantes em dispositivos móveis."
        },
        en: {
            title: "FATEC | Systems Analysis and Development",
            description: "I'm a Systems Analysis and Development student at FATEC Ourinhos, currently in my 6th semester. During the program, I developed FATEC SetQ, a web platform for managing sports teams, where I took on technical leadership, organizing the architecture, distributing tasks across the team and ensuring on-time delivery. For my capstone project, I'm developing FATEC Acadex, a mobile app built with React Native to boost study productivity, bringing together time management, task and academic content tools in a simple, organized way, with a focus on a modern, efficient experience for students on mobile devices."
        }
    },
    "artcopia": {
        iconDefault: "/assets/artcopia.png",
        iconActive: "/assets/selected-artcopia.png",
        pt: {
            title: "Art Copia",
            description: "Tenho 6 anos de experiência na Art Cópia como designer para fins de comunicação visual, criando artes gráficas para banners, placas, adesivos, social media e outras peças de divulgação. Atendi desde pequenos negócios até empresas de grande porte, desenvolvendo soluções gráficas sob medida para cada perfil de cliente, utilizando CorelDRAW e Photoshop como principais ferramentas de criação. Além da parte criativa, também atuei diretamente no atendimento ao cliente e em vendas, gerenciando prazos de múltiplos projetos simultâneos e construindo uma comunicação clara e próxima em cada entrega."
        },
        en: {
            title: "Art Cópia",
            description: "I have 6 years of experience at Art Cópia as a visual communication designer, creating graphic pieces for banners, signs, stickers, social media and other promotional materials. I worked with clients ranging from small businesses to large companies, developing custom graphic solutions for each client profile using CorelDRAW and Photoshop as my main tools. Besides the creative work, I was also directly involved in customer service and sales, managing deadlines across multiple simultaneous projects and building clear, close communication in every delivery."
        }
    },
    "flolabs": {
        iconDefault: "/assets/flolabs.png",
        iconActive: "/assets/selected-flolabs.png",
        pt: {
            title: "FloLabs Innovations Group",
            description: "Experiência como estagiário na FloLabs R&D, startup norte-americana de robótica e IA, atuando de forma ampla como desenvolvedor front-end, além de contribuir com design, automação e criação de conteúdo. Desenvolvi websites para diversos projetos da empresa, como flolabs.international, FloStudios, TARLL, Bootcamp University e MoodChanger, aplicando React, TypeScript e boas práticas de design responsivo em cada entrega. Também estou envolvido no FloBrain, projeto fullstack que integra software a um gadget físico, o CAIPO, ampliando minha experiência para além do desenvolvimento web tradicional. Apesar da atuação multidisciplinar, minha função principal na empresa é como web developer."
        },
        en: {
            title: "FloLabs Innovations Group",
            description: "Internship experience at FloLabs R&D, a US-based robotics and AI startup, working broadly as a front-end developer while also contributing to design, automation and content creation. I built websites for several of the company's projects, such as flolabs.international, FloStudios, TARLL, Bootcamp University and MoodChanger, applying React, TypeScript and responsive design best practices in every delivery. I'm also involved in FloBrain, a fullstack project that integrates software with a physical device, CAIPO, expanding my experience beyond traditional web development. Despite this multidisciplinary role, my main function at the company is as a web developer."
        }
    }
};

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
    experienceIcon.alt = data[currentLang].title;
    xpTitle.innerHTML = data[currentLang].title;
    xpDescription.innerHTML = data[currentLang].description;
}

nextExperienceBtn.addEventListener("click", () => {
    currentExperienceIndex = (currentExperienceIndex + 1) % experienceKeys.length;
    renderExperience(currentExperienceIndex);
});

prevExperienceBtn.addEventListener("click", () => {
    currentExperienceIndex = (currentExperienceIndex - 1 + experienceKeys.length) % experienceKeys.length;
    renderExperience(currentExperienceIndex);
});

const projects = {
    "setq": {
        stack: "Figma | React | Typescript | PostgreSQL | Supabase",
        url: "https://github.com/diogosella/FATEC-SETQ",
        image: "/assets/projects/setq.png",
        pt: {
            title: "FATEC SetQ",
            description: "Sistema de gerenciamento de times e partidas para quadra de volei para universidades.\nAtuei como Designer UX/UI, Desenvolvedor Fullstack e Team-lead colaborando com outros 2 integrantes."
        },
        en: {
            title: "FATEC SetQ",
            description: "Team and match management system for university volleyball courts.\nI worked as UX/UI Designer, Fullstack Developer and Team Lead, collaborating with 2 other team members."
        }
    },
    "acadex": {
        stack: "Figma | React | Typescript",
        url: "https://github.com/diogosella/acadex",
        image: "/assets/projects/acadex.png",
        pt: {
            title: "ACADEX",
            description: "O FATEC Acadex é uma aplicação mobile desenvolvida para otimizar a produtividade dos estudos de forma simples e organizada. A plataforma reúne ferramentas essenciais para auxiliar estudantes no gerenciamento de tempo, tarefas e conteúdos acadêmicos.\nEste trabalho foi desenvolvido como TCC para a FATEC Ourinhos."
        },
        en: {
            title: "ACADEX",
            description: "FATEC Acadex is a mobile app built to boost study productivity in a simple, organized way. The platform brings together essential tools to help students manage time, tasks and academic content.\nThis project was developed as a capstone project for FATEC Ourinhos."
        }
    },
    "cashble": {
        stack: "React | Typescript | Node.js | Express | Supabase",
        url: "https://github.com/diogosella/cashble",
        image: "/assets/projects/cashble.png",
        pt: {
            title: "Cashble",
            description: "Aplicação web de controle financeiro pessoal, permitindo gerenciar múltiplas contas (caixas), registrar transações e transferências entre elas, além de configurar metas com aportes mensais automáticos.\nAtuei como Desenvolvedor Fullstack, responsável pela integração entre front-end, back-end e banco de dados."
        },
        en: {
            title: "Cashble",
            description: "Personal finance web app that lets users manage multiple accounts, record transactions and transfers between them, and set savings goals with automatic monthly contributions.\nI worked as Fullstack Developer, responsible for integrating the front-end, back-end and database."
        }
    },
    "youcrowd": {
        stack: "Next.js | React | Typescript | OpenAI API",
        url: "https://github.com/diogosella/YouCrowd",
        image: "/assets/projects/youcrowd.png",
        pt: {
            title: "YouCrowd",
            description: "Painel de compradores sintéticos (personas geradas por IA) que reage a uma oferta de infoproduto antes dela ir ao ar, simulando objeções reais de compra e retornando um diagnóstico com recomendações específicas de copy.\nAtuei como Desenvolvedor Fullstack, responsável pela arquitetura, integração com LLM e criação das personas."
        },
        en: {
            title: "YouCrowd",
            description: "Dashboard of synthetic buyers (AI-generated personas) that reacts to an info-product offer before it goes live, simulating real purchase objections and returning a diagnosis with specific copy recommendations.\nI worked as Fullstack Developer, responsible for the architecture, LLM integration and persona creation."
        }
    },
    "tarrl": {
        stack: "Figma | Next.js | React | Typescript",
        url: "https://www.tarrl.org/",
        image: "/assets/projects/tarrl.png",
        pt: {
            title: "TARRL",
            description: "Website institucional criado para promover o programa de estágios internacionais da FloLabs Innovations Group, apresentando a proposta do programa e atraindo candidatos ao redor do mundo.\nAtuei como Designer UX/UI e Desenvolvedor Front-end, responsável pela criação da interface e sua implementação."
        },
        en: {
            title: "TARRL",
            description: "Institutional website created to promote FloLabs Innovations Group's international internship program, presenting the program and attracting candidates worldwide.\nI worked as UX/UI Designer and Front-end Developer, responsible for the interface design and implementation."
        }
    },
    "flolabs-international": {
        stack: "Figma | Next.js | React | Typescript",
        url: "https://www.flolabs.international/",
        image: "/assets/projects/international.png",
        pt: {
            title: "FloLabs International",
            description: "Website institucional que serve como hub central de divulgação da FloLabs Innovations Group, apresentando a incubadora, seu portfólio de projetos em IA e robótica e os programas de estágio.\nAtuei como Designer UX/UI e Desenvolvedor Front-end, responsável pela criação da interface e sua implementação."
        },
        en: {
            title: "FloLabs International",
            description: "Institutional website that serves as the central hub for FloLabs Innovations Group, showcasing the incubator, its portfolio of AI and robotics projects, and its internship programs.\nI worked as UX/UI Designer and Front-end Developer, responsible for the interface design and implementation."
        }
    },
    "bootcamp-university": {
        stack: "Figma | Next.js | React | Typescript",
        url: "https://www.bootcampuniversity.org/",
        image: "/assets/projects/bootcamp.png",
        pt: {
            title: "Bootcamp University",
            description: "Website institucional voltado para career changers, divulgando o programa de educação cooperativa da FloLabs, que une aprendizado a estágio real desde o primeiro dia.\nDesigner UX/UI e Desenvolvedor Front-end, criando interface e implementando-a."
        },
        en: {
            title: "Bootcamp University",
            description: "Institutional website aimed at career changers, promoting FloLabs' cooperative education program, which combines learning with real internship experience from day one.\nUX/UI Designer and Front-end Developer, creating and implementing the interface."
        }
    },
    "valodle": {
        stack: "Javascript | Node.js | Express | PostgreSQL | Sequelize",
        url: "https://github.com/diogosella/VALODLE",
        image: "/assets/projects/valodle.png",
        pt: {
            title: "VALODLE",
            description: "Jogo diário no estilo Wordle onde o objetivo é adivinhar o agente secreto de Valorant do dia, comparando atributos como função, gênero e ano de lançamento a cada tentativa até acertar.\nAtuei como Desenvolvedor Fullstack, responsável pela lógica do jogo, API e modelagem do banco de dados."
        },
        en: {
            title: "VALODLE",
            description: "Daily Wordle-style game where the goal is to guess the day's secret Valorant agent, comparing attributes like role, gender and release year with each guess until you get it right.\nI worked as Fullstack Developer, responsible for the game logic, API and database modeling."
        }
    },
    "artcopia": {
        stack: "HTML | SCSS | Javascript | Parcel",
        url: "https://github.com/diogosella/ArtCopia-v2",
        image: "/assets/projects/artcopia.png",
        pt: {
            title: "ArtCópia Website",
            description: "Website institucional da Art Cópia, destacando os serviços de banners, adesivos, cartões e fachadas, com carrossel de produtos e seção de contato.\nAtuei como Designer UX/UI e Desenvolvedor Front-end, responsável pela criação da interface e sua implementação."
        },
        en: {
            title: "ArtCópia Website",
            description: "Art Cópia's institutional website, highlighting banner, sticker, card and signage services, with a product carousel and contact section.\nI worked as UX/UI Designer and Front-end Developer, responsible for the interface design and implementation."
        }
    }
};

const projectContainer = document.querySelector(".projectsShowcase");

function showcaseProjects(projectId) {
    const data = projects[projectId];
    const text = data[currentLang];

    const newProject = document.createElement("div");
    newProject.classList.add("projectItem");

    const projectImageDiv = document.createElement("div");
    projectImageDiv.classList.add("projectImage");

    const projectIcon = document.createElement("img");
    projectIcon.classList.add("projectIcon");
    projectIcon.src = data.image;
    projectIcon.alt = text.title;

    const projectTextDiv = document.createElement("div");
    projectTextDiv.classList.add("projectInfo");

    const projectName = document.createElement("p");
    projectName.classList.add("projectName");
    projectName.textContent = text.title;

    const projectDesc = document.createElement("p");
    projectDesc.classList.add("projectDescription");
    projectDesc.textContent = text.description;

    const projectStack = document.createElement("p");
    projectStack.classList.add("projectStack");
    projectStack.textContent = data.stack;

    const projectRepo = document.createElement("a");
    projectRepo.classList.add("projectLink");
    projectRepo.textContent = currentLang === "pt" ? "Ver projeto" : "View project";
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

function renderAllProjects() {
    projectContainer.innerHTML = "";
    Object.keys(projects).forEach(projectId => {
        showcaseProjects(projectId);
    });
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_khzk068", "template_rz0exhe", this)
        .then(() => {
            alert(currentLang === "pt" ? "Obrigado! Irei retornar o contato o mais rápido possível" : "Thanks! I'll get back to you as soon as possible.");
            e.target.reset();
        })
        .catch((err) => {
            console.error("Erro ao enviar:", err);
            alert(currentLang === "pt" ? "Houve um erro ao enviar a mensagem." : "There was an error sending the message.");
        });
});

const langToggleBtn = document.getElementById("lang-toggle");

function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "pt" ? "pt-br" : "en";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const text = uiText[lang][key];
        if (!text) return;
        if (el.tagName === "INPUT") {
            el.value = text;
        } else {
            el.innerHTML = text;
        }
    });

    skillTitle.innerHTML = skills[currentSkillId][lang].title;
    skillDescription.innerHTML = skills[currentSkillId][lang].description;

    renderExperience(currentExperienceIndex);
    renderAllProjects();

    langToggleBtn.textContent = lang === "pt" ? "EN" : "BR";
    langToggleBtn.classList.remove("lang-br", "lang-en");
    langToggleBtn.classList.add(lang === "pt" ? "lang-en" : "lang-br");
}

langToggleBtn.addEventListener("click", () => {
    applyLanguage(currentLang === "pt" ? "en" : "pt");
});

applyLanguage(currentLang);
