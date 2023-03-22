import { useRef } from "react"

export default function Logo({x, y}) {
    const meshRef = useRef(null)
 
    return (
        <mesh position-x={x}  position-y={y} ref={meshRef}>
          <planeGeometry  />
          <meshStandardMaterial />
        </mesh>
      )
};