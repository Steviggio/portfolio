import frontendDiag from '../../assets/Frontend/frontend.webp'
import backendDiag from '../../assets/Backend/backend.webp'
import React from "react";

const Body = () => {
  return (
    <>

      <section id="body-section" className='bg-home-blue'>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 h-screen mx-auto w-4/5 py-16">
          <div className="flex flex-col w-2/3 justify-center gap-5 text-left">
            <h3 className="pl-3 text-4xl md:text-6xl lg:text-8xl underline">Steviggio</h3>
            <p className="pl-3 md:text-3xl">Moi, c'est Steve et j'utilise React.js ainsi que Node.js pour créer des applications web.</p>
          </div>
          <div className=" flex flex-col w-1/2 items-center justify-center">
            {/* <h3 className='mt-2 text-2xl underline mb-3'>Skills tree</h3> */}
            <div className='my-2 w-96 h-fit md:h-72 md:w-10/12 flex flex-col justify-center border-4 border-black rounded-b-3xl rounded-t-3xl p-2 md:rounded-t-full'>
              <h4 className='font-semi-bold underline text-xl'>Frontend</h4>
              <img className='md:h-60 object-contain' src={frontendDiag} alt="Frontend diagram" />
            </div>
            <div className='my-3 w-96 h-fit md:h-72 md:w-10/12 flex flex-col justify-center items-center border-4 border-black rounded-b-3xl rounded-t-3xl p-2 md:rounded-b-full'>
              <h4 className='font-semi-bold underline text-xl pt-3'>Backend</h4>
              <img className='md:h-60 object-contain md:w-9/12 pb-9' src={backendDiag} alt="Backend diagram" />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Body;