import './Home.scss'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Cube from './Cube/Cube';
import { OrbitControls } from '@react-three/drei'

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
        <Canvas>
          <scene>
          <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
            <Cube />
            <OrbitControls />
          </scene>
        </Canvas>
        <div>
          <button className="Home-button" onClick={handleClickContact}>Contactez moi</button>
          <FaArrowAltCircleDown size={40} />
        </div>
      </div>
    </div>

  )
};