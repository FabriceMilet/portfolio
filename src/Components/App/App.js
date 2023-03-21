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
  // State qui permet l'affichage du composant s'il est true
  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(false)
  const [state3, setState3] = useState(false)
  const [state4, setState4] = useState(false)
  const [state5, setState5] = useState(false)
  const [state6, setState6] = useState(false)
  // // Les animations qui sont déclenchées lors du passage du state de false a true. 
  // const animation = useSpring({
  //   opacity: toggleElem2 ? 1 : 0,
  //   //transform: toggleElem2 ? "translateX(0)" : "translateX(-80%)"
  // })
  // const animation2 = useSpring({
  //   opacity: toggleElem3 ? 1 : 0,
  //   //transform: toggleElem3 ? "translateX(0)" : "translateX(80%)"
  // })
  // const animation3 = useSpring({
  //   opacity: toggleElem4 ? 1 : 0,
  //   //transform: toggleElem4 ? "translateX(0)" : "translateX(80%)"
  // })
  // on gère ici le fait de bouger le header à partir du moment où on scroll
  const [isScrolled, setIsScrolled] = useState(false);


  return (
    <div className='App'>
      <Header className={isScrolled ? 'scrolled' : 'Header'} />
      <Waypoint
      topOffset="-100%"
        onEnter={() => {
          if(isScrolled){
            setIsScrolled(false)
            console.log('enter WP header')}
        }
        }
      />
      <Home className={state1 ? 'Home-scrolled' : 'Home'} />
      <Waypoint
        onEnter={() => {
          if(!isScrolled){
            setIsScrolled(true)
            console.log('enter WP header')}
        }
        }
      />
      
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!state1) {
            setState1(true);
            console.log('enter WP home')
          }
        }}
      />
        <AboutMe className={state2 ? 'AboutMe-scrolled' : 'AboutMe'} />
        <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!state2) {
            setState2(true);
          }
        }}
        onLeave={() => {
          if (state2) {
            setState2(false);
          }
        }}
      />
      <Projects className={state3 ? 'Projects-scrolled' : 'Projects'} />
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!state3) {
            setState3(true);
          }
        }}
        onLeave={() => {
          if (state3) {
            setState3(false);
          }
        }}
      />
      <Contact className={state4 ? 'Contact-scrolled' : 'Contact'} />
  
    

     
    </div>
  );
};






