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
      <div className="relative flex w-full flex-col justify-center gap-2">
        <h2 className="text-xl md:text-2xl lg:text-base xl:text-xl 2xl:text-2xl" >
          {projectInfo.name}
        </h2>
        <p className="absolute bottom-3 right-3">En voir plus</p>
      </div>
    </>
  );
};

export default Hover;
