import React from "react";
import SocialData from "../../Data/socials";

const Footer = () => {
  const datas = SocialData;
  return (
    <footer id="contact-section" className="relative shadow-inner flex flex-col bg-light-blue pt-6 h-max">
      {/* <h4 className="text-4xl py-10 w-64 mx-auto border-t-4 border-black pt-0 text-left">Me contacter</h4> */}
      <div className=" flex flex-col md:flex-row justify-between items-center h-full w-full px-10 gap-7">

        <div className="flex flex-col px-2 md:px-10 justify-center md:items-start bg-footer-blue rounded-md py-10 w-full md:w-3/4 gap-3 ">
          <h3 className="text-3xl font-bold text-white mb-3 underline underline-offset-4">Contactez-moi</h3>
          <p className="text-lg text-center md:flex md:gap-5 md:items-center md:text-justify">Vous pouvez me contacter via :
            <a className="text-lg font-bold rounded-lg" href="mailto:steviggio@gmail.com" type="email">steviggio@gmail.com</a></p>
          <p className="text-lg text-center md:text-left">Également en prenant contact via les réseaux présent dans mes <span className="font-bold ">"Liens utiles".</span></p>
        </div>


        <div className="flex flex-col justify-center items-center shadow-md py-2 bg-footer-blue gap-10 rounded-md w-full lg:w-2/4 lg:mr-10 lg:p-8">
          <h4 className="text-2xl text-white underline underline-offset-4">Liens utiles</h4>
          <div className="flex lg:gap-5 pb-5">
            {datas.map((item, index) => {
              return (
                <a key={index} className=" bg-white rounded-xl m-2  lg:m-4 p-2 hover:scale-125 duration-300" href={item.link} target="_blank"><img className="h-[35px]" src={item.icon} alt={`${item.platform} logo`} /></a>)
            })}
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-14 mt-10 text-white flex items-center justify-center">
        {/* Lien à rajouter */}
        <a href="">Steviggio.com </a>
      </div>
    </footer>
  )
}

export default Footer