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
          <img className="w-[524px] h-[320px] w- object-cover rounded-xl shadow-sm mx-auto" src={projectInfo.mainImg} alt={`Homepage of ${projectInfo.name}`} />
          <figcaption className='absolute bg-black bg-opacity-60 top-0 text-white flex justify-center items-center w-full h-full rounded-xl opacity-0 hover:opacity-100'>
            <div className='relative w-full h-full flex justify-center'>
              <Hover name={projectInfo.name} />
            </div>
          </figcaption>
        </figure>
        {/* <div className='text-left rounded-lg my-2 leading-8 pl-2'>
          <div className='bg-white rounded-lg my-3 py-3 px-2'>
            <h5 className="pl-2 underline" >Problématique :</h5>
            <p className='pl-3 text-sm'>{projectInfo.problematic}</p>
          </div>
          <div className='bg-white rounded-lg my-3 py-3 px-2'>
            <h5 className="pl-2 underline">Les difficultées que j'ai rencontrées :</h5>
            <ul>
              {projectInfo.issues.map((item, index) => {
                return <li key={index} className='pl-3 text-sm'>- {item}</li>
              })}
            </ul>
          </div>
          <div className='bg-white rounded-lg my-3 py-3 px-2'>
            <h5 className='pl-2 underline'>Solutions:</h5>
            <ul className='pl-3 text-sm'>
              {projectInfo.solutions.map((item, index) => {
                return <li key={index}>- {item} </li>
              })}
            </ul>
          </div>
        </div> */}
        {/* <div className='h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'> */}

          {/* <h5 className='underline text-xl'>Langages utilisés</h5> */}
          {/* Used icons List */}
          {/* <ul className='flex gap-10 justify-center m-3'>{icons.map((item, index) => {
            return (
              <li className="flex items-center" key={index}><img className='w-16' src={item.iconUrl} alt={`${item.name} logo`} /></li>
            )
          })}</ul> */}
        {/* </div> */}

      </div>
    </>
  )
};

export default ProjectElement;