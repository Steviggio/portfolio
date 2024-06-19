import React from "react";
import { getProjectInfoByName } from "../../function/getProjectInfo";
import { projectInfos } from "../../Data/projects";
import Hover from "../Hover/Hover";

const ProjectElement = ({ project, open }) => {
  const projectInfo = getProjectInfoByName(projectInfos, project)

  return (
    <>
      {/* Complete project thumbnail */}
      <div onClick={open} className="cursor-pointer flex relative flex-col lg:w-[410px] items-center rounded-xl shadow-md h-fit">
        <figure className='relative w-full h-full'>
          {/* responsive behavior of the presentation img */}
          <img className="w-[524px] h-[320px] object-cover rounded-xl shadow-sm mx-auto" src={projectInfo.mainImg} alt={`Homepage of ${projectInfo.name}`} />
          <figcaption className='absolute bg-black bg-opacity-60 top-0 text-white flex justify-center items-center w-full h-full rounded-xl opacity-0 hover:opacity-100'>
            <div className='relative w-full h-full flex justify-center'>
              <Hover name={projectInfo.name} />
            </div>
          </figcaption>
        </figure>

      </div>
    </>
  )
};

export default ProjectElement;