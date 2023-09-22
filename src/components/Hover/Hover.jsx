import { projectInfos } from "../../Data/projects";

// Transformez la liste en un objet avec le nom du projet comme clé
const projectsByName = {};
projectInfos.forEach((project) => {
  projectsByName[project.name] = project;
});

const Hover = ({ name }) => {
  const projectName = name;
  const projectInfo = projectsByName[projectName]; // Utilisez l'objet projectsByName

  if (!projectInfo) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center gap-2">
        {/* Utilisez projectInfo pour accéder aux données spécifiques du projet */}
        <h2 className="text-2xl  md:text-sm lg:text-sm xl:text-xl" >Application web : {projectInfo.name}</h2>
        <ul className="leading-3 md:leading-2">
          <li className="text-xl md:text-xs xl:text-md pb-2">Role : {projectInfo.role}</li>
          {projectInfo.tasks.map((task, index) => {
            return <li className="text-sm md:text-xs py-1 xl:text-base md:py-0.5" key={index}>- {task}</li>;
          })}
        </ul>
        {/* ... Autres données spécifiques */}
      </div>
    </>
  );
};

export default Hover;
