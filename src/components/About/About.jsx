const About = () => {
  return (
    <section>
      <div className="bg-green-background">
        <h2 className="my-16 text-6xl flex ml-16 w-fit border-r-8 border-black border-b-8 pr-1 drop-shadow-md skew-x-2 text-beige-background">About Myself</h2>
        <p className="p-3 text-2xl text-left text-beige-background">
          Moi, c'est Steve, surnommé
          <h4 className="my-10 inline-flex ml-2 text-5xl">Stevigg<span className="text-xl">io</span></h4>. <br />Je crée des applications
          dynamique et responsive avec
          React.js
          et officie en tant que développeur Backend avec Node.js.

          Ancrée depuis mon enfance dans la culture web, j'ai décidé de m'immerger pleinement dans celui-ci
          en devenant développeur web.
        </p>
      </div>
    </section>
  )
}

export default About; 