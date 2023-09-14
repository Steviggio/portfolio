import { Form } from "react-router-dom";
import SocialData from "../../../Data/socials";

const Footer = () => {
  const datas = SocialData;
  return (
    <footer id="contact-section" className="relative shadow-inner flex flex-col bg-light-blue pt-6 h-max">
      <h4 className="text-4xl py-10 w-64 mx-auto border-t-4 border-black pt-0 text-left">Me contacter</h4>
      <div className=" flex flex-row justify-between items-center h-full w-full px-16">
        <div className="h-fit w-2/3 flex flex-row ">
          <div className="flex flex-col px-10 justify-center items-start bg-footer-blue rounded-md py-10 w-2/4 gap-2 ">
            <h3 className="text-3xl font-bold text-white mb-3">Contactez-moi</h3>
            <p className="text-xl ">Via email : <a href="mailto:steviggio@gmail.com" type="email">steviggio@gmail.com</a></p>
            <p className="text-left text-xl">Ou en remplissant ce formulaire :</p>
          </div>
          <Form className="flex relative flex-col justify-center items-center w-full" method="post" action="">
            {/* <label className="text-xl font-bold text-black" htmlFor="email" >Email</label> */}
            <input className="border-2 h-8 w-6/12 focus:outline-none rounded-md mb-1" type="text" name='email' placeholder="john@doe.fr" />
            {/* <label className="text-xl font-bold text-black" htmlFor="message" >Message</label> */}
            <input className="h-28 w-fitflex relative top-0 w-6/12 border-2 focus:outline-none rounded-md overflow-hidden" type="text" name="message" placeholder="De quoi souhaitez vous discutez ?" />
            <button className="mt-2 w-2/4 bg-dark-grey text-white rounded-md hover:scale-110 duration-200 font-bold" type="submit">Create</button>
          </Form>
        </div>
        <div className="flex flex-col justify-center items-center shadow-md bg-footer-blue gap-16 rounded-md w-fit mr-10 p-8">
          {/* <a className="hover:scale-125 duration-300" href="https://github.com/Steviggio" target="_blank"><img className="h-14" src={githubLogo} alt="" /></a>
              <a className="hover:scale-125 duration-300" href="" target="_blank"><img className="h-12" src={twitterLogo} alt="" /></a>
              <a className="hover:scale-125 duration-300" href="https://www.linkedin.com/in/stevemothmora/" target="_blank"><img className="h-12"  src={linkedinLogo} alt="Linkedin Logo" /></a> */}
          <h4 className="text-2xl text-white ">Liens utiles</h4>
          <div className="flex gap-16">
            {datas.map((item, index) => {
              return (
                <a key={index} className=" bg-white rounded-xl m-4 p-2 hover:scale-125 duration-300" href={item.link} target="_blank"><img className="h-12" src={item.icon} alt={`${item.platform} logo`} /></a>)
            })}
          </div>
        </div>
      </div>
      <div className="bg-black w-screen h-14 mt-10 text-white flex items-center justify-center">
        {/* Lien à rajouter */}
        <a href="">Steviggio.com </a>
      </div>
    </footer>
  )
}

export default Footer