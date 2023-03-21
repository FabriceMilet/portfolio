import './App.scss';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';

export default function App() {
  // State qui permet l'affichage du composant s'il est true
  const [toggleElem2, setToggleElem2] = useState(false)
  const [toggleElem3, setToggleElem3] = useState(false)
  const [toggleElem4, setToggleElem4] = useState(false)
 
  // Les animations qui sont déclenchées lors du passage du state de false a true. 
  const animation = useSpring({
    opacity: toggleElem2 ? 1 : 0,
    //transform: toggleElem2 ? "translateX(0)" : "translateX(-80%)"
  })
  const animation2 = useSpring({
    opacity: toggleElem3 ? 1 : 0,
    //transform: toggleElem3 ? "translateX(0)" : "translateX(80%)"
  })
  const animation3 = useSpring({
    opacity: toggleElem4 ? 1 : 0,
    //transform: toggleElem4 ? "translateX(0)" : "translateX(80%)"
  })
   // on gère ici le fait de bouger le header à partir du moment où on scroll
   const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = ({ currentPosition }) => {
    setIsScrolled(currentPosition > 0.01);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='App'>
      <Header className={isScrolled ? 'scrolled' : 'Header'}/>
      <Home />
      {/* Waypoint déclanche un évènement lors du scroll. 
          si le state est sur false il le passe a true */}
      
      <Waypoint 
      scrollableAncestor={window}
      bottomOffset="30%"
        onEnter={() => {
          if (!toggleElem2) {
            setToggleElem2(true)
          }
        }
        }>
        <animated.div style={animation}>
          <AboutMe />
        </animated.div>
      </Waypoint>

      <Waypoint 
      scrollableAncestor={window}
      bottomOffset="30%"
        onEnter={() => {
          if (!toggleElem3) {
            setToggleElem3(true)
          }
        }
        }>
        <animated.div style={animation2}>
          <Projects />
        </animated.div>
      </Waypoint>
      <Waypoint 
      scrollableAncestor={window}
      bottomOffset="30%"
        onEnter={() => {
          if (!toggleElem4) {
            setToggleElem4(true)
          }
        }
        }>
        <animated.div style={animation3}>
          <Contact />
        </animated.div>

      </Waypoint>
    </div>
  );
};






