import './App.scss';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { useState, useRef, useEffect } from 'react';
import Header from '../Header/Header';

export default function App() {
  const targetAboutMe = useRef(null);
  const targetProjects = useRef(null);
  const targetContact = useRef(null);
  const targetHome = useRef(null);

  // State qui va gérer le bgc des composants suivant le scroll
  const [bgColor, setBgColor] = useState('')
  const [headerScrolled, setheaderScrolled] = useState(false)
  // State qui va gérer l'apparition des titres
  const [projectsHover, setProjectsHover] = useState(false)
  const [contactHover, setContactHover] = useState(false)

  useEffect(() => {
    targetHome.current.scrollIntoView({ behavior: "smooth" });
  }, []);


  const x = window.innerHeight;

  const handleScroll = () => {
    if (window.scrollY < 100) {
      setBgColor('gray');
      setheaderScrolled(false)
    }
    else if (window.scrollY > 100 && window.scrollY < x / 2) {
      setBgColor('gray');
      setheaderScrolled(true)
      console.log('home en gray');
    }
    else if (window.scrollY > x / 2 && window.scrollY < x) {
      setBgColor('grayish');
      setheaderScrolled(true)
      console.log('entre home et about en grayish');
    }
    else if (window.scrollY > x && window.scrollY < (x + x/2)) {
      setBgColor('greenish');
      setheaderScrolled(true)
      console.log('about en greenish');
    }
    else if (window.scrollY > (x + x/2) && window.scrollY < 2*x) {
      setBgColor('grayish');
      setheaderScrolled(true)
      setProjectsHover(true)
      console.log('entre about et project en grayish');
    }
    else if (window.scrollY > 2*x && window.scrollY < (x*2 + x/2)) {
      setBgColor('gray');
      setheaderScrolled(true)
      console.log('project en gray');
    }
    else if (window.scrollY > (x*2 + x/2) && window.scrollY < 3*x) {
      setBgColor('grayish');
      setheaderScrolled(true)
      setContactHover(true)
      console.log('entre project et contact en grayish', window.scrollY);
    }
    else if (window.scrollY > 3*x && window.scrollY < (x*3 + x/2)) {
      setBgColor('greenish');
      setheaderScrolled(true)
      console.log('contact en greenish');
    }
    else if (window.scrollY > (x*3 + x/2)) {
      setBgColor('grayish');
      setheaderScrolled(true)
      console.log('contact en grayish');
    }
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <div className='App'>
      <Header className={!headerScrolled ? 'Header' : 'scrolled'}
        targetAboutMe={targetAboutMe}
        targetProjects={targetProjects}
        targetContact={targetContact}
        setheaderScrolled={setheaderScrolled}
        setProjectsHover={setProjectsHover}
        setContactHover={setContactHover}
        setBgColor={setBgColor}
        bgColor={bgColor}
      />
      <Home className={`Home ${bgColor}`}
        targetContact={targetContact}
        targetAboutMe={targetAboutMe}
        setContactHover={setContactHover}
        setheaderScrolled={setheaderScrolled}
        setBgColor={setBgColor}
        ref={targetHome}
      />
      <AboutMe className={`AboutMe ${bgColor}`} ref={targetAboutMe} />
      <Projects className={`Projects ${bgColor}`}
        projectsHover={projectsHover} ref={targetProjects} />
      <Contact className={`Contact ${bgColor}`}
        contactHover={contactHover} ref={targetContact} />
    </div>
  )
};