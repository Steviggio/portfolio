// Page meant to display a project features and description 
// Need to elaborate over the used libraries and components developed
// A precise description over the role i had in the project and what kind of things i've developped
import React from "react";
import { projectInfos } from "../../Data/projects";
import { useParams } from "react-router-dom";
import { getProjectInfoByName } from "../../function/getProjectInfo";


const ProjectPage = () => {

  // const name = useParams();
  // const projectInfo = getProjectInfoByName(projectInfos, name)

  return (
    <>
      <section className='flex flex-col'>
        {/* head part of the project page */}
        <div className="flex justify-center w-full m-3">
          <div className="absolute left-3">
            <button className='font-bold' >Close</button>
          </div>
          <div>
            <h3 className="text-2xl ">Title of the project</h3>
          </div>
        </div>

        {/* Main body of the project page */}
        <div >

          {/* Content of the associated project */}
          <div className="lg:w-4/5 flex mx-auto">
            <div className='flex flex-col w-full mt-7 gap-3'>
              <div className='flex justify-evenly'>
                {/* Img container */}

                <div className=' max-h-fit mx-1 my-1'>
                  <img className='h-[477px] w-[595px] modal-item object-contain ' alt={`Main image of `} />
                </div>
                {/* Info container  */}
                <div className='max-h-[500px] h-fit mx-1 p-4'>
                  <div className='flex flex-col gap-2 text-left'>
                    <h4 className='text-2xl font-bold'>Back-end du site</h4>
                    <p className='mt-2'>
                      Mission : <span className="text-lg underline underline-offset-2"></span>
                    </p>
                    <ul className="my-5 flex flex-col gap-2">
                      Les tâches que j'ai effectuées :
                    </ul>
                  </div>
                </div>
              </div>
              {/* Container for extra imgs */}
              <div className='relative flex flex-wrap gap-2'>
                {/* A div for each extra img */}
                {/* Should be a component */}
                <div className='basis-auto grid-box w-[608px] h[592px] mb-2'>
                  <img src="" className='modal-item ' alt="{`Image of ${projectInfos.name}`}" />
                </div>
                <div className='basis-auto m-auto'>
                  <img src="" className=' modal-item flex-grow w-[608px] max-h-[750px]' alt="{`Image of ${projectInfos.name}`}" />
                </div>
                <div className='basis-auto m-auto'>
                  <img src="" className=' modal-item flex-grow max-h-[550px] max-w-[820px]' alt="{`Image of ${projectInfos.name}`}" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ProjectPage;