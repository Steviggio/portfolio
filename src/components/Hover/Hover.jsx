import { projectInfos } from "../../Data/projects";
import React from "react";
import { getProjectInfoByName } from "../../function/getProjectInfo";


const Hover = ({ name }) => {
  const projectInfo = getProjectInfoByName(projectInfos, name);

  if (!projectInfo) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center gap-2">
        {/* Utilisez projectInfo pour accéder aux données spécifiques du projet */}
        <h2 className="text-xl md:text-2xl lg:text-base xl:text-xl 2xl:text-2xl" >Application web : {projectInfo.name}</h2>
        <ul className="leading-3 md:leading-2">
          <li className="text-xl md:text-base  xl:text-md 2xl:text-lg pb-2">Role : {projectInfo.role}</li>
          {projectInfo.tasks.map((task, index) => {
            return <li className="text-sm md:text-xl lg:text-xs py-1 xl:text-xs 2xl:text-base md:py-0.5" key={index}>- {task}</li>;
          })}
        </ul>

      </div>
    </>
  );
};

export default Hover;
