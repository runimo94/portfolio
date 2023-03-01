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
  image: "/images/runimo94.webp",
  text: "Soy Rubén Nicolás, desarrollador fullstack con más de 3 años de experiencia en el desarrollo fullstack. Desde que entré por primera vez en un foro, quedé fascinado con el desarrollo de software y he estado aprendiendo por mi cuenta y formalmente para sumergirme en este mundo que tanto me apasiona. Actualmente, estoy ampliando mis conocimientos en el desarrollo web y estoy emocionado por poner en práctica mis nuevas habilidades.",
  subtext:
    "*Esta no es una foto real. Es una imagen generada con Stable Diffusion, una IA generativa de imagenes. Usando un modelo entrenado por mi, con fotos propias.",
};

export const dataProjects = {
  headerText: "Proyectos",
  listProjects: [
    {
      image: "/images/project1.webp",
      title: "MonsterCat Release Album Page Clone",
      urlCode: "https://github.com/runimo94/album-release-page",
      url: "https://runimo94.github.io/album-release-page/",
      techIcons: ["html", "tailwind", "javascript", "angular"],
    },
    {
      image: "/images/project2.webp",
      title: "World of Warcraft Landing Page Clone",
      urlCode: "https://github.com/runimo94/landing-page-warcraft",
      url: "https://runimo94.github.io/landing-page-warcraft/",
      techIcons: ["html", "tailwind", "javascript", "angular"],
    },
    {
      image: "/images/project3.webp",
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
      text: "La programación Frontend es definitivamente mi enfoque favorito. Me encanta trabajar con HTML, CSS y Javascript para crear interfaces de usuario atractivas y funcionales. Además, he aprendido a utilizar herramientas como Angular, Tailwind y Astro para hacer el proceso de desarrollo aún más fácil y eficiente.",
      techIcons: ["html", "css", "angular", "tailwind", "javascript", "astro"],
    },
    {
      id: "Mobile",
      skillName: "Movil",
      text: "Tengo una amplia experiencia en el desarrollo móvil. He trabajado con Java para crear aplicaciones para Android, así como con Xamarin y Xaml para crear interfaces en Xamarin. Me encanta cómo puedo crear aplicaciones móviles útiles y funcionales que pueden ser utilizadas por personas en cualquier lugar y en cualquier momento.",
      techIcons: ["android", "xamarin", "xaml"],
    },
    {
      id: "BackEnd",
      skillName: "BackEnd",
      text: "En mi experiencia en el desarrollo de Backend, he trabajado con bases de datos como SQL server y mongoDB, así como con tecnologías como Node.js y Express.js. Me encanta la forma en que puedo manipular los datos y procesos para lograr resultados específicos y hacer que las aplicaciones funcionen sin problemas.",
      techIcons: ["nodejs", "sql server", "mongodb", "express"],
    },
    {
      id: "Desktop",
      skillName: "Escritorio",
      text: "En mi experiencia en el desarrollo de aplicaciones de escritorio, he utilizado .NET y Xaml para crear la parte visual. Aunque no es mi enfoque principal, disfruto creando aplicaciones de escritorio y viendo cómo las personas pueden utilizarlas de manera efectiva.",
      techIcons: ["dotnet", "xaml"],
    },
    {
      id: "Herramientas",
      skillName: "Herramientas e IDEs",
      text: "Utilizo una variedad de herramientas y entornos de desarrollo integrado (IDEs) para el desarrollo de software. Algunas de las herramientas que utilizo incluyen VScode, Visual Studio, Android Studio, NPM, GIT y NuGet. Tambien tengo un poco de conocimiento de Photoshop. Estas herramientas me ayudan a trabajar de manera más eficiente y efectiva en proyectos de desarrollo de software, y me permiten hacer mi trabajo con mayor precisión y calidad.",
      techIcons: [
        "git",
        "visual Studio",
        "nuget",
        "android studio",
        "vs code",
        "npm",
        "photoshop",
      ],
    },
  ],
};

export const dataContact = {
  headerText: "Contacto",
  email: "runimo94@gmail.com",
  text: "¡Gracias por visitar mi portafolio! Si estás interesado en conocer más acerca de mis proyectos o te gustaría contactarme para discutir una posible colaboración, por favor no dudes en hacerlo. Puedes hacerlo a través del formulario de contacto que aparece a continuación o mediante mi correo electrónico. También puedes conectarte conmigo a través de mi perfil en LinkedIn o revisar algunos de mis proyectos en GitHub.",
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
