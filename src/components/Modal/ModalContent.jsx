import React, { useState } from "react";
import { Box, Modal } from "@mui/material"
import { getProjectInfoByName } from '../../function/getProjectInfo';
import { projectInfos } from '../../Data/projects';
import { useAsyncError } from "react-router-dom";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  maxWidth: "1300px",
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: "10px",
  boxShadow: 24,
  height: "100%",
  maxHeight: "93vh",
  p: 4,
};

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
        <Box sx={style} id="scroll-bar">
          <section className='flex overflow-auto relative h-full'>
            <button className='font-bold absolute' onClick={onClose}>Close</button>
            <div className='flex flex-col w-full mt-7 gap-3'>
              <div className='flex'>
                {/* Img container */}

                <div className='w-full flex-grow max-h-fit mx-1'>
                  <img src={projectInfo.img[0]} className='object-contain w-full' alt="" />
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
                <div className='basis-auto grid-box w-[calc(50%-10px)] mb-2'>
                  <img src={projectInfo.img[1]} className='grid-item ' alt="" />
                </div>
                <div className='basis-auto'>
                  <img src={projectInfo.img[2]} className='w-full  flex-grow max-h-[550px] max-w-[570px]' alt="" />
                </div>
                <div className='basis-auto'>
                  <img src={projectInfo.img[3]} className='w-full  flex-grow max-h-[550px]' alt="" />
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