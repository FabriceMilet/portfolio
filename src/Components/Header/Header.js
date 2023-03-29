import './Header.scss'

export default function Header({className, targetAboutMe, targetProjects, targetContact, setheaderScrolled, setContactHover, setProjectsHover}) {
  const handleClickAboutMe = (event) => {
    event.preventDefault();
    targetAboutMe.current.scrollIntoView({ behavior: "smooth" });
    setheaderScrolled(true)
  };
  const handleClickProjects = (event) => {
    event.preventDefault();
    targetProjects.current.scrollIntoView({ behavior: "smooth" });
    setheaderScrolled(true)
    setProjectsHover(true)
  };
  const handleClickContact = (event) => {
    event.preventDefault();
    targetContact.current.scrollIntoView({ behavior: "smooth" });
    setheaderScrolled(true)
    setContactHover(true)
  };

  return (
    <div className={className}>
      <button className="Header-button" onClick={handleClickAboutMe}>à propos</button>
      <button className="Header-button" onClick={handleClickProjects}>mes projets</button>
      <button className="Header-button" onClick={handleClickContact}>contact</button>
      <button className="Header-button">CV</button>
    </div>
  )
};