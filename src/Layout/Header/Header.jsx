import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
    <header className="h-20">
      <nav
        className={`flex-col md:flex-row lg:fixed w-full z-10 bg-white md:h-20 flex justify-evenly py-2 md:py-0  
        ${scrolled ? " drop-shadow-sm duration-150" : ""
          }`}
      >
        <Link to="/" href="/" className="w-1/3 pb-3 flex cursor-default items-center">
          <div>
            <h1 className={`transition transform duration-[250ms] steviggio-title cursor-pointer font-bold text-4xl 
            ${scrolled ? "-translate-y-20 duration-[250ms]" : ""
              }`}

            >Stevigg<span className="relative bottom-2 left-[0.20rem] text-2xl">io</span></h1>
            <a href="" className={`absolute top-7 ${scrolled ? "transition-opacity transform ease-in duration-200" : "transition-opacity transform ease-in duration-200 opacity-0 "}`}>Lien</a>
          </div>
        </Link>
        <h1 className={`my-auto transition transform duration-[250ms] ${scrolled ? '' : ' -translate-y-20 duration-[250ms]'} steviggio-title cursor-pointer font-bold text-4xl 
`}
        >Stevigg<span className="relative bottom-2 left-[0.20rem] text-2xl">io</span></h1>
        <div className="lg:w-1/3 lg:text-lg flex justify-end items-center gap-10 md:gap-11 ">
          <button>français</button>
          <a href="#contact-section" className="nav-link">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
