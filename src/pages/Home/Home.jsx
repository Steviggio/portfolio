import { TypeAnimation } from 'react-type-animation';
import profilePic from "../../assets/profile-pic/steve.webp"
import Icons from "../../components/Icons/Icons";
import arrow from '../../assets/homeIcons/next.png'
// import MothmoraCV from Mothmora_CV.pdf"
import Button from "../../components/Button/Button";
import { buttonInfo } from "../../Data/socials";

const Home = () => {
  return (
    <>

      <section id="body-section" className='h-fit flex-col md:gap-10 flex mb-10'>
        <div className="flex flex-col items-center md:flex-row w-fit gap-5 lg:gap-0">
          <div className="flex flex-col lg:flex-row justify-center items-center md:ml-16 mt-5 sm:mt-20 gap-3 h-fit shadow-md rounded-2xl w-2/3 sm:w-2/4 lg:w-3/5 py-6 md:py-16 bg-home-blue
          select-none
          ">
            <div className="flex md:pl-8 flex-col w-2/3 justify-center my-auto gap-5 text-left ">
              <h2 className="text-2xl md:text-4xl underline">Steviggio</h2>
              <TypeAnimation
                sequence={[
                  "Moi, c'est Steve et je suis un développeur JavaScript spécialisé en React.js & Node.js.",
                  // () => {
                  //   console.log("Message displayed.");
                  // },
                ]}
                wrapper="p"
                speed={90}
                cursor={true}
                repeat={1}
                className='md:text-xl'
              />
              <p className="flex items-center gap-3">Ma main stack <span className="h-6 w-6 animate-bounce-arrow"><img src={arrow} alt="Arrow icon to point the Icons div" /></span> </p>
            </div>
            <div className=" flex flex-col w-1/2 items-center justify-center">
              <img className='rounded-full w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[150px]  md:h-[150px] lg:w-[190px] lg:h-[190px] xl:w-[220px]  xl:h-[220px]  ' src={profilePic} alt="Steviggio's profile picture" />
            </div>
          </div>
          <div className="flex flex-grow justify-center items-center ">
            {/* Div containing the development sticker of the differents technos i use (main technos) */}
            <div className="w-auto h-2/5" >
              <Icons />
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around lg:justify-between items-center md:pt-10 relative w-full gap-5">

          <div className="flex-col flex md:pl-20 gap-2">
            <div className="flex justify-center items-center gap-5 pt-5 w-fit h-fit ">
              {
                buttonInfo.map((button, index) => {
                 return <Button key={index} color={button.color} name={button.name} link={button.link} />
                })
              }

            </div>
            {/* <div className="flex justify-center items-center h-10">
              <a download="Mothmora_CV.pdf" href="/Mothmora_CV.pdf"  className="px-5 py-2 rounded-md bg-gray-100">Télécharger mon CV</a>
            </div> */}
          </div>

          <div className="flex flex-col justify-evenly text-justify shadow-xl rounded-3xl bg-white w-2/3 md:w-2/4 px-5 md:mr-10 ">
            <div className="flex flex-row justify-evenly items-center">
              <div>
                <h4 className="my-6 text-2xl flex justify-center
              pr-1 drop-shadow-xl underline underline-offset-2 ">À propos de moi</h4>
              </div>
              {/* <img src={profilePic} className="rounded-full w-4/12 " alt={`${profilePic} picture`} /> */}
            </div>
            <p className="leading-relaxed lg:px-4 text-sm md:text-lg mb-5 text-left">
              Passionné de langues et de culture web, je suis un développeur JS junior ayant démarré l'apprentissage de Javascript en autodidacte en 2020.
              J'utilise React.js pour créer des interfaces graphiques dynamique et moderne et Node.js pour développer des API RESTful robustes et évolutives.

            </p>
          </div>
        </div>

      </section>

    </>
  )
}

export default Home;