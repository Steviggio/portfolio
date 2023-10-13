import React, { useState } from "react";
import { Box, Modal } from "@mui/material"
import { getProjectInfoByName } from '../../function/getProjectInfo';
import { projectInfos } from '../../Data/projects';
import { useAsyncError } from "react-router-dom";



{/* Render the selected project modal
        {selectedProject && createPortal(
          <ModalContent name={selectedProject} onclose={closeModal & handleCloseModal} />,
          document.body
        )} */}


const ModalContent = ({ name, onClose }) => {
  const [open, setOpen] = useState(true)

  const projectInfo = getProjectInfoByName(projectInfos, name)

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box id="scroll-bar" className='modal-props'>
          <section className='flex overflow-auto relative h-full'>
            <button className='font-bold absolute' onClick={onClose}>Close</button>
            <div className='flex flex-col w-full mt-7 gap-3'>
              <div className='flex'>
                {/* Img container */}

                <div className='w-full flex-grow max-h-fit mx-1 my-1'>
                  <img src={projectInfo.img[0]} className='h-[477px] w-[595px] modal-item object-contain ' alt={`Main image of ${projectInfos.name}`} />
                </div>
                {/* Info container  */}
                <div className='w-full flex-grow max-h-[500px] h-fit mx-1 p-4'>
                  <div className='flex flex-col gap-2'>
                    <h4 className='text-2xl font-bold'>Back-end du site {projectInfo.name}</h4>
                    <p className='mt-2'>
                      Mission : <span className="text-lg underline underline-offset-2">{projectInfo.description}</span>
                    </p>
                    <ul className="my-5 flex flex-col gap-2">
                      Les tâches que j'ai effectuées :
                      {projectInfo.tasks.map((task, index) => {
                        return <li key={index}>- {task}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Container for extra imgs */}
              <div className='relative flex flex-wrap gap-2'>
                {/* A div for each extra img */}
                <div className='basis-auto grid-box w-[608px] h[592px] mb-2'>
                  <img src={projectInfo.img[1]} className='modal-item ' alt={`Image of ${projectInfos.name}`} />
                </div>
                <div className='basis-auto m-auto'>
                  <img src={projectInfo.img[2]} className=' modal-item flex-grow w-[608px] max-h-[750px]' alt={`Image of ${projectInfos.name}`} />
                </div>
                <div className='basis-auto m-auto'>
                  <img src={projectInfo.img[3]} className=' modal-item flex-grow max-h-[550px] max-w-[820px]' alt={`Image of ${projectInfos.name}`} />
                </div>

              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </>
  )
}

export default ModalContent;