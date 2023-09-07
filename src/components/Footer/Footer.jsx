import { Form } from "react-router-dom";
import githubLogo from "../../assets/github-mark/github-mark.png";
import twitterLogo from "../../assets/twitter/logo-black.png";
import linkedinLogo from "../../assets/LinkedIn-Logos/LI-In-Bug.png";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-back-beige rounded-xl w-full">
      <div className="h-80">
        <div className="h-full w-full flex flex-row justify-center items-center ">
          <div className=" flex flex-col h-full w-3/4">
            <div className="flex flex-col h-4/6 items-start pl-5 pt-5">
              <h3 className="text-4xl font-bold text-brown-font mb-3">Contact me </h3>
              <p className="text-2xl ">Via email : <a href="mailto:steviggio@gmail.com" type="email">steviggio@gmail.com</a></p>
              <p className="text-2xl">Via this contact form :</p>
            </div>
            <div className="flex flex-row w-full justify-center items-center gap-28 h-1/4">
              <a className="hover:scale-125 duration-300" href="https://www.linkedin.com/in/stevemothmora/" target="_blank"><img className="h-14" src={githubLogo} alt="" /></a>
              <a className="hover:scale-125 duration-300" href="https://github.com/Steviggio" target="_blank"><img className="h-14" src={twitterLogo} alt="" /></a>
              <a className="hover:scale-125 duration-300" href=""><img className="h-14" src={linkedinLogo} alt="Linkedin Logo" /></a>
            </div>
          </div>
          <Form className="flex flex-col h-full w-2/6 justify-center items-center " method="post" action="">
            <label className="text-xl font-bold text-brown-font" htmlFor="email">Email</label>
            <input className="border-2 w-3/4 border-black focus:outline-none rounded-lg " type="text" name='email' />
            <label className="text-xl font-bold text-brown-font" htmlFor="message">Message</label>
            <input className="h-28  w-3/4 border-2 border-black focus:outline-none rounded-lg " type="text" name="message" />
            <button className="mt-2 w-2/4 bg-lime-700 rounded-md hover:scale-110 duration-200 font-bold" type="submit">Create</button>
          </Form>
        </div>
      </div>
    </footer>
  )
}

export default Footer