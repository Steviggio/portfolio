import React from 'react';
import Modal from 'react-modal';
import BookiHome from "../../assets/projects/Booki.png"


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "1000px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


const ModalElement = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <section className='h-fit w-full'>
          <div className='flex justify-between items-center'>
            <button onClick={closeModal} className='font-bold border-2 p-2 rounded-xl hover:bg-slate-300'>close</button>
            <h2 className=''>Bonsoir</h2></div>
          <div className='flex flex-col w-full'>
            <p className='text-center mb-3 text-2xl'>Projet : Booki </p>
            <div className='flex flex-row gap-10'>
              {/* Image du projet à gauche et description à droite */}
              <div className='border-4 w-full h-96'>
                <img src={BookiHome} alt="" />
              </div>
              <div className='border-4 w-full h-96'>
                <h3 className='font-bold text-lg pl-3 pt-3'>Description:</h3>
                <p className='pl-3 pt-3'>Voici la description du projet</p>
              </div>
            </div>
          </div>

        </section>
      </Modal>
    </div>
  );
}

export default ModalElement;