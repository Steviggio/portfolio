import DevSkillsContainer from "../../components/DevSkillsContainer/DevSkillsContainer";


const About = () => {
  return (
    <section id="about-section" className=" relative h-fit xl:h- flex justify-center items-center py-5">
      <div className="flex justify-center xl:flex-row mx-6 gap-10 w-full">

        {/* Skills / Tools / Languages used */}
        <div className="mx-5 rounded-xl flex flex-col justify-center h-fit ">
          <div className="gap-5 md:gap-3 flex flex-wrap justify-center items-center mb-2 lg:gap-10 ">
            <DevSkillsContainer title="Frontend" skills={["React", "Vue", "NextJS", "JavaScript", "Typescript", "Tailwind", "Redux", "Vite"]} />
            <DevSkillsContainer title="Backend" skills={["Node", "Express", "NestJs", "MongoDB", "PostGreSQL", "MySQL"]} />
            <DevSkillsContainer title="Outils et plateformes utilisées" skills={["Git", "Github", "Gitlab", "Jira", "Confluence", "Nginx", "Docker", "Jenkins", "Webpack", "Ubuntu", "Postman", "Jest"]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About; 