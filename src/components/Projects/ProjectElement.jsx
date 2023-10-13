import React from "react";
import { getProjectInfoByName } from "../../function/getProjectInfo";
import { projectInfos } from "../../Data/projects";
import Hover from "../Hover/Hover";

const ProjectElement = ({ project, icons, open }) => {
  const projectInfo = getProjectInfoByName(projectInfos, project)

  return (
    <>
      <div onClick={open} className="cursor-pointer flex relative flex-col lg:w-4/12 xl:w-3/12 gap-6 items-center p-5 bg-light-blue rounded-xl shadow-md h-fit">
        <figure className='relative'>
          <img className="h-80 object-cover w-full rounded-xl shadow-sm" src={projectInfo.mainImg} alt={`Landing page of ${project.name}`} />
          <figcaption className='absolute bg-black bg-opacity-60 top-0 text-white flex justify-center items-center w-full h-full rounded-xl opacity-0 hover:opacity-100'>
            <div className='relative top-0 left-0'>
              <Hover name={projectInfo.name} />
            </div>
          </figcaption>
        </figure>
        <div className='text-left rounded-lg my-2 leading-8 pl-2'>
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
              {/* <li className='pl-3 text-sm'>- Découpage de la maquette pour effectuer l'intégration</li> */}
              {/* <li className='pl-3 text-sm'>- Intégration des éléments pour les différents formats</li> */}
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
        </div>
        <div className='h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>

          <h5 className='underline text-xl'>Langages utilisés</h5>
          <ul className='flex gap-10 justify-center m-3'>{icons.map((item, index) => {
            return (
              <li key={index}><img className='w-16' src={item.iconUrl} alt={`${item.name} logo`} /></li>
            )
          })}</ul>
        </div>
        <p>Lien vers le Github : <a className='font-bold' target='_blank' href={projectInfo.githubLink}>Booki</a></p>
      </div>
    </>
  )
};

export default ProjectElement;