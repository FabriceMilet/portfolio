import './Header.scss'


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
  const handleClickCV = (event) => {
    event.preventDefault();
    window.scroll(0, 6000);
    setheaderScrolled(true)
    setContactHover(true)
  };

  return (
    <div className={className}>
      <button className="Header-button" onClick={handleClickAboutMe}>à propos</button>
      <button className="Header-button" onClick={handleClickProjects}>mes projets</button>
      <button className="Header-button" onClick={handleClickContact}>contact</button>
      <button className="Header-button" onClick={handleClickCV}>CV</button>
    </div>
  )
  })

export default Header;