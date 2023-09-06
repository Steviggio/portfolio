import React from "react";
import './App.css'
import { Link } from "react-router-dom";



const App = () => {
  return (
    <>
      <div>
        <section className="flex flex-col">
          <p className="font-bold bg-gray-300"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae asperiores reprehenderit excepturi fugiat libero at
            voluptatem sapiente autem fuga reiciendis?</p>
          <Link to="/header">Header</Link>
          <Link to="/body">Body</Link>
          <Link to="/footer">Footer</Link>
        </section>
      </div>
    </>
  )
}

export default App;