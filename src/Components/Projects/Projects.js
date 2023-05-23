import './Projects.scss'
import getBalanced from '../../img/getBalanced.png'
import portfolio from '../../img/portfolio.png'
import trouveLaCompo from '../../img/trouveLaCompo.png'
import { forwardRef } from 'react';

const Projects = forwardRef(({ className, projectsHover}, targetProjects ) => {

  return (
    <div className={className} ref={targetProjects}>
      {projectsHover && <h1 className="Projects-title">
        <span>M</span>
        <span>e</span>
        <span>s</span>
        <span>p</span>
        <span>r</span>
        <span>o</span>
        <span>j</span>
        <span>e</span>
        <span>t</span>
        <span>s</span>
        </h1>}
    <div className="Projects-cards">
      
      <div className="Projects-card">
        <div className="Projects-card__img">
          <img src={getBalanced} alt="Project getBalanced"/>
        </div>
        <section className="Projects-card__info">
          <h3>Get Balanced</h3>
          <p className="Projects-card__text">Application qui aide au partage des tâches ménagères dans un foyer </p>
          <a href='https://github.com/FabriceMilet/GetBalanced-front' className="Projects-card__link1" target="_blank" rel="noreferrer">
          Aller voir le github</a>
          <a href='https://get-balanced.netlify.app/' className="Projects-card__link2" target="_blank" rel="noreferrer">
            Visiter le site</a>
       
        </section>
      </div>
      
    
      <div className="Projects-card">
        <div className="Projects-card__img">
          <img src={trouveLaCompo} alt="Project getBalanced"/>
        </div>
        <section className="Projects-card__info">
          <h3>Trouve la compo</h3>
          <p className="Projects-card__text">Application de jeu de foot, le but est de trouver la composition de matchs passés </p>
          <a href='https://github.com/FabriceMilet/quizFoot-front' className="Projects-card__link1" target="_blank" rel="noreferrer">
          Aller voir le github</a>
          <a href='https://trouve-la-compo.netlify.app/' className="Projects-card__link2" target="_blank" rel="noreferrer">
            Visiter le site</a>
        </section>
      </div>
     
      <div className="Projects-card">
        <div className="Projects-card__img">
          <img src={portfolio} alt="Project getBalanced"/>
        </div>
        <section className="Projects-card__info">
          <h3>Mon portfolio</h3>
          <p className="Projects-card__text">Construction de ce portfolio, avec REACT, SCSS (et un peu de three.js pour le fun) </p>
          <a href='https://github.com/FabriceMilet/portfolio' className="Projects-card__link2" target="_blank" rel="noreferrer">
          Aller voir le github</a>
        </section>
      </div>
      
    </div>
  </div>
  )
});
export default Projects;