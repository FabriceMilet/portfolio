import './AboutMe.scss'
import Logos from './Logos/Logos'
import { Canvas } from '@react-three/fiber'

export default function AboutMe({ className }) {

  return (
    <div className={className}>
      <div className="AboutMe-presentation">
        "Lorem ipsum dolor sit amet, <span>consectetur </span>consectetur adipiscing elit, sed
        do eiusmod tempor incidluptate velit esse <span>consectetur </span> cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat <span>consectetur </span> non proident, sun deserunt
        <span>consectetur </span>mollit anim id est laborum
      </div>

      <Canvas>
      <ambientLight/>
      <Logos /> 
      </Canvas>
    </div>
  )
};