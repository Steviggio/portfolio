import React from "react";
import SocialData from "../../Data/socials";
import Mail from "../../assets/icons/mail/white-mail-48.png"


const Footer = () => {
  const datas = SocialData;
  return (
    <footer id="contact-section" className="relative shadow-inner flex flex-col bg-light-blue pt-6 h-max">
      {/* <h4 className="text-4xl py-10 w-64 mx-auto border-t-4 border-black pt-0 text-left">Me contacter</h4> */}
      <div className=" flex flex-col md:flex-row items-center h-full w-full px-10">

        <div className="flex flex-col px-2 md:px-10 justify-center shadow-md md:items-start rounded-md py-6 w-fit md:ml-auto gap-3 bg-white">
          <h3 className="text-lg mb-3 underline underline-offset-4">Contact</h3>
          <div className="flex gap-2">
            <a className="flex justify-center gap-2 items-center text-sm rounded-lg focus:outline-0 hover:outline-0 hover:scale-110 duration-300"
              href="mailto:steviggio@gmail.com" type="email" >Via mail<img src={Mail} className="w-6 h-6" alt="" /></a>
            <a className="flex justify-center text-white gap-2 items-center text-sm rounded-lg focus:outline-0 hover:outline-0 bg-[#0766AD] hover:scale-110 duration-300"
              href="https://www.linkedin.com/in/stevemothmora/" target="_blank" type="email" >Via InMail</a>
          </div>
        </div>


        <div className="flex flex-col justify-center items-center py-2 gap-1 rounded-md w-fit md:mr-auto lg:w-fit md:p-8 ">
          {/* <h4 className="text-lg underline underline-offset-4">Liens utiles</h4> */}
          <div className="flex pb-2 md:pb-5">
            {datas.map((item, index) => {
              return (
                <a key={index} className="bg-white border rounded-xl m-2 p-2 hover:scale-125 duration-300" href={item.link} target="_blank"><img className="h-[40px]" src={item.icon} alt={`${item.platform} logo`} /></a>)
            })}
          </div>
        </div>
      </div>

      <div className="bg-black w-full h-fit mt-10 text-white flex items-center justify-center flex-col">
        <div className="font-thin my-5 text-sm flex w-[400px] h-16 items-center">
          Ce site a été réalisé à la main et il est déployé avec Nginx sur un VPS sous Ubuntu.
        </div>
        <a href="/" className="my-3 pt-1">Steviggio.fr </a>
      </div>
    </footer>
  )
}

export default Footer