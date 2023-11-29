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
                "Moi, c'est Steve et j'utilise React.js ainsi que Node.js pour créer des applications web dynamiques et responsives.",
                () => {
                  console.log("Message displayed.");
                },
              ]}
              wrapper="p"
              speed={70}
              cursor={true}
              // style={{ fontSize: "1.5em" }}
              repeat={1}
              className='lg:text-2xl text-xl'
            />
          </div>
          <div className=" flex flex-col w-1/2 items-center justify-center">
            {/* <h3 className='mt-2 text-2xl underline mb-3'>Skills tree</h3> */}
            {/* <div className='my-2 w-96 h-fit lg:h-72 lg:w-10/12 flex flex-col justify-center border-4 border-black rounded-b-3xl rounded-t-3xl p-2 lg:rounded-t-full'>
              <h4 className='font-semi-bold underline text-xl'>Frontend</h4>
              <img className='lg:h-60 object-contain' src={frontendDiag} alt="Frontend diagram" />
            </div>
            <div className='my-3 w-96 h-fit lg:h-72 lg:w-10/12 flex flex-col justify-center items-center border-4 border-black rounded-b-3xl rounded-t-3xl p-2 lg:rounded-b-full'>
              <h4 className='font-semi-bold underline text-xl pt-3'>Backend</h4>
              <img className='lg:h-60 object-contain lg:w-9/12 pb-9' src={backendDiag} alt="Backend diagram" />
            </div> */}
            <img className='rounded-full w-2/3' src={profilePic} alt="Steviggio's profile picture" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Home;