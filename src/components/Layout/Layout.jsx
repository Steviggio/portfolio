import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Body from "../../pages/Body/Body"
import About from '../../pages/About/About'


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Body />
      <About />
      <Footer />
    </>
  )
}

export default Layout