import React, { useState } from "react";
import { Box, Modal } from "@mui/material"
import { getProjectInfoByName } from "../../function/getProjectInfo";
import { projectInfos } from '../../Data/projects';
import { masteredTools } from "../../Data/skills";

const skillsByName = {};
masteredTools.forEach((skill) => {
  skillsByName[skill.name] = skill;
})

const github = skillsByName["Github"]

const ModalContent = ({ name, onClose }) => {
  const [open, setOpen] = useState(true)

  const projectInfo = getProjectInfoByName(projectInfos, name)
  const images = projectInfo.img

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box id="scroll-bar" className='modal-props'>
          <section className='flex relative h-full'>
            <button className='font-bold absolute mb-3' onClick={onClose}>Fermer</button>
            <div className='flex flex-col w-full mt-7 gap-3'>
              <div className='flex flex-col-reverse lg:flex-row'>
                {/* Img container */}

                <div className='w-full flex-grow max-h-fit md:mx-1 md:my-1 my-auto'>
                  <img src={projectInfo.mainImg} className='md:h-[477px] md:w-[595px] m-auto modal-item object-contain ' alt={`Main image of ${projectInfos.name}`} />
                </div>
                {/* Info container  */}
                <div className='w-full flex-grow lg:max-h-[500px] h-fit mx-1 p-4'>
                  <div className='flex flex-col md:gap-2'>
                    <h4 className='text-xl md:text-2xl font-bold'>{projectInfo.name}</h4>
                    <p className='mt-2'>
                      Mission : <span className="md:text-lg text-sm underline underline-offset-2">{projectInfo.description}</span>
                    </p>
                    <ul className="my-5 flex flex-col text-xs md:text-base gap-1 md:gap-2">
                      Les tâches que j'ai effectuées :
                      {projectInfo.tasks.map((task, index) => {
                        return <li key={index}>- {task}</li>
                      })}
                    </ul>
                  </div>
                  {Array.isArray(projectInfo.githubLink) ? (
                    // If githubLink is an array, render multiple links
                    <>
                      <p className="flex items-center md:text-base font-bold text-xs gap-1 md:gap-2">
                        Accéder aux repos :
                        {projectInfo.githubLink.map((link, index) => (
                          <>
                            <a key={index} target='_blank' href={Object.values(link)}>
                              <img className="bg-white border ml-3 w-6 h-6 md:w-10 md:h-10 rounded-xl hover:scale-125 duration-300" src={github.icon} alt="" />
                            </a>
                            <span>{Object.keys(link)}</span>
                          </>
                        ))}
                      </p>
                    </>
                  ) : (
                    // If githubLink is a single link, render it
                    <p className="flex items-center md:text-base font-bold text-base">
                      Accéder au repo : <a target='_blank' href={projectInfo.githubLink}>
                        <img className="bg-white border ml-3 w-10 h-10 rounded-xl  hover:scale-125 duration-300" src={github.icon} alt="" />
                      </a>
                    </p>
                  )}
                </div>
              </div>
              {/* Container for extra imgs */}
              <div className="grid grid-cols-2 w-fit mx-auto gap-2 items-center">
                {images.map((item, index) => {
                  return <img className="mx-auto max-h-[500px] modal-item object-contain" src={item} alt={index} />
                })}
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </>
  )
}



export default ModalContent;