import './Header.scss'

export default function Header({className}) {
  return (
    <div className={className}>
      <button className="Header-button">à propos</button>
      <button className="Header-button">mes projets</button>
      <button className="Header-button">contact</button>
      <button className="Header-button">CV</button>
    </div>
  )
};