import MVG_img from "../assets/projects/MVG-home.png";

listTemplate =
{
  name: "",
  usedLanguages: [],
  role: "",
  usedFrameworks: [],
  tasks: ""
}

tasksTemplate = [{
  language: "en",
  description: ""
},
{
  language: "fr",
  description: "",
}
]


const projectInfos = [{
  name: "Mon Vieux Grimoire",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Backend developper",
  usedFrameworks: ["Express.js", "React.js"],
  tasks: ["Create an API REST", "Configure an authentication system", "Store and secure datas", "Implement secured CRUD requests"]
},
{
  name: "Booki",
  usedLanguages: ["HTML", "CSS"],
  role: "Frontend developper",
  usedFrameworks: [],
  tasks: [{
    language: "en",
    description: "Create a reponsive website according to a template"
  },
  {
    language: "fr",
    description: "",
  }
  ]
},
{
  name: "Kasa",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Frontend developper",
  usedFrameworks: ["React"],
  tasks: "Create a React App"
},
{
  name: "Sophie Bluel",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Frontend developper",
  usedFrameworks: [],
  tasks: "Create a dynamic website with JavaScript"
},
{
  name: "Nina Carducci",
  usedLanguages: [],
  role: "Frontend developper",
  usedFrameworks: [],
  tasks: "Debug and optimize the SEO of a website"
}
]

const frontendSkills = [{}];

const backendSkills = [{}]