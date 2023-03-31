import './AboutMe.scss'
import Logos from './Logos/Logos'
import { Canvas } from '@react-three/fiber'
import { forwardRef } from 'react';

const AboutMe = forwardRef(({ className}, targetAboutMe ) => {

  return (
    <div className={className} ref={targetAboutMe}>
      <div className="AboutMe-presentation">
        <div className="AboutMe-presentation__resume">
        Salut, je suis Fabrice, développeur web en <span>reconversion</span>. J'aime apprendre et relever 
        de nouveaux défis.
        Avec une rigueur professionnelle acquise lors de mes précédentes expériences professionnelles, notammant comme <span>formateur </span>
        ou <span>chef d'équipe</span> dans la fibre optique, je m'efforce toujours de produire un <span>travail de qualité</span>, 
        en gardant à l'esprit l'importance de la <span>satisfaction du client</span>. Je suis quelqu'un d'<span>autonome et efficace</span> dans mon travail.
        <span className="AboutMe-presentation__link"> Contactez moi</span>, je vous répondrai très rapidement !
        </div>
        <div className="AboutMe-presentation__skills">
          <h1><span>M</span><span>e</span><span>s</span>
           <span>c</span><span>o</span><span>m</span><span>p</span><span>é</span><span>t</span><span>e</span><span>n</span><span>c</span><span>e</span><span>s</span>
           </h1>
           <ul>
          <li>HTML, CSS, SASS, JavaScript, REACT, Node.JS, Express, SQL, PostgreSQL</li>
          <li>GIT / GitHub</li>
          <li>Méthodes agiles, SCRUM</li>
          </ul>
        </div>
      </div>
      <div className="AboutMe-canvas">
      <Canvas>
      <ambientLight />
      <Logos /> 
      </Canvas>
    </div>
    </div>
  )
  });
export default AboutMe;