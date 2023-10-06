import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MVGHome from "../../assets/project-modal/MVG-homepage3.png"
import MVGAddBook from "../../assets/project-modal/MVG-addbook.png"



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

export default function BasicModal({ title, description }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="scroll-bar">
          <section className='flex overflow-auto relative h-full'>
            <button className='font-bold absolute' onClick={handleClose}>Close</button>
            <div className='flex flex-col w-full mt-7 gap-3'>
              <div className='flex'>
                {/* Img container */}

                <div className='w-full flex-grow border-4 max-h-fit mx-1'>
                  <img src={MVGHome} className='object-contain w-full' alt="" />
                </div>
                {/* Info container  */}
                <div className='w-full flex-grow border-4 max-h-[500px] mx-1 p-4'>
                  <div className='flex flex-col gap-2'>
                    <h4 className='text-2xl font-bold'>Back-end du site {title}</h4>
                    <p className='mt-2'>
                      {description}
                      Voici la description du projet
                    </p>
                    <ul>
                      Voici la liste de tâches effectuées :
                      <li>Voici un élément</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Container for extra imgs */}
              <div className=''>
                {/* A div for each extra img */}
                <div className='absolute grid-box w-[calc(50%-10px)] mb-2'>
                  <img src={MVGAddBook} className='grid-item' alt="" />
                </div>
                <div>
                  <img src="" className='border-4 flex-grow' alt="" />
                </div>
                <div>
                  <img src="" className='border-4 flex-grow' alt="" />
                </div>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}