import './Home.scss'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import Cube from './Cube/Cube';
import { OrbitControls, Shadow, Plane } from '@react-three/drei'

export default function Home({ className, targetContact, setContactHover, setheaderScrolled }) {
  const cameraRef = useRef()

  const handleClickContact = (event) => {
    event.preventDefault();
    targetContact.current.scrollIntoView({ behavior: "smooth" });
    setheaderScrolled(true)
    setContactHover(true)
  };

  return (

    <div className={className}>
      <div className="Home-container">
        <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
            <ambientLight intensity={0.15}  />
            <spotLight position={[4, 4, 4]} angle={0.1} penumbra={1}  intensity={1.5} shadow-mapSize={512} />
            <Plane
          position={[0, -1, 0]}
          receiveShadow
        >
          <shadowMaterial transparent opacity={0.4} />
        </Plane>
            <Shadow
            width={1024}
            height={1024}
            position={[-5, -4, -4]}
          opacity={1} scale={8} blur={5} far={2}
          />
           <directionalLight castShadow position={[10, 10, 0]} intensity={.3} shadow-mapSize={512}/>
            <Cube position={[0, 1.5, 0]} castShadow receiveShadow  />
            <OrbitControls />      
        </Canvas>
        <div>
          <button className="Home-button" onClick={handleClickContact}>Me contacter</button>
          <FaArrowAltCircleDown size={40} />
        </div>
      </div>
    </div>

  )
};