import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <header >
      <nav className="flex-col md:flex-row md:fixed w-full z-50 top-0 drop-shadow-md border-b border-gray-300 bg-white md:h-20 flex justify-start items-center h-fit">
        <div className="w-2/6 pb-3 flex justify-center items-center">
          <Link to="/body" href="" className="font-bold text-4xl">
            <h1 className="steviggio-title">Stevigg<span className="relative bottom-2 left-1 text-2xl">io</span></h1>
          </Link>
        </div>
        <div className=" lg:w-4/6 text-xl flex justify-center items-center gap-10 md:gap-20">
          <a href="#body-section" className="nav-link">Accueil</a>
          <a href="#about-section" className="nav-link">À propos</a>
          <a href="#projects-section" className="nav-link">Mes projets</a>
          <a href="#contact-section" className="nav-link">Me contacter</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
