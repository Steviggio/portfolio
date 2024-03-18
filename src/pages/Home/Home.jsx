import React from "react";
import { TypeAnimation } from 'react-type-animation';
import profilePic from "../../assets/profile-pic/steve.webp"

const Home = () => {
  return (
    <>

      <section id="body-section" className='h-screen flex-col gap-10 flex '>
        <div className="flex flex-row w-fit">
          <div className="flex flex-col lg:flex-row justify-center items-center ml-16 mt-20 gap-8 h-fit shadow-md rounded-2xl w-3/5 py-16 bg-home-blue
          select-none
          ">
            <div className="flex pl-8 flex-col w-2/3 justify-center my-auto gap-5 text-left ">
              <h3 className="text-4xl md:text-4xl underline">Steviggio</h3>
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
                className='text-xl'
              />
            </div>
            <div className=" flex flex-col w-1/2 items-center justify-center">
              <img className='rounded-full w-2/3' src={profilePic} alt="Steviggio's profile picture" />
            </div>
          </div>
          <div className="flex flex-grow justify-center items-center ">
            {/* Div containing the development sticker of the differents technos i use (main technos) */}
            <div className="border-2 w-10 h-10" >
                
            </div>

          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex flex-col justify-evenly text-justify shadow-xl rounded-3xl bg-white w-2/4 px-5">
            <div className="flex flex-row justify-evenly items-center">
              <div>
                <h4 className="my-6 text-2xl flex justify-center
              pr-1 drop-shadow-xl underline underline-offset-2 ">À propos de moi</h4>
              </div>
              {/* <img src={profilePic} className="rounded-full w-4/12 " alt={`${profilePic} picture`} /> */}
            </div>
            <p className="leading-relaxed lg:px-4 text-sm md:text-lg mb-5 text-left ">
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