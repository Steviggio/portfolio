import MVGHome from "../assets/project-modal/MVG/MVG-homepage3.webp";
import MVGAddBook from "../assets/project-modal/MVG/MVG-addbook.png";
import MVGSignIn from "../assets/project-modal/MVG/MVG-signin.png";
import MVGBookPage from "../assets/project-modal/MVG/MVG-bookpage2.png";

import KasaHome from "../assets/project-modal/Kasa/Kasa-homepage2.png";
import KasaFlat from "../assets/project-modal/Kasa/kasa-flatpage2.png";
import KasaAbout from "../assets/project-modal/Kasa/kasa-about2.png";
import BookiImg from "../assets/projects/booki.webp"
import Kasa from "../assets/project-modal/Kasa/Kasa-home.webp"
import KasaTablet from "../assets/project-modal/Kasa/Kasa-tablet.webp"
import mvgHome from "../assets/projects/mvg-home.webp"
import BookiPCTop from "../assets/project-modal/Booki/pc-top.webp"
import BookiPCBottom from "../assets/project-modal/Booki/pc-bottom.png"
import BookiTabletTop from "../assets/project-modal/Booki/tablet_top.png"
import BookiTabletBottom from "../assets/project-modal/Booki/tablet-bottom.png"
import BookiPhoneTop from "../assets/project-modal/Booki/phone-top.png"
import BookiPhoneBottom from "../assets/project-modal/Booki/phone-bottom.png"


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
  tasks: ["Créer une API RESTFUL complète.", "Configurer un système d'authentification (système de token).", "Stocker de manière sécurisé les données des utilisateurs.", "Implémenter et sécuriser un système CRUD.", "Optimiser les images contenues dans la base de données (Green Code)."],
  img: [MVGHome, MVGAddBook, MVGBookPage, MVGSignIn ],
  issues: ["Implémentation de schéma de données.", "Mise en place d'un système d'authentification.", "Optimisation des images envoyées par les utilisateurs." ],
  solutions: ["Création à partir de 0 d'une API RESTFUL grâce à Express.js.", "Implémentation de tests unitaires.", "Intégration de middlewares.", "Création d'un système CRUD sécurisé.", "Création d'un système d'authentification."], 
  problematic: "Intégration d'une maquette en HTML/CSS pour un site de de réservation de logement.",
  mainImg: MVGHome,
  githubLink: "https://github.com/Steviggio/Booki"
},
{
  name: "Booki",
  usedLanguages: ["HTML", "CSS"],
  role: "Frontend developper",
  usedFrameworks: [],
  description: "Développer l'interface web d'une start-up promouvant des activités et lieux touristiques.",
  tasks: ["Inplémenter une interface responsive.", "Intégrer une maquette en HTML/CSS." , "Découper le contenu d'une maquette Figma."],
  img: [BookiPCTop, BookiTabletTop, BookiTabletBottom, BookiPCBottom],
  issues: ["Découpage de la maquette pour effectuer l'intégration.", "Intégration des éléments pour les différents formats."],
  solutions: ["Identification des différentes parties d'une maquette.", "Implémentation de breakpoints et utilisation de media queries pour l'aspect responsive."], 
  problematic: "Intégration d'une maquette en HTML/CSS pour un site de de réservation de logement.",
  mainImg: BookiPCTop,
  githubLink: "https://github.com/Steviggio/Booki"
},
{
  name: "Kasa",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Frontend developper",
  usedFrameworks: ["React"],
  description: "Développer une application web en React pour un site de réservation de logement.",
  tasks: ["Créer une application web avec React.js.", "Créer des composants indépendants.", "Assurer le bon fonctionnement de l'application en implémentant des tests unitaires.", "Configurer le routing de l'application web avec react-router.", "Développer une interface web avec Sass."],
  img: [Kasa,  KasaFlat, KasaAbout, KasaTablet],
  issues: ["Création de composant indépendant prenant en compte des paramètres.", "Routing de l'application.", "Intégration d'animation en CSS." ],
  solutions: ["Identifications des éléments prenant en compte des paramètres afin de les rendre réutilisables.", "Apprentissage du routing grâce à react-router.", "Développement d'une interface web en Sass."], 
  problematic: "Intégration d'une maquette en HTML/CSS pour un site de réservation de logement.",
  mainImg: Kasa,
  githubLink: "https://github.com/Steviggio/Booki"
},
{
  name: "Sophie Bluel",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Frontend developper",
  usedFrameworks: [],
  description: "Développer le portfolio d'une architecte d'intérieure.",
  tasks: ["Création d'une application web dynamique avec JavaScript.", "Intégration des maquettes Figma.", "Implémentation des fonctionnalités d'authentification.", "Implémentation des fonctionnalités d'ajouts de nouveaux éléments à la base de données."],
  issues: ["Découpage de la maquette pour effectuer l'intégration.", "Intégration des éléments pour les différents formats.", "" ],
  solutions: ["Identification des différentes parties d'une maquette.", "Implémentation de breakpoints et utilisation de media queries pour l'aspect responsive."], 
  problematic: "Intégration d'une maquette en HTML/CSS pour un site de de réservation de logement.",
  mainImg: {},
  githubLink: "https://github.com/Steviggio/Booki"
},
{
  name: "Nina Carducci",
  usedLanguages: ["HTML", "CSS", "JavaScript"],
  role: "Frontend developper",
  usedFrameworks: [],
  description: "Optimiser le SEO ainsi que les performances de l'application web et améliorer son accessibilité.",
  tasks: ["Débogage d'une application web.", "Optimisation des performances.", "Optimisation du SEO.", "Mise en place d'un référencement local", "Mise en place de metas tags", "Rapport d'intervention recensant les optimisations effectuées"],
  issues: ["Découpage de la maquette pour effectuer l'intégration.", "Intégration des éléments pour les différents formats.", "" ],
  solutions: ["Identification des différentes parties d'une maquette.", "Implémentation de breakpoints et utilisation de media queries pour l'aspect responsive."], 
  problematic: "Intégration d'une maquette en HTML/CSS pour un site de de réservation de logement.",
  mainImg: {},
  githubLink: "https://github.com/Steviggio/Booki"
}
]

const frontendSkills = [{}];

const backendSkills = [{}]


export { projectInfos };