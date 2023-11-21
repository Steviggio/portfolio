import profilePic from "../../assets/profile-pic/steve.webp"
import SkillsList from "../../components/SkillsList/SkillsList";
import React from "react";

const About = () => {
  return (
    <section id="about-section" className="relative h-screen w-full flex flex-row py-16 justify-center items-center bg-royal-blue ">
      <div className="flex rounded-xl py-16 h-full w-1/2 mx-auto">
        <div className="border-black flex flex-col justify-evenly shadow-2xl rounded-full">
          <div className="flex flex-row justify-evenly items-center">
            <h4 className="my-8 text-2xl sm:text-4xl md:text-6xl flex w-fit h-fit border-r-8
             border-black border-b-8 pr-1 drop-shadow-xl skew-x-2 text-white">À propos</h4>
            <img src={profilePic} className="rounded-full w-4/12 lg:h-72 lg:w-72" alt={`${profilePic} picture`} />
          </div>
          <p className="leading-relaxed px-8 mx-auto sm:text-xl md:text-xl sm:w-3/4 text-left text-white">
            Je crée des applications
            dynamiques et responsives avec
            React.js
            et officie en tant que développeur Backend en utilisant Node.js pour créer des API RESTFUL.
          </p>
          <div>
          </div>
        </div>
      </div>
      {/* Skills / Tools / Languages used */}
      <div className="mx-auto border-2 bg-blue-50 rounded-xl flex flex-col justify-center h-fit ">
        <h3 className="my-5 mb-5 text-2xl ">Mes compétences</h3>
        <div className="gap-2 flex flex-col justify-center w-fit mb-2 lg:gap-2 sm:gap-2">
          {/* Different categories of skills */}
          <div className="relative flex flex-col">
            {/* <h4 className="absolute -top-8 left-14 shadow- px-5 text-xl pb-1 w-fit flex flex-row flex-nowrap">Langages maitrisés</h4> */}
            <div className="justify-center flex flex-row rounded-md  mx-1 shadow-md shadow-slate-400 border-t-2 ">
              <SkillsList name='HTML' />
              <SkillsList name='CSS' />
              <SkillsList name='JavaScript' />
              <SkillsList name="Typescript" />
            </div>
          </div>
          <div className="justify-center flex flex-row rounded-md mx-1 shadow-md shadow-slate-400 border-t-2">
            <SkillsList name='React.js' />
            <SkillsList name='Node.js' />
            <SkillsList name='Express.js' />
            <SkillsList name='MongoDB' />
          </div>
          <div className="justify-center flex flex-row rounded-md mx-1 shadow-md shadow-slate-400 border-t-2">
            <SkillsList name='NestJs' />
            <SkillsList name='Vite' />
            <SkillsList name='Tailwind' />
            <SkillsList name='jest' />
          </div>
          <div className="justify-center flex flex-row rounded-md mx-1 shadow-md shadow-slate-400 border-t-2">
            <SkillsList name='Github' />
            <SkillsList name='Gitlab' />
            <SkillsList name="Jira" />
            <SkillsList name="Confluence" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default About; 