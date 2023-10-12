import { kasaIcons, bookiIcons, mvgIcons, iconsList } from "../../Data/icons";
import Hover from '../../components/Hover/Hover';
import React from "react";
import { useState } from 'react';
import ModalContent from '../../components/Modal/ModalContent';
import { createPortal } from 'react-dom';
import ProjectElement from '../../components/Projects/ProjectElement';



const ProjectPage = () => {


  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const booki = bookiIcons;
  const kasa = kasaIcons;
  const mvg = mvgIcons;

  return (
    // Section containing project tiles
    <section id="projects-section" className="bg-white lg:h-fit flex flex-col justify-center my-10">

      <h3 className='text-5xl mb-10 underline'>Mes projets</h3>
      {/* Tiles Container */}
      <div className="flex-col lg:flex-row flex-wrap md:w-fit justify-center flex pt-6 gap-10 h-fit px-8">

        {/* Tiles list */}

        {/* Booki project */}
        <ProjectElement onClick={() => handleProjectClick("Booki")} project={"Booki"} icons={booki} />



// Dans le composant ProjectPage
        {selectedProject && (
          <div className="modal-background">
            <ModalContent
              name={selectedProject}
              open={showModal}
              onClose={handleCloseModal}
            />
          </div>
        )}

        {showModal && (
          <div className="modal-background">
            <ModalContent
              name={selectedProject}
              open={showModal}
              onClose={handleCloseModal}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectPage;