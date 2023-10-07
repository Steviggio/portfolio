import MVGHome from "../assets/project-modal/MVG/MVG-homepage.png";
import MVGAddBook from "../assets/project-modal/MVG/MVG-addbook.png";
import MVGSignIn from "../assets/project-modal/MVG/MVG-signin.png";
import MVGBookPage from "../assets/project-modal/MVG/MVG-bookpage2.png";

import KasaHome from "../assets/project-modal/Kasa/Kasa-homepage2.png";
import KasaFlat from "../assets/project-modal/Kasa/kasa-flatpage2.png";
import KasaAbout from "../assets/project-modal/Kasa/kasa-about2.png";

import NinaHomepage from "../assets/project-modal/Nina/nina_carducci.jpg"

// listTemplate =
// {
//   name: "",
//   usedLanguages: [],
//   role: "",
//   usedFrameworks: [],
//   tasks: ""
// }

// tasksTemplate = [{
//   language: "en",
//   description: ""
// },
// {
//   language: "fr",
//   description: "",
// }
// ]


const projectInfos = [{
  name: "Mon Vieux Grimoire",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Backend developper",
  usedFrameworks: ["Express.js", "React.js"],
  description: "Développer une API Restful pour une librairie souhaitant ouvrir un site de référencement et de notation de livre.",
  tasks: ["Création d'une API REST.", "Configuration d'un système d'authentification.", "Stockage et sécurisation de données.", "Implémentation sécurisée de requêtes CRUD."],
  img: [MVGHome, MVGSignIn, MVGAddBook, MVGBookPage ]
},
{
  name: "Booki",
  usedLanguages: ["HTML", "CSS"],
  role: "Frontend developper",
  usedFrameworks: [],
  description: "Développer l'interface web d'une entreprise souhaitant promouvoir les activités et les hébergement disponibles dans la ville de leur choix.",
  tasks: ["Inplémentation d'une interface responsive.", "Intégration d'une maquette en HTML/CSS."],

},
{
  name: "Kasa",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Frontend developper",
  usedFrameworks: ["React"],
  description: "Développer une application complète en React en suivant les maquettes Figma fournies.",
  tasks: ["Création d'une application web avec React.js.", "Routing de l'application web avec react-router.", "Développement d'une interface web avec Sass."],
  img: [KasaHome, KasaFlat, KasaAbout]
},
{
  name: "Sophie Bluel",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Frontend developper",
  usedFrameworks: [],
  description: "Développer le portfolio d'une architecte d'intérieure.",
  tasks: ["Création d'une application web dynamique avec JavaScript.", "Intégration des maquettes Figma.", "Implémentation des fonctionnalités d'authentificaiton.", "Implémentation des fonctionnalités d'ajouts de nouveaux élééments à la base de données."]
},
{
  name: "Nina Carducci",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Frontend developper",
  usedFrameworks: [],
  description: "Optimiser le SEO ainsi que les performances de l'application web et améliorer son accessibilité.",
  tasks: ["Débogage d'une application web.", "Optimisation des performances.", "Optimisation du SEO.", "Mise en place d'un référencement local", "Mise en place de metas tags", "Rapport d'intervention recensant les optimisations effectuées"]
}
]

const frontendSkills = [{}];

const backendSkills = [{}]


export { projectInfos };