import React from "react";
import { TypeAnimation } from 'react-type-animation';
import profilePic from "../../assets/profile-pic/steve.webp"

const Home = () => {
  return (
    <>

      <section id="body-section" className='bg-home-blue'>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 h-fit lg:h-screen mx-auto w-3/5 py-16">
          <div className="flex flex-col w-2/3 justify-center my-auto gap-5 text-left">
            <h3 className="pl-3 text-4xl md:text-5xl lg:text-6xl underline">Steviggio</h3>
            <TypeAnimation
              sequence={[
                "Moi, c'est Steve et je suis un développeur JavaScript spécialisé en React.js & Node.js.",
                () => {
                  console.log("Message displayed.");
                },
              ]}
              wrapper="p"
              speed={80}
              cursor={true}
              repeat={1}
              className='lg:text-2xl text-xl'
            />
          </div>
          <div className=" flex flex-col w-1/2 items-center justify-center">
            <img className='rounded-full w-2/3' src={profilePic} alt="Steviggio's profile picture" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Home;