import { useTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import img1 from '../../../img/jsLogo.png'
import html from '../../../img/html.png'

export default function Logo({x, y}) {

  const logos = [useTexture(img1), useTexture(html)];
    // const logos = useTexture(img1)
    // const logoMap = useMemo(() => logos.clone (), [logos])
  // créer une copie de chaque texture pour éviter les problèmes de mémoire
  const logoMaps = useMemo(() => logos.map((logo) => logo.clone(), [logos]));
    return (
        <mesh position={[x, y, 0]}>
          <planeGeometry args={[.5, .5]} />
          <meshStandardMaterial map={logoMaps[0]} />
          <meshStandardMaterial map={logoMaps[1]} />
        </mesh>
      )
};