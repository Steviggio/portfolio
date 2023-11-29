import SkillsList from "../../components/SkillsList/SkillsList";
import React from "react";


const About = () => {
  return (
    <section id="about-section" className="relative h-fit lg:h-screen w-full flex justify-center items-center bg-royal-blue py-10">
      <div className="flex flex-col lg:flex-row lg:w-5/6 gap-7">
        <div className="flex flex-col gap-5 lg:py-16 h-full sm:w-fit mx-auto my-auto ">
          <div className=" flex flex-col justify-evenly shadow-2xl rounded-3xl bg-white w-2/3 mx-auto">
            <div className="flex flex-row justify-evenly items-center">
              <div>
                <h4 className="my-6 text-xl md:text-xl flex w-fit 
              pr-1 drop-shadow-xl skew-x-2 underline underline-offset-8">À propos de moi</h4>
              </div>
              {/* <img src={profilePic} className="rounded-full w-4/12 " alt={`${profilePic} picture`} /> */}
            </div>
            <p className="leading-relaxed px-8 mx-auto text-sm mb-5 text-left w-full">
              {/* Jeune développeur JavaScript, spécialisé en React.js et Node.js, j'exploite mes compétences
              afin de réaliser des projets je suis passionné par l'art de créer des applications web fluides et intuitives. 
              Ma passion pour les langages informatiques se mêle harmonieusement à mon intérêt pour les langues humaines. 
              Je suis convaincu que cette combinaison unique m'apporte une perspective précieuse dans le développement de solutions innovantes. 
              Chaque projet est une opportunité pour moi de m'imprégner de nouvelles connaissances, et je m'efforce constamment d'approfondir mes compétences 
              pour offrir des solutions robustes et adaptées. */}
              Jeune développeur JavaScript depuis 2018, je suis spécialisé en React.js / Node.js.

            </p>
            <div>
            </div>
          </div>
          {/* Experiences container */}
          <div className="bg-white w-3/4 mx-auto text-left rounded-lg">
            <h4 className="pl-16 py-1">Expériences</h4>
            {/* Previous experiences container */}
            <div className="border-4 rounded-lg ">
              {/* Previous job experiences container */}
              <div className="flex pl-4 pt-1 gap-5">
                <div><p>Job</p></div>
                <div>
                  <div className="border-b-2">Description</div>
                  <div>Skills</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Skills / Tools / Languages used */}
        <div className="mx-auto rounded-xl flex flex-col justify-center h-fit ">
          {/* <h3 className="my-5 mb-5 text-2xl text-white">Mes compétences</h3> */}
          <div className="gap-2 flex flex-col justify-center w-fit mb-2 lg:gap-3 sm:gap-3">
            {/* Different categories of skills */}
            <div className="relative flex flex-col">
              {/* <h4 className="absolute -top-8 left-14 shadow- px-5 text-xl pb-1 w-fit flex flex-row flex-nowrap">Langages maitrisés</h4> */}
              <div className="justify-center flex flex-row rounded-md mx-1 shadow-md  border-t-2 skill-list bg-blue-50">
                <SkillsList name='NextJS' />
                <SkillsList name='React.js' />
                <SkillsList name='JavaScript' />
                <SkillsList name="Typescript" />
              </div>
            </div>
            <div className="justify-center flex flex-row rounded-md mx-1 shadow-md border-t-2 skill-list bg-blue-50">
              <SkillsList name='Node.js' />
              <SkillsList name='Express.js' />
              <SkillsList name='NestJs' />
              <SkillsList name='MongoDB' />
            </div>
            <div className="justify-center flex flex-row rounded-md mx-1 shadow-md border-t-2 skill-list bg-blue-50">
              <SkillsList name='Vite' />
              <SkillsList name='Tailwind' />
              <SkillsList name='jest' />
            </div>
            <div className="justify-center flex flex-row rounded-md mx-1 shadow-md border-t-2 skill-list bg-blue-50">
              <SkillsList name='Github' />
              <SkillsList name='Gitlab' />
              <SkillsList name="Jira" />
              <SkillsList name="Confluence" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About; 