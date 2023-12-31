import React, { useState } from "react";
import { Box, Modal } from "@mui/material"
import { getProjectInfoByName } from "../../function/getProjectInfo";
import { projectInfos } from '../../Data/projects';
import { useAsyncError } from "react-router-dom";


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
          <section className='flex overflow-auto relative h-full'>
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
                  <p className="text-sm md:text-base">Lien vers le Github : <a className='font-bold text-lg' target='_blank' href={projectInfo.githubLink}>{projectInfo.name}</a></p>
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