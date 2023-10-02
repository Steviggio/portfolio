import mvgHome from '../../assets/projects/mvg-home.webp';
import kasaHome2 from "../../assets/projects/kasa.webp";
import bookiImg from "../../assets/projects/booki.webp";
import { kasaIcons, bookiIcons, mvgIcons, iconsList } from '../../Data/icons';
import Hover from '../Hover/Hover';
import React from "react";



const Projects = () => {
  const booki = bookiIcons;
  const kasa = kasaIcons;
  const mvg = mvgIcons;

  return (
    // Section containing project tiles
    <section id="projects-section" className="bg-white lg:h-fit flex flex-col justify-center my-10">

      <h3 className='text-5xl mb-10 underline'>Mes projets</h3>
      {/* Tiles Container */}
      <div className="flex-col lg:flex-row flex-wrap md:w-fit justify-center flex pt-6 gap-10 h-fit px-8">

        {/* Tiles list */}
        <div className="flex relative flex-col lg:w-4/12 xl:w-3/12 gap-6 items-center p-5 bg-light-blue rounded-xl shadow-md h-fit">
          <figure className='relative'>
            <img className="h-80 w-full rounded-xl shadow-sm" src={bookiImg} alt="" />
            <figcaption className='absolute bg-black bg-opacity-60 top-0 text-white flex justify-center items-center w-full h-full rounded-xl opacity-0 hover:opacity-100'>
              <div className='relative top-0 left-0'>
                <Hover name={"Booki"} />
              </div>
            </figcaption>
          </figure>
          <div className='text-left bg-white rounded-lg my-2 leading-8 pl-2'>
            <h5 className="pl-2 underline" >Problématique :</h5>
            <p className='text-sm'>Intégration d'une maquette en HTML/CSS pour un site de de réservation de logement</p>
            <h5 className="pl-2 underline">Les difficultées que j'ai rencontrées :</h5>
            <ul>
              <li className='text-sm'>- Découpage de la maquette pour effectuer l'intégration</li>
              <li className='text-sm'>- Intégration des éléments pour les différents formats</li>
            </ul>
            <h5 className='pl-2 underline'>Solutions:</h5>
            <p className='text-sm'>
              - J'ai appris à identifier les différentes parties d'une maquette afin de pouvoir développer proprement les éléments d'une application web.
            </p>
          </div>
          <div className='h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>

            <h5 className='underline text-xl'>Langages utilisés</h5>
            <ul className='flex gap-10 justify-center m-3'>{booki.map((item, index) => {
              return (
                <li key={index}><img className='w-16' src={item.iconUrl} alt={`${item.name} logo`} /></li>
              )
            })}</ul>
          </div>
          <p>Lien vers le Github : <a className='font-bold' target='_blank' href="https://github.com/Steviggio/Booki">Booki</a></p>
        </div>


        <div className="flex relative flex-col items-center lg:w-4/12 xl:w-3/12 gap-6 p-5 bg-light-blue rounded-xl shadow-md h-fit">
          <figure className='relative'>
            <img className="h-80 w-full object-cover rounded-xl" src={kasaHome2} alt="Kasa homepage" />
            <figcaption className='text-white absolute bg-black bg-opacity-60 top-0 flex justify-center items-center w-full h-full rounded-xl opacity-0 hover:opacity-100'>
              <div className='relative top-0 left-0'>
                <Hover name={"Kasa"} />
              </div>
            </figcaption>
          </figure>
          <div className='text-left bg-white rounded-lg my-2 leading-8 p-2'>
            <h5 className="pl-2 underline" >Problématique :</h5>
            <p className='text-sm'>Développer un site web de réservation avec le framework React.js</p>
            <h5 className="pl-2 underline">Les difficultées que j'ai rencontrées :</h5>
            <ul>
              <li className='text-sm'>- Création de composant indépendant prenant en compte des paramètres</li>
              <li className='text-sm'>- Routing de l'application</li>
              <li className='text-sm'>- Intégration d'animation en CSS</li>
            </ul>
            <h5 className='pl-2 underline'>Solutions:</h5>
            <p className='text-sm'>
              - Identifications des éléments prenant en compte des paramètres afin de les rendre réutilisables. <br />
              - Apprentissage du routing grâce à react-router. <br />
              - Développement d'une interface web en Sass.
            </p>
          </div>
          <div className=' h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <ul className='flex gap-10 justify-center items-center m-3'>{kasa.map((item, index) => {
              return (
                <li className='flex ' key={index}><img className='w-16' src={item.iconUrl} alt={`${item.name} logo`} /></li>
              )
            })}</ul>

          </div>
          <p>Lien vers le Github : <a className='font-bold' target='_blank' href="https://github.com/Steviggio/Kasa">Kasa</a></p>
        </div>


        <div className=" flex relative flex-col lg:w-4/12 xl:w-3/12 gap-6 items-center  p-5 bg-light-blue rounded-xl shadow-md h-fit">
          <figure className='relative'>
            <img className="h-80 w-full object-contain rounded-xl" src={mvgHome} alt="MVG homepage" />
            <figcaption className='absolute bg-black bg-opacity-60 top-0 text-white flex justify-center items-center w-full h-full rounded-xl opacity-0 hover:opacity-100'>
              <div className='relative top-0 left-0'>
                <Hover name={"Mon Vieux Grimoire"} />
              </div>
            </figcaption>
          </figure>
          <div className='text-left bg-white rounded-lg my-2 leading-8 pl-2'>
            <h5 className="pl-2 underline" >Problématique :</h5>
            <p className='text-sm'>Site de réservation de logement</p>
            <h5 className="pl-2 underline">Les difficultées que j'ai rencontrées :</h5>
            <ul>
              <li className='text-sm'>- Implémentation de schéma de données</li>
              <li className='text-sm'>- Mise en place d'un système d'authentification</li>
              <li className='text-sm'>- Intégration d'un système de gestion des fichiers utilisateurs</li>
            </ul>
            <h5 className='pl-2 underline'>Solutions:</h5>
            <p className='text-sm'>
              - J'ai appris à créer à partir de 0, un serveur ainsi qu'une API grâce à express.js. <br />
              - À effectuer des tests constants afin de pouvoir vérifier le bon état des routes configurées, ainsi qu'à exploiter Postman pour vérifier la bonne saisie du schéma de données ou la bonne intégration des middlewares au seins des reqûetes CRUD.
            </p>
          </div>

          <div>

          </div>
          <div className='h-fit w-fit flex flex-col justify-center pr-4 bg-white rounded-lg  shadow-md'>
            <h5 className='underline text-xl'>Langages utilisés</h5>
            <ul className='flex gap-10 justify-center items-center m-3'>{mvg.map((item, index) => {
              return (
                <li className='flex' key={index}><img className='w-16 h-fit' src={item.iconUrl} alt={`${item.name} logo`} /></li>
              )
            })}</ul>

          </div>
          <p>Lien vers le Github : <a className='font-bold' target='_blank' href="https://github.com/Steviggio/MVG_backend">Mon vieux Grimoire</a></p>
        </div>

      </div>
    </section>
  )
}

export default Projects;