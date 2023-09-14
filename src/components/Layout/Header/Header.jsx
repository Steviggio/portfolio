import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <header>
      <nav className="sticky top-0 drop-shadow-md border-b border-gray-300 bg-back-beige h-20 flex justify-start">
        <div className="w-2/6 flex justify-center items-center">
          <Link to="/body" href="" className="font-bold text-4xl">
            <h1 className="steviggio-title">Stevigg<span className="relative bottom-2 left-1 text-2xl">io</span></h1>
          </Link>
        </div>
        <div className="w-4/6 text-xl flex justify-center items-center gap-20">
          <a href="#about-section" className="nav-link">À propos</a>
          <a href="#body-section" className="nav-link">Body</a>
          <a href="#projects-section" className="nav-link">Mes projets</a>
          <a href="#contact-section" className="nav-link">Me contactez</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
