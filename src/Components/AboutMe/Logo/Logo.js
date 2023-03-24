import React from 'react';
import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import logoGrid from '../../../img/jsLogo.png'
import { RepeatWrapping } from 'three';

export default function Logo({ x, y, offset}) {
  const logos = useTexture(logoGrid)
  const logoMap = useMemo(() => logos.clone (), [])
 // ici on va faire en sorte de montrer qu'une partie de la grille pour ne générer qu'une seule image
 // à la place de neuf
  logoMap.wrapS = RepeatWrapping;
  logoMap.wrapT = RepeatWrapping;
  logoMap.repeat.set(1/3 , 1/3)
  logoMap.offset.set(offset.x, offset.y)

  return (
    <mesh position={[x, y, 0]}>
      <planeGeometry args={[.5, .5]} />
      <meshStandardMaterial map={logoMap} />
    </mesh>
  )
};