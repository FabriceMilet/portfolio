import './App.scss';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { Waypoint } from 'react-waypoint';
// import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import Header from '../Header/Header';

export default function App() {
  // State qui va gérer le bgc des composants suivant le scroll
  const [homeColor, setHome] = useState('')
  const [aboutMeColor, setAboutMeColor] = useState('')
  const [projectsColor, setProjectsColor] = useState('')
  const [contactColor, setContactColor] = useState('')
  const [headerScrolled, setheaderScrolled] = useState(false)

 console.log(window.scrollY);
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
    } else if (window.scrollY > 400 && window.scrollY < 800){
      setHome('grayish');
      setAboutMeColor('grayish')
      setProjectsColor('grayish')
    }else if (window.scrollY > 800 && window.scrollY < 1600){
      setAboutMeColor('greenish')
      setProjectsColor('greenish')
    }else if (window.scrollY > 1600 && window.scrollY < 2000){
      setAboutMeColor('grayish')
      setProjectsColor('grayish')
      setContactColor('grayish')
    }else if (window.scrollY > 2000){
      setProjectsColor('gray')
      setContactColor('gray')
    };}
  window.addEventListener('scroll', handleScroll);

  return (
<div className='App'>
 
<Header className={!headerScrolled ? 'Header' : 'scrolled'} />

<Home className={`Home ${homeColor}`} />
<AboutMe className={`AboutMe ${aboutMeColor}`} />
<Projects className={`Projects ${projectsColor}`} />
<Contact className={`Contact ${contactColor}`} />
   
</div>
  )
};