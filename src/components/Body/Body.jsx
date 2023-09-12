import frontendDiag from '../../assets/Frontend/Frontend.png'
import backendDiag from '../../assets/Backend/Backend.png'

const Body = () => {
  return (
    <>
      <main>
        <section>
          <div className="flex ">
            <div className="flex flex-col w-1/2 justify-center gap-5 text-left">
              <h3 className="pl-3 text-7xl underline">Steviggio</h3>
              <p className="pl-3  text-2xl">Hey, i'm Steve and i use React.js / Node.js to develop websites.</p>
            </div>
            <div className=" flex flex-col w-1/2 items-center justify-center">
              <h3 className='mt-2 text-2xl underline mb-3'>Skills tree</h3>
              <div className='my-2 h-72 w-9/12 flex flex-col justify-center border rounded-t-full'>
                <h4 className='font-semi-bold underline text-xl'>Frontend</h4>
                <img className='h-60 object-contain' src={frontendDiag} alt="Frontend diagram" />
              </div>
              <div className='my-3 h-72 w-9/12 flex flex-col justify-center items-center border rounded-b-full'>
                <h4 className='font-semi-bold underline text-xl pt-3'>Backend</h4>
                <img className='h-60 object-contain w-9/12 pb-9' src={backendDiag} alt="Backend diagram" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Body;