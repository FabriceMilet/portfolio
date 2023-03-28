import './Projects.scss'
import getBalanced from '../../img/getBalanced.png'

export default function Projects({className, projectsHover}) {

  return (
    <div className={className}>
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
          <p>Application qui aide au partage des tâches ménagères dans un foyer </p>
          <a>Cliquez ici pour en savoir plus</a>
        </section>
      </div>
      
    
      <div className="Projects-card">
        <div className="Projects-card__img">
          <img src={getBalanced} alt="Project getBalanced"/>
        </div>
        <section className="Projects-card__info">
          <h3>Get Balanced</h3>
          <p>Application qui aide au partage des tâches ménagères dans un foyer </p>
          <a>Cliquez ici pour en savoir plus</a>
        </section>
      </div>
     
      <div className="Projects-card">
        <div className="Projects-card__img">
          <img src={getBalanced} alt="Project getBalanced"/>
        </div>
        <section className="Projects-card__info">
          <h3>Get Balanced</h3>
          <p>Application qui aide au partage des tâches ménagères dans un foyer </p>
          <a>Cliquez ici pour en savoir plus</a>
        </section>
      </div>
      
    </div>
  </div>
  )
};