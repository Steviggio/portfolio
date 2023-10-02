import React, { useRef } from "react";
import Header from "./Header/Header";
import Body from "../pages/Body/Body";
import About from '../pages/About/About';
import Projects from "../components/Projects/Projects";
import Footer from "./Footer/Footer";

const Layout = () => {

  return (
    <>
      <Header />
      <main>
        <Body />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
