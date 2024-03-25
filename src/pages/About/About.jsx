import SkillsList from "../../components/SkillsList/SkillsList";
import React from "react";
import DevSkillsContainer from "../../components/DevSkillsContainer/DevSkillsContainer";


const About = () => {
  return (
    <section id="about-section" className=" border-t-2 relative h-fit xl:h-screen flex justify-center items-center  py-10">
      <div className="flex justify-center xl:flex-row mx-6 gap-10 w-full">
        {/* <div className="flex flex-col w-4/5 sm:w-3/5 lg:w-2/5 gap-5 lg:py-16 h-full mx-auto my-auto "> */}
        {/* <div className=" flex flex-col justify-evenly text-justify shadow-2xl rounded-3xl bg-white w-fit px-5">
            <div className="flex flex-row justify-evenly items-center">
              <div>
                <h4 className="my-6 text-2xl flex justify-center
              pr-1 drop-shadow-xl underline underline-offset-2 w-fit">À propos de moi</h4>
              </div> */}
        {/* <img src={profilePic} className="rounded-full w-4/12 " alt={`${profilePic} picture`} /> */}
        {/* </div>
            <p className="leading-relaxed lg:px-4 text-sm md:text-lg mb-5 text-left ">
              Passionné de langues et de culture web, je suis un développeur JS junior ayant démarré l'apprentissage de Javascript en autodidacte depuis 2020.
              J'utilse React.js pour créer des interfaces graphiques dynamique et moderne et Node.js afin de créer des API RESTful robustes et évolutives

            </p>
          </div> */}
        {/* Div containing my downloadable resume */}
        {/* <div>

          </div> */}
        {/* </div> */}


        {/* Skills / Tools / Languages used */}
        <div className="mx-5 rounded-xl flex flex-col justify-center h-fit ">
          {/* <h3 className="my-5 mb-5 text-2xl text-white">Mes compétences</h3> */}
          <div className="gap-3 flex flex-wrap justify-center items-center mb-2 lg:gap-10 sm:gap-3">
            <DevSkillsContainer titre="Frontend" skills={["React", "NextJS", "JavaScript", "Typescript", "Tailwind", "Redux", "Vite"]} />
            <DevSkillsContainer titre="Backend" skills={["Node", "Express", "NestJs", "MongoDB", "PostGreSQL", "Jest"]} />
            <DevSkillsContainer titre="Outils et plateformes utilisées" skills={["Git", "Github", "Gitlab", "Jira", "Confluence", "Jira", "Nginx", "Docker", "Jenkins", "Webpack", "Ubuntu"]} />


          </div>
        </div>
      </div>
    </section>
  )
}

export default About; 