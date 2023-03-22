import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import { Vector2 } from "three";
import Logo from "../Logo/Logo";

export default function Logos() {
    let t =0;
    let [logos, updateLogos] = useState([{
        x: 0,
        y: 0,
        index: 0
    }])
// ici, on va gérer l'update des logos en fonction de la position de la souris
const updatePositions =({x, y}) => {
    const distance = new Vector2(x,y).distanceTo(
        new Vector2(logos.at(-1)?.x, logos.at(-1)?.y)
    )
    // la distance correspond à la distance entre le pointeur et le logo et le 10 correspond au nombre de logo que l'on veut afficher
    if (distance > 0.2 && logos.length < 10 + 1) {
        t++
        return [
            ...logos,
            {
            // ... mouse,
            index: t,
            }
        ]
    }
    return logos
}
    const { viewport } = useThree();

    useFrame(({ mouse }) => {
        const x = (viewport.width * mouse.x) / 2
        const y = (viewport.height * mouse.y) / 2
        updateLogos([...logos, x, y])
    })
    return (
        <>
            {logos.map((logo, i) => (
                <Logo key={`plane${logo.index}`} index={logo.index} x={logo.x} y={logo.y} />
            ))}
        </>
    )
};