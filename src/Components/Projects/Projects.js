import './Projects.scss'
import getBalanced from '../../img/getBalanced.png'
import portfolio from '../../img/portfolio.png'
import getBalancedBack from '../../img/getBalancedBack.png'
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
          <h3>Get Balanced (front)</h3>
          <p className="Projects-card__text">Partie front d'une application qui aide au partage des tâches ménagères dans un foyer </p>
          <a href='https://github.com/FabriceMilet/GetBalanced-front' className="Projects-card__link" target="_blank">Cliquez ici pour en savoir plus</a>
        </section>
      </div>
      
    
      <div className="Projects-card">
        <div className="Projects-card__img">
          <img src={getBalancedBack} alt="Project getBalanced"/>
        </div>
        <section className="Projects-card__info">
          <h3>Get Balanced (back)</h3>
          <p className="Projects-card__text">Construction de l'API d'une application qui aide au partage des tâches ménagères dans un foyer </p>
          <a href='https://github.com/FabriceMilet/GetBalanced-back' className="Projects-card__link" target="_blank">Cliquez ici pour en savoir plus</a>
        </section>
      </div>
     
      <div className="Projects-card">
        <div className="Projects-card__img">
          <img src={portfolio} alt="Project getBalanced"/>
        </div>
        <section className="Projects-card__info">
          <h3>Mon portfolio</h3>
          <p className="Projects-card__text">Construction de ce portfolio, avec REACT, SCSS (et un peu de three.js pour le fun) </p>
          <a href='https://github.com/FabriceMilet/portfolio' className="Projects-card__link" target="_blank">Cliquez ici pour en savoir plus</a>
        </section>
      </div>
      
    </div>
  </div>
  )
});
export default Projects;