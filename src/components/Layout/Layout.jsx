import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Body from "../Body/Body"


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout