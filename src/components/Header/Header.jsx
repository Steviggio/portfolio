
const Header = () => {
  return (
    <>
      <nav className="bg-back-beige h-20 flex justify-start">
        <div className="w-2/6 flex justify-center items-center">
          <a href="" className="font-bold text-3xl">
            <h1>Stevigg<span className="relative top- text-xs">io</span></h1>
          </a>
        </div>
        <div className="w-4/6 text-xl flex justify-center items-center gap-20">
          <a href="" className="nav-link ">About</a>
          <a href="" className="nav-link ">My projects</a>
          <a href="" className="nav-link ">Blog</a>
          <a href="" className="nav-link ">Contact</a>
        </div>
      </nav>
    </>
  )
}

export default Header