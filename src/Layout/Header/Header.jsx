import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import githubLogo from "../../assets/github-mark/github-mark.webp"

const Header = ({ scrollToContactSection }) => {

  const topRef = useRef(null);
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={topRef} className=" md:h-20">
      <nav
        className={`flex-col items-center md:flex-row lg:fixed w-full z-10 bg-white md:h-20 flex md:justify-evenly py-2 md:py-0  
        ${scrolled ? " xl:drop-shadow-sm xl:duration-150" : ""
          }`}
      >
        <div className="w-1/3 mx-auto md:mx-0 pb-3 flex cursor-default items-center">
          <div>
            <h1 className={`absolute top-5 lg:transition lg:transform lg:duration-[250ms] steviggio-title cursor-pointer font-bold text-4xl 
            ${scrolled ? "lg:-translate-y-20 lg:duration-[250ms]" : ""
              }`}

            >Stevigg<span className="relative bottom-2 left-[0.20rem] text-2xl">io</span></h1>
            <a href="https://github.com/Steviggio" target="_blank" className={`invisible lg:visible lg:absolute lg:top-5 
            ${scrolled ? "lg:transition-opacity lg:transform xl:ease-in lg:duration-200" : "lg:transition-opacity lg:transform lg:ease-in lg:duration-200 opacity-0 "}`}>
              <img src={githubLogo} className="w-[45px] h-[45px]" alt="Github logo" /> </a>
          </div>
        </div>
        <Link onClick={scrollToTop}>
          <h1 className={`invisible lg:visible my-auto lg:transition lg:transform lg:duration-[250ms] ${scrolled ? '' : ' lg:-translate-y-20 lg:duration-[250ms]'} steviggio-title cursor-pointer font-bold text-4xl 
`}
          >Stevigg<span className="relative bottom-2 left-[0.20rem] text-2xl">io</span></h1>
        </Link>
        <div className="lg:w-1/3 lg:text-lg flex justify-end items-center gap-10 md:gap-11 invisible absolute md:visible md:relative">
          <button onClick={scrollToContactSection} className="nav-link cursor-pointer">Contact</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
