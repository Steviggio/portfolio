import mvgHome from '../../assets/projects/MVG-home.png';
import kasaHome2 from "../../assets/projects/Kasa-home-focus.png";
import bookiImg from "../../assets/projects/Booki.png";
import { kasaIcons, bookiIcons, mvgIcons, iconsList } from '../../Data/icons';


const Projects = () => {
  const booki = bookiIcons;
  const kasa = kasaIcons;
  const mvg = mvgIcons;

  return (
    // Section containing project tiles
    <section className="bg-back-beige h-fit py-10">

      <h3 className='text-5xl mb-10 underline'>Mes projets</h3>
      {/* Tiles Container */}
      <div className="w-full justify-center flex pt-6 gap-10 h-fit px-8">

        {/* Tiles list */}
        <div className="flex flex-col w-2/6 gap-6 items-center p-5 bg-light-blue rounded-md shadow-md h-fit">
          <img className="h-fit w-full  rounded-xl shadow-sm" src={bookiImg} alt="" />
          <div className='h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <ul className='flex gap-10 justify-center m-3'>{booki.map((item) => {
              return (
                <li key={item.key}><img className='w-20' src={item.iconUrl} /></li>
              )
            })}</ul>
          </div>
        </div>


        <div className="flex flex-col items-center w-2/6 gap-6 p-5 bg-light-blue rounded-md shadow-md h-fit">
          <img className="h-fit object-cover rounded-xl" src={kasaHome2} alt="" />
          <div className=' h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <ul className='flex gap-10 justify-center items-center m-3'>{kasa.map((item) => {
              return (
                <li className='flex ' key={item.key}><img className='w-20' src={item.iconUrl} /></li>
              )
            })}</ul>

          </div>
        </div>


        <div className=" flex flex-col  w-2/6 gap-6 items-center  p-5 bg-light-blue rounded-md shadow-md h-fit">
          <img className="h-96 object-contain rounded-xl" src={mvgHome} alt="" />
          <div className='h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <ul className='flex gap-10 justify-center items-center m-3'>{mvg.map((item) => {
              return (
                <li className='flex' key={item.key}><img className='w-20 h-fit' src={item.iconUrl} /></li>
              )
            })}</ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects;