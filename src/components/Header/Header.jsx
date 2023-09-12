import { Link } from "react-router-dom"


const Header = () => {
  return (
    <>
      <nav className="bg-back-beige h-20 flex justify-start">
        <div className="w-2/6 flex justify-center items-center">
          <a href="" className="font-bold text-4xl">
            <h1 className="steviggio-title">Stevigg<span className="relative bottom-2 left-1 text-2xl">io</span></h1>
          </a>
        </div>
        <div className="w-4/6 text-xl flex justify-center items-center gap-20">
          <Link to="/about" className="nav-link">About</Link>
          <a href="" className="nav-link ">My projects</a>
          <a href="" className="nav-link ">Blog</a>
          <a href="" className="nav-link ">Contact</a>
        </div>
      </nav>
    </>
  )
}

export default Header