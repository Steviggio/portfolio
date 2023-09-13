import mvgHome from '../../assets/projects/MVG-home.png'
import kasaHome2 from "../../assets/projects/Kasa-home-focus.png"

const Projects = () => {
  return (
    // Section containing project tiles
    <section className="bg-back-beige border-4 border-black h-fit">
      {/* Tiles Container */}
      <div className="w-full justify-start flex gap-2  h-fit ">

        {/* Tiles list */}
        <div className=" h-full flex flex-col w-1/3 gap-6">
          <img className="h-full rounded-xl" src={kasaHome2} alt="" />
          <div className=' h-2/6  flex flex-col justify-center pr-4'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <li></li>
          </div>
        </div>

        <div className=" h-full flex flex-col w-1/3 gap-6">
          <img className="h-2/6 w-full rounded-xl" src={mvgHome} alt="" />
          <div className='h-full flex flex-col justify-center pr-4'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <li></li>
          </div>
        </div>

        <div className=" h-full flex flex-col w-1/3 gap-6">
          <img className="h-2/6  rounded-xl" src={kasaHome2} alt="" />
          <div className='h-full flex flex-col justify-center pr-4'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <li></li>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects;