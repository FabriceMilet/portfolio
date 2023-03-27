import './Home.scss'

export default function Home({className}) {
  return (
    <div className={className}>
      <div className="Home-container">
            <span>Fabrice Milet</span> 
            <span>développeur Web & Mobile</span>
            <span>Bienvenue sur mon portfolio</span>
            <span>
            <button className="Home-button">Contactez moi</button>
            </span>
      </div>
    </div>
  )
};