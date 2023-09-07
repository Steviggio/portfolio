import frontendDiag from '../../assets/Frontend/Frontend.png'
import backendDiag from '../../assets/Backend/Backend.drawio.png'

const Body = () => {
  return (
    <>
      <main>
        <div className="flex ">
          <div className="flex flex-col w-1/2 justify-center gap-5 text-left">
            <h3 className="pl-3 text-7xl underline">Steviggio</h3>
            <p className="pl-3  text-2xl">Hey, i'm Steve and i am a React.js / Node.js web developper</p>
          </div>
          <div className=" flex flex-col w-1/2 items-center justify-center">
            <h3 className='text-2xl underline mb-3'>My skills</h3>
            <div className='h-72 w-9/12 flex flex-col justify-center border rounded-t-xl'>
              <h4 className='font-semi-bold underline text-lg'>Frontend</h4>
              <img className='h-60 object-contain' src={frontendDiag} alt="" />
            </div>
            <div className='h-72 w-9/12 flex flex-col justify-center border rounded-b-xl'>
              <h4 className='font-semi-bold underline text-lg'>Backend</h4>
              <img className='h-60 object-contain pt-2' src={backendDiag} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Body