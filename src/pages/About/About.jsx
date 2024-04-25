import DevSkillsContainer from "../../components/DevSkillsContainer/DevSkillsContainer";


const About = () => {
  return (
    <section id="about-section" className=" relative h-fit xl:h- flex justify-center items-center py-5">
      <div className="flex justify-center xl:flex-row mx-6 gap-10 w-full">

        {/* Skills / Tools / Languages used */}
        <div className="mx-5 rounded-xl flex flex-col justify-center h-fit ">
          {/* <h3 className="my-5 mb-5 text-2xl text-white">Mes compétences</h3> */}
          <div className="gap-5 md:gap-3 flex flex-wrap justify-center items-center mb-2 lg:gap-10 ">
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