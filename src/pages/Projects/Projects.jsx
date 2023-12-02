import React from "react";
import { useState } from 'react';
import ModalContent from '../../components/Modal/ModalContent';
import ProjectElement from '../../components/ProjectElement/ProjectElement';


const Projects = () => {

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


  return (
    // Section containing project tiles
    <section id="projects-section" className="bg-white lg:h-fit flex flex-col justify-center my-10 ">
      <div className='flex justify-center'>      
        <h3 className='text-4xl mb-10  '>Mes projets</h3>
      </div>

      {/* Tiles Container */}
      <div className="flex-col lg:flex-row flex-wrap md:w-fit justify-center flex pt-6 gap-10 h-fit px-8 mx-auto">

        {/* Booki project */}
        <ProjectElement open={() => handleProjectClick("Booki")} project={"Booki"}  />


        {/* Kasa Project */}
        <ProjectElement open={() => handleProjectClick("Kasa")} project={"Kasa"} />

        {/* MVG project */}
        <ProjectElement open={() => handleProjectClick("Mon Vieux Grimoire")} project={"Mon Vieux Grimoire"}  />


        {selectedProject && (
          <button onClick={handleCloseModal}>Close</button>
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

export default Projects;