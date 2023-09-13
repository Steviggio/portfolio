const About = () => {
  return (
    <section className="h-full bg-green-background ">
      <div className="flex flex-col py-10 h-max w-11/12 mx-auto">
        <h2 className="my-8 text-6xl flex ml-16 w-fit border-r-8 border-black border-b-8 pr-1 drop-shadow-xl skew-x-2 text-beige-background">À propos</h2>
        <p className="leading-relaxed px-8  text-xl w-3/5 text-left text-beige-background">
          Moi, c'est Steve, surnommé
          <h4 className="my-10 inline-flex ml-2 text-5xl">Steviggio</h4>. <br />Je crée des applications
          dynamique et responsive avec
          React.js
          et officie en tant que développeur Backend avec Node.js.

          Ancrée dans la culture web depuis mon enfance, j'ai décidé de m'immerger pleinement dans celle-ci
          en devenant développeur web.
        </p>
      </div>
    </section>
  )
}

export default About; 