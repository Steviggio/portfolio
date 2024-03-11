import React from "react";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import About from '../pages/About/About';
import Projects from "../pages/Projects/Projects";
import Footer from "./Footer/Footer";

const Layout = () => {

  return (
    <>
    <meta name="description" content="Steve Mothmora's portfolio, JS developer using React.js / Node.js to develop  " />
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
