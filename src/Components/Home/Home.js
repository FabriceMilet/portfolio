import './Home.scss'
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Home({className, targetContact, setContactHover, setheaderScrolled}) {
  const handleClickContact = (event) => {
    event.preventDefault();
    targetContact.current.scrollIntoView({ behavior: "smooth" });
    setheaderScrolled(true)
    setContactHover(true)
  };
  return (
    <div className={className}>
      <div className="Home-container">
            <span>Fabrice Milet</span> 
            <span>développeur Web & Mobile</span>
            <span>Bienvenue sur mon portfolio</span>
            <span className="Home-container__bottom">
            <button className="Home-button" onClick={handleClickContact}>Contactez moi</button>
            <FaArrowAltCircleDown size={40} />
            </span>
      </div>
    </div>
  )
};