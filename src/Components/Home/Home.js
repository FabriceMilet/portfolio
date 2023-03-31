import './Home.scss'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useRef } from 'react';
import { forwardRef } from 'react';
import { Canvas } from '@react-three/fiber'
import Cube from './Cube/Cube';
import { OrbitControls, Shadow, Plane } from '@react-three/drei'

const Home = forwardRef(({ className, targetContact, setContactHover, setheaderScrolled}, targetHome ) => {

  const cameraRef = useRef()

  const handleClickContact = (event) => {
    event.preventDefault();
    targetContact.current.scrollIntoView({ behavior: "smooth" });
    setheaderScrolled(true)
    setContactHover(true)
  };

  return (
    <div className={className} ref={targetHome}>
      <div className="Home-container">
        <div className="Home-container__top">
          <div className="Home-container__words">
            <span>Fabrice Milet</span>
            <span>développeur Web & Mobile</span>
            <span>Bienvenue sur mon portfolio</span>
          </div>
          <div className="Home-container__cube" >
          <Canvas  camera={{ position: [-5, 2, 10], fov: 60 }}>
            <ambientLight intensity={0.15} />
            <spotLight position={[4, 4, 4]} angle={0.2} penumbra={1.4} intensity={1.1} />
            <directionalLight castShadow position={[10, 10, 0]} intensity={.1} />
            <Cube/>
            <OrbitControls />
          </Canvas>
          </div>
        </div>
        <div className="Home-container__bottom">
          <button className="Home-button" onClick={handleClickContact}>Contactez moi</button>
          <FaArrowAltCircleDown size={40} />
        </div>
      </div>
    </div>

  )
});

export default Home

           {/* <Plane
position={[0, -1, 0]}
receiveShadow
>
<shadowMaterial transparent opacity={0.4} />
</Plane> */}
            {/* <Shadow
  width={1024}
  height={1024}
  position={[-5, -4, -4]}
opacity={1} scale={8} blur={5} far={2}
/> */}