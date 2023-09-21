import profilePic from "../../assets/profile-pic/steve.jpg"
import SkillsList from "../../components/SkillsList/SkillsList";

const About = () => {
  return (
    <section id="about-section" className="relative h-full w-full flex flex-row flex-wrap justify-center bg-royal-blue ">
      <div className="flex flex-col py-10 justify-evenly h-screen w-10/12  mx-auto">
        <div className="flex flex-row justify-between items-center gap-7">
          <h4 className="my-8 text-4xl md:text-6xl flex ml-16 w-fit h-fit border-r-8 border-black border-b-8 pr-1 drop-shadow-xl skew-x-2 text-beige-background">À propos</h4>
          <img src={profilePic} className="rounded-full w-4/12 md:h-96 md:w-96" alt="" />
        </div>

        <p className="leading-relaxed px-8 sm:text-xl md:text-2xl w-2/3 text-left text-beige-background">
          Je crée des applications
          dynamiques et responsives avec
          React.js
          et officie en tant que développeur Backend avec Node.js.

          <br />
          Étant polyglotte, les langues ont toujours été l'une de mes passions et les langages de programmation ne font pas exception.
        </p>
      </div>
      {/* Skills / Tools / Languages used */}
      <div className="w-fit border-4 bg-blue-50 rounded-xl mb-14 flex flex-col">
        <h3 className="my-3 mb-5 text-2xl">Mes compétences</h3>
        <div className="gap-2 flex flex-wrap justify-center w-fit mb-1 lg:gap-2 sm:gap-2">
          {/* Different categories of skills */}
          <div className="relative flex flex-col">
            {/* <h4 className="absolute -top-8 left-14 shadow- px-5 text-xl pb-1 w-fit flex flex-row flex-nowrap">Langages maitrisés</h4> */}
            <div className="flex flex-row rounded-md  mx-1 shadow-md shadow-slate-400 border-t-2 ">
              <SkillsList name='HTML' />
              <SkillsList name='CSS' />
              <SkillsList name='JavaScript' />
            </div>
          </div>
          <div className="flex flex-row rounded-md mx-1 shadow-md shadow-slate-400 border-t-2">
            <SkillsList name='React.js' />
            <SkillsList name='Node.js' />
            <SkillsList name='Express.js' />
            <SkillsList name='MongoDB' />
          </div>
          <div className="flex flex-row rounded-md mx-1 shadow-md shadow-slate-400 border-t-2">
            <SkillsList name='Github' />
            <SkillsList name='Gitlab' />
          </div>
          <div className="flex flex-row rounded-md mx-1 shadow-md shadow-slate-400 border-t-2">
            <SkillsList name='npm' />
            <SkillsList name='eslint' />
            <SkillsList name='Babel' />
            <SkillsList name='jest' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default About; 