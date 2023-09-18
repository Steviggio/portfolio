import { projectInfos } from "../../Data/projects";

// Transformez la liste en un objet avec le nom du projet comme clé

const projectsByName = {};
projectInfos.forEach((project) => {
  projectsByName[project.name] = project;
});

const Hover = ({ name }) => {


  const projectName = name; // Remplacez par le nom du projet que vous recherchez
  const projectInfo = projectInfos.find((project) => project.name === projectName);
  console.log(projectsByName)



  if (!projectInfo) {
    // Gérer le cas où le projet n'est pas trouvé
    return <div>Projet non trouvé</div>;
  }

  return (
    <>
      <div className=" flex flex-col justify-center gap-7 ">
        {/* Utilisez projectInfo pour accéder aux données spécifiques du projet */}
        <h2 className="text-2xl">Application web : {projectInfo.name}</h2>
        <ul className="leading-9">
          <li>Role: {projectInfo.role}</li>
          {projectInfo.tasks.map((task, index) => {
            return (<li key={index}>{task}</li>)
          })}
        </ul>
        {/* ... Autres données spécifiques */}
      </div>
    </>
  );
};

export default Hover;