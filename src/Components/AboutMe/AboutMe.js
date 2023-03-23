import './AboutMe.scss'
import Logos from './Logos/Logos'
// import img1 from '../../img/jsLogo3d.png'
// import img2 from '../../img/jsLogo3d.png'
// import img3 from '../../img/jsLogo.png'
// import img4 from '../../img/jsLogo.png'
// import img5 from '../../img/jsLogo.png'

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
      <ambientLight />
      <Logos />
      </Canvas>
    </div>
  )
};