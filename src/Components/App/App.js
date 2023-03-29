import './App.scss';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { useState, useRef } from 'react';
import Header from '../Header/Header';

export default function App() {
  // State qui va gérer le bgc des composants suivant le scroll
  const [homeColor, setHome] = useState('')
  const [aboutMeColor, setAboutMeColor] = useState('')
  const [projectsColor, setProjectsColor] = useState('')
  const [contactColor, setContactColor] = useState('')
  const [headerScrolled, setheaderScrolled] = useState(false)
  // State qui va gérer l'apparition des titres
  const [projectsHover, setProjectsHover] = useState(false)
  const [contactHover, setContactHover] = useState(false)

  const handleScroll = () => {
    if (window.scrollY < 100) {
      setHome('gray');
      setAboutMeColor('gray')
      setheaderScrolled(false)
    }
    else if (window.scrollY > 100 && window.scrollY < 400) {
      setHome('gray');
      setAboutMeColor('gray')
      setheaderScrolled(true)
    } else if (window.scrollY > 400 && window.scrollY < 800) {
      setHome('grayish');
      setAboutMeColor('grayish')
      setProjectsColor('grayish')

    } else if (window.scrollY > 1100 && window.scrollY < 1600) {
      setProjectsHover(true)
    }
    else if (window.scrollY > 800 && window.scrollY < 1600) {
      setAboutMeColor('greenish')
      setProjectsColor('greenish')
    }
    else if (window.scrollY > 1800 && window.scrollY < 2000) {
      setContactHover(true)
    } else if (window.scrollY > 1600 && window.scrollY < 2000) {
      setAboutMeColor('grayish')
      setProjectsColor('grayish')
      setContactColor('grayish')
    }
    else if (window.scrollY > 2000) {
      setProjectsColor('gray')
      setContactColor('gray')
    };
  }

  window.addEventListener('scroll', handleScroll);

  const targetAboutMe = useRef(null);
  const targetProjects = useRef(null);
  const targetContact = useRef(null);

  return (
    <div className='App'>

      <Header className={!headerScrolled ? 'Header' : 'scrolled'} 
      targetAboutMe={targetAboutMe}
      targetProjects={targetProjects}
      targetContact={targetContact}
      setheaderScrolled={setheaderScrolled}
      setProjectsHover={setProjectsHover}
      setContactHover={setContactHover}
      />

      <Home className={`Home ${homeColor}`} />
      <AboutMe className={`AboutMe ${aboutMeColor}`} ref={targetAboutMe} />
      <Projects className={`Projects ${projectsColor}`}
        projectsHover={projectsHover} ref={targetProjects} />
      <Contact className={`Contact ${contactColor}`}
        contactHover={contactHover} ref={targetContact} />

    </div>
  )
};