import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getProjectInfoByName } from '../../function/getProjectInfo';
import { projectInfos } from '../../Data/projects';
import { useEffect } from 'react';
import { useState } from 'react';



// Modal style 
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

export default function BasicModal({ name }) {
  const projectInfo = getProjectInfoByName(projectInfos, name)

  // const title = name.title;
  // const description = name.description;
  // var imgs = [];
  // if (name.imgs) {
  //   imgs = name.imgs
  // }

  if (!projectInfo) {
    return <div>Aucune info n'a été trouvé !</div>
  }

  const [modalIsOpen, setModal] = useState(false);

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
    handleClose();
  }

  useEffect(() => {
    // Open the modal when the component mounts
    openModal();
  }, []);

  useEffect(() => {
    const handleClose = () => {
      closeModal();
    }

    return () => {
      handleClose();
    }, []
  })
  // Empty dependency array means this effect runs only once, when the component mounts

  return (
    <div>
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        shouldCloseOnOverlayClick={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="scroll-bar">
          <section className='flex overflow-auto relative h-full'>
            <button className='font-bold absolute' onClick={closeModal}>Close</button>
            <div className='flex flex-col w-full mt-7 gap-3'>
              <div className='flex'>
                {/* Img container */}

                <div className='w-full flex-grow max-h-fit mx-1'>
                  <img src={projectInfo.img[0]} className='object-contain w-full' alt="" />
                </div>
                {/* Info container  */}
                <div className='w-full flex-grow max-h-[500px] mx-1 p-4'>
                  <div className='flex flex-col gap-2'>
                    <h4 className='text-2xl font-bold'>Back-end du site {projectInfo.name}</h4>
                    <p className='mt-2'>
                      {projectInfo.description}
                    </p>
                    <ul>
                      Voici la liste de tâches effectuées :
                      {projectInfo.tasks.map((task, index) => {
                        <li key={index}>{task}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Container for extra imgs */}
              <div className='relative flex flex-wrap'>
                {/* A div for each extra img */}
                <div className='basis-1/2 grid-box w-[calc(50%-10px)] mb-2'>
                  <img src={projectInfo.img[1]} className='grid-item' alt="" />
                </div>
                <div className='basis-1/2'>
                  <img src={projectInfo.img[2]} className='w-full  flex-grow max-h-[550px]' alt="" />
                </div>
                <div className='basis-1/2'>
                  <img src={projectInfo.img[3]} className='w-full  flex-grow max-h-[550px]' alt="" />
                </div>

              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}