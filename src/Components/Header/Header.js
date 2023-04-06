import './Header.scss'
import cvPdf from "../../pdf/CV_FMilet.pdf"

const Header = (({ className, setContactColor, targetAboutMe, targetProjects, targetContact, setheaderScrolled, setContactHover, setProjectsHover, projectsColor, setAboutMeColor }) => {

  const handleClickAboutMe = (event) => {
    event.preventDefault();
    targetAboutMe.current.scrollIntoView({ behavior: "smooth" });
    setheaderScrolled(true)
    if (projectsColor === 'grayish' ){setAboutMeColor('grayish')}
    if (projectsColor === 'gray' ){setAboutMeColor('gray')}
  };
  const handleClickProjects = (event) => {
    event.preventDefault();
    targetProjects.current.scrollIntoView({ behavior: "smooth" });
    setheaderScrolled(true)
    setProjectsHover(true)
    if (projectsColor === 'grayish' ){setContactColor('grayish')}
  };
  const handleClickContact = (event) => {
    event.preventDefault();
    targetContact.current.scrollIntoView({ behavior: "smooth" });
    setheaderScrolled(true)
    setContactHover(true)
  };

  return (
    <div className={className}>
      <button className="Header-button" onClick={handleClickAboutMe}>À propos</button>
      <button className="Header-button" onClick={handleClickProjects}>Mes projets</button>
      <button className="Header-button" onClick={handleClickContact}>Contact</button>
      <a className="Header-button" href={cvPdf} target="_blank" rel="noreferrer">CV</a>
    </div>
  )
  })

export default Header;