import React from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '20%',
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
            <p>Voici la div</p>
          </div>

        </section>
      </Modal>
    </div>
  );
}

export default ModalElement;