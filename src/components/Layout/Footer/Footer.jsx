import { Form } from "react-router-dom";
import githubLogo from "../../../assets/github-mark/github-mark.png";
import twitterLogo from "../../../assets/twitter/logo-black.png";
import linkedinLogo from "../../../assets/LinkedIn-Logos/LI-In-Bug.png";
import SocialData from "../../../Data/socials";

const Footer = () => {
  const datas = SocialData;
  return (
    <footer id="contact-section" className=" bg-gray-300 px-10 py-6 rounded-b-md ">
      <div className="h-80">
        <div className="h-full w-full flex flex-row justify-between items-center ">
          <div className=" flex flex-row justify-between h-full w-full ">
            <div className="flex flex-col justify-center items-start bg-beige-background pl-5 pt-5 w-fit gap-2">
              <h3 className="text-3xl font-bold text-brown-font mb-3">Contact me </h3>
              <p className="text-xl ">Via email : <a href="mailto:steviggio@gmail.com" type="email">steviggio@gmail.com</a></p>
              <p className="text-left text-xl">Or through the following socials :</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-beige-background gap-16 w-1/2">
              {/* <a className="hover:scale-125 duration-300" href="https://github.com/Steviggio" target="_blank"><img className="h-14" src={githubLogo} alt="" /></a>
              <a className="hover:scale-125 duration-300" href="" target="_blank"><img className="h-12" src={twitterLogo} alt="" /></a>
              <a className="hover:scale-125 duration-300" href="https://www.linkedin.com/in/stevemothmora/" target="_blank"><img className="h-12"  src={linkedinLogo} alt="Linkedin Logo" /></a> */}
              <h4 className="bg-gray-200 text-2xl ">Here are my socials</h4>
              <div className="flex gap-28">
                {datas.map((item, index) => {
                  return (
                    <a key={index} className="hover:scale-125 duration-300" href={item.link} target="_blank"><img className="h-12" src={item.icon} alt={`${item.platform} logo`} /></a>)
                })}
              </div>
            </div>
          </div>
          <Form className="flex flex-col h-full w-2/6 border-4 justify-center items-center " method="post" action="">
            <label className="text-xl font-bold text-brown-font" htmlFor="email" >Email</label>
            <input className="border-2 w-3/4 border-black focus:outline-none rounded-lg" type="text" name='email' placeholder="john@doe.fr" />
            <label className="text-xl font-bold text-brown-font" htmlFor="message" >Message</label>
            <input className="h-28 flex text- w-3/4 border-2 border-black focus:outline-none rounded-sm overflow-hidden" type="text" name="message" placeholder="De quoi souhaitez vous discutez ?" />
            <button className="mt-2 w-2/4 bg-lime-700 rounded-md hover:scale-110 duration-200 font-bold" type="submit">Create</button>
          </Form>
        </div>
      </div>
    </footer>
  )
}

export default Footer