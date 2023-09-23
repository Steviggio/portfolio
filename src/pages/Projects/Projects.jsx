import mvgHome from '../../assets/projects/MVG-home.png';
import kasaHome2 from "../../assets/projects/Kasa-home-focus.png";
import bookiImg from "../../assets/projects/Booki.png";
import { kasaIcons, bookiIcons, mvgIcons, iconsList } from '../../Data/icons';
import Hover from '../../components/Hover/Hover';
import React from "react";



const Projects = () => {
  const booki = bookiIcons;
  const kasa = kasaIcons;
  const mvg = mvgIcons;

  return (
    // Section containing project tiles
    <section id="projects-section" className="bg-white lg:h-fit flex flex-col justify-center my-10">

      <h3 className='text-5xl mb-10 underline'>Mes projets</h3>
      {/* Tiles Container */}
      <div className="flex-col lg:flex-row flex-wrap md:w-fit justify-center flex pt-6 gap-10 h-fit px-8">

        {/* Tiles list */}
        <div className="flex relative flex-col lg:w-4/12 xl:w-3/12 gap-6 items-center p-5 bg-light-blue rounded-xl shadow-md h-fit">
          <figure className='relative'>
            <img className="h-fit rounded-xl shadow-sm" src={bookiImg} alt="" />
            <figcaption className='absolute bg-black bg-opacity-60 top-0 text-white flex justify-center items-center w-full h-full rounded-xl opacity-0 hover:opacity-100'>
              <div className='relative top-0 left-0'>
                <Hover name={"Booki"} />
              </div>
            </figcaption>
          </figure>
          <div className='h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <ul className='flex gap-10 justify-center m-3'>{booki.map((item, index) => {
              return (
                <li key={index}><img className='w-16' src={item.iconUrl} /></li>
              )
            })}</ul>
          </div>
          <p>Lien vers le Github : <a className='font-bold' target='_blank' href="https://github.com/Steviggio/Booki">Booki</a></p>
        </div>


        <div className="flex relative flex-col items-center lg:w-4/12 xl:w-3/12 gap-6 p-5 bg-light-blue rounded-xl shadow-md h-fit">
          <figure className='relative'>
            <img className="h-fit object-cover rounded-xl" src={kasaHome2} alt="Kasa homepage" />
            <figcaption className='text-white absolute bg-black bg-opacity-60 top-0 flex justify-center items-center w-full h-full rounded-xl opacity-0 hover:opacity-100'>
              <div className='relative top-0 left-0'>
                <Hover name={"Kasa"} />
              </div>
            </figcaption>
          </figure>
          <div className=' h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <ul className='flex gap-10 justify-center items-center m-3'>{kasa.map((item, index) => {
              return (
                <li className='flex ' key={index}><img className='w-16' src={item.iconUrl} /></li>
              )
            })}</ul>

          </div>
          <p>Lien vers le Github : <a className='font-bold' target='_blank' href="https://github.com/Steviggio/Kasa">Kasa</a></p>
        </div>


        <div className=" flex relative flex-col lg:w-4/12 xl:w-3/12 gap-6 items-center  p-5 bg-light-blue rounded-xl shadow-md h-fit">
          <figure className='relative'>
            <img className="h-fit object-contain rounded-xl" src={mvgHome} alt="MVG homepage" />
            <figcaption className='absolute bg-black bg-opacity-60 top-0 text-white flex justify-center items-center w-full h-full rounded-xl opacity-0 hover:opacity-100'>
              <div className='relative top-0 left-0'>
                <Hover name={"Mon Vieux Grimoire"} />
              </div>
            </figcaption>
          </figure>
          <div className='h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <ul className='flex gap-10 justify-center items-center m-3'>{mvg.map((item, index) => {
              return (
                <li className='flex' key={index}><img className='w-16 h-fit' src={item.iconUrl} /></li>
              )
            })}</ul>
          </div>
          <p>Lien vers le Github : <a className='font-bold' target='_blank' href="https://github.com/Steviggio/MVG_backend">Mon vieux Grimoire</a></p>
        </div>

      </div>
    </section>
  )
}

export default Projects;