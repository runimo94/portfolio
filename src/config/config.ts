export const dataHeader = {
  listSections: [
    {
      text: "Inicio",
      id: "#Inicio",
    },
    {
      text: "Sobre mi",
      id: "#SobreMi",
    },
    {
      text: "Proyectos",
      id: "#Proyectos",
    },
    {
      text: "Habilidades",
      id: "#Habilidades",
    },
    {
      text: "Contacto",
      id: "#Contacto",
    },
  ],
};

export const dataInicio = {
  textHeader: "Hola, soy ",
  textHeader2: "<Desarrollador",
  textHeader3: "fullstack/>",
  name: "Rubén Nicolás",
  listButtons: [
    {
      text: "Descarga CV",
      url: "/documents/runimo_cv.pdf",
      isDownload: true,
    },
    {
      text: "GitHub",
      url: "https://github.com/runimo94",
      isDownload: false,
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/rubén-nicolás-morales",
      isDownload: false,
    },
  ],
};

export const dataAboutMe = {
  headerText: "Sobre mi",
  image: "images/runimo94.png",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, vitae voluptatibus accusamus cum perferendis corporis soluta inventore repellendus, quam quia, dolores autem repudiandae sunt. Quia delectus, provident quo corporis dolorum quaerat rem illo reprehenderit earum vero magni eum distinctio, quibusdam quas quasi quod vitae minima id ullam aspernatur esse veritatis?",
  subtext:
    "*Esta no es una foto real. Es una imagen generada con Stable Diffusion, una IA generativa de imagenes. Usando un modelo entrenado por mi, con fotos propias.",
};

export const dataProjects = {
  headerText: "Proyectos",
  listProjects: [
    {
      image: "images/project1.png",
      title: "MonsterCat Release Album Page Clone",
      urlCode: "https://github.com/runimo94/album-release-page",
      url: "https://runimo94.github.io/album-release-page/",
      techIcons: ["html", "tailwind", "javascript", "angular"],
    },
    {
      image: "images/project2.png",
      title: "World of Warcraft Landing Page Clone",
      urlCode: "https://github.com/runimo94/landing-page-warcraft",
      url: "https://runimo94.github.io/landing-page-warcraft/",
      techIcons: ["html", "tailwind", "javascript", "angular"],
    },
    {
      image: "images/project3.png",
      title: "Portfolio personal",
      urlCode: "https://github.com/runimo94/portfolio",
      url: "",
      techIcons: ["html", "tailwind", "javascript", "astro", "react"],
    },
  ],
};

export const dataSkills = {
  headerText: "Habilidades",
  skills: [
    {
      id: "FrontEnd",
      skillName: "FrontEnd",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut debitis possimus repudiandae harum culpa, amet blanditiis vitae, dolorum dignissimos illum aliquam suscipit, itaque odio libero? Aliquid maxime asperiores unde quaerat, sequi illum voluptate reiciendis magni aut ipsam harum quidem eaque fugit saepe? Odit, quod sequi commodi dolores eaque illum.",
      techIcons: ["html", "css", "angular", "tailwind", "javascript", "astro"],
    },
    {
      id: "BackEnd",
      skillName: "BackEnd",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut debitis possimus repudiandae harum culpa, amet blanditiis vitae, dolorum dignissimos illum aliquam suscipit, itaque odio libero? Aliquid maxime asperiores unde quaerat, sequi illum voluptate reiciendis magni aut ipsam harum quidem eaque fugit saepe? Odit, quod sequi commodi dolores eaque illum.",
      techIcons: ["nodejs", "sql server", "mongodb", "express"],
    },
    {
      id: "Mobile",
      skillName: "Movil",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut debitis possimus repudiandae harum culpa, amet blanditiis vitae, dolorum dignissimos illum aliquam suscipit, itaque odio libero? Aliquid maxime asperiores unde quaerat, sequi illum voluptate reiciendis magni aut ipsam harum quidem eaque fugit saepe? Odit, quod sequi commodi dolores eaque illum.",
      techIcons: ["android", "xamarin", "xaml"],
    },
    {
      id: "Desktop",
      skillName: "Escritorio",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut debitis possimus repudiandae harum culpa, amet blanditiis vitae, dolorum dignissimos illum aliquam suscipit, itaque odio libero? Aliquid maxime asperiores unde quaerat, sequi illum voluptate reiciendis magni aut ipsam harum quidem eaque fugit saepe? Odit, quod sequi commodi dolores eaque illum.",
      techIcons: ["dotnet", "xaml"],
    },
    {
      id: "Herramientas",
      skillName: "Herramientas e IDEs",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut debitis possimus repudiandae harum culpa, amet blanditiis vitae, dolorum dignissimos illum aliquam suscipit, itaque odio libero? Aliquid maxime asperiores unde quaerat, sequi illum voluptate reiciendis magni aut ipsam harum quidem eaque fugit saepe? Odit, quod sequi commodi dolores eaque illum.",
      techIcons: ["git", "visual Studio", "nuget", "android studio", "vs code"],
    },
  ],
};

export const dataContact = {
  headerText: "Contacto",
  email: "runimo94@gmail.com",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, delectus? Qui, cupiditate! Repellat eius optio, rerum, commodi exercitationem quisquam distinctio sapiente dolorum dolor maiores id! Repudiandae voluptas, pariatur atque voluptatem optio reprehenderit eveniet maxime ullam cupiditate assumenda vel",
  listButtons: [
    {
      icon: "/icons/github.svg",
      url: "https://github.com/runimo94",
    },
    {
      icon: "/icons/linkedin.svg",
      url: "https://www.linkedin.com/in/rubén-nicolás-morales",
    },
  ],
  formData: {
    placeholderTitle: "Email...",
    placeholderText: "Escribe tu mensaje...",
  },
};
