import profilePic from "../../assets/profile-pic/steve.jpg"
import SkillsList from "../../components/SkillsList/SkillsList";

const About = () => {
  return (
    <section id="about-section" className="relative h-full w-full flex flex-row flex-wrap bg-royal-blue ">
      <div className="flex flex-col py-10 justify-evenly h-screen w-10/12  mx-auto">
        <h4 className="my-8 text-6xl flex ml-16 w-fit border-r-8 border-black border-b-8 pr-1 drop-shadow-xl skew-x-2 text-beige-background">À propos</h4>
        <p className="leading-relaxed px-8 text-2xl w-2/3 text-left text-beige-background">
          Je crée des applications
          dynamiques et responsives avec
          React.js
          et officie en tant que développeur Backend avec Node.js.

          <br />
          Étant polyglotte, les langues ont toujours été l'une de mes passions et les langages de programmation ne font pas exception.
        </p>
      </div>
      <div className="absolute top-36 right-80 rounded-full bg-white h-96 w-96">
        <img src={profilePic} className="rounded-full h-96 w-96" alt="" />
      </div>
      {/* Skills / Tools / Languages used */}
      {/* <div className="w-6/12 h-48 border-4 bg-white rounded-xl border-black mx-auto mb-14">
        <h3>Mes compétences</h3>
        <div className="flex w-max">
          <div className="flex flex-col">
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div> */}
      < SkillsList name="github" />
    </section>
  )
}

export default About; 