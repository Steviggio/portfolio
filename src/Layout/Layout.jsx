import React, { useRef } from "react";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import About from '../pages/About/About';
import Projects from "../pages/Projects/Projects";
import Footer from "./Footer/Footer";

const Layout = () => {
  
  const contactSectionRef = useRef(null);

  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <Header scrollToContactSection={scrollToContactSection} />
      <main className="rounded-b-xl">
        <Home />
        <About />
        <Projects />
      </main>
      <Footer contactSectionRef={contactSectionRef} />
    </>
  );
};

export default Layout;
