import './AboutMe.scss'
import Logos from './Logos/Logos'
import { Canvas } from '@react-three/fiber'

export default function AboutMe({ className }) {

  return (
    <div className={className}>
      <div className="AboutMe-presentation">
        <div className="AboutMe-presentation__resume">
        "Lorem ipsum dolor sit amet, <span>consectetur </span>consectetur adipiscing elit, sed
        do eiusmod tempor incidluptate velit esse <span>consectetur </span> cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat <span>consectetur </span> non proident, sun deserunt
        <span>consectetur </span>mollit anim id est laborum
        </div>
        <div className="AboutMe-presentation__skills">
          <h1><span>M</span><span>e</span><span>s</span>
           <span>c</span><span>o</span><span>m</span><span>p</span><span>é</span><span>t</span><span>e</span><span>n</span><span>c</span><span>e</span><span>s</span>
           </h1>
          <p>HTML, CSS, SASS, JavaScript, REACT, Node.JS, Express, SQL, PostgreSQL</p>
        </div>
      </div>
      <div className="AboutMe-canvas">
      <Canvas>
      <ambientLight/>
      <Logos /> 
      </Canvas>
    </div>
    </div>
  )
};