import React from "react";
import Tiles from "../../components/Tiles/Tiles";
import { projectInfos } from "../../Data/projects"
import { getProjectInfoByName } from "../../function/getProjectInfo";
import Modal from "react-modal";

const ProjectPage = ({ project }) => {


  // const projectDatas = getProjectInfoByName(projectInfos, project)

  // if (!projectDatas) {
  //   return <div>Projet non trouvé</div>
  // }

  return (
    <>
      {/* Header needs to be a component to generate a personnalized entitlement for each project */}
      <header className="flex m-5 w-1/2 justify-between items-center">
        <span className="text-2xl border-2 px-2 pb-2 rounded-lg cursor-pointer" >
          &#x2190;
        </span>
        {/* Specific title */}
        <h1 className="font-bold text-xl ">Voici la project page</h1>
      </header>
      <main>
        <section>
        
        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default ProjectPage;