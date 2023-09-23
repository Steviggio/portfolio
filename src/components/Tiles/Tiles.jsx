import React from "react";

const Tiles = ({datas}) => {

  return (
    <>
      {/* Tiles list */}
      <div className="flex flex-col w-2/6 gap-6 items-center p-5 bg-light-blue rounded-md shadow-md h-fit">
        <img className="h-fit w-full  rounded-xl shadow-sm" src="" alt="" />
        <div className='h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>
          <h5 className='underline text-xl'>Langages utilisés</h5>
          <ul className='flex gap-10 justify-center m-3'>{datas.map((item) => {
            return (
              <li key={item.key}><img className='w-20' src={item.iconUrl} /></li>
            )
          })}</ul>
        </div>
      </div>
    </>
  )
}

export default Tiles;