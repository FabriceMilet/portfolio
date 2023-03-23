import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import { Vector2 } from "three";
import Logo from "../Logo/Logo";

export default function Logos() {
    // on initialise un tableau vide de logos et sa fonction updateLogos
    let [logos, updateLogos] = useState([])
    // on initialise un index qu'on utilisera dans la key du map plus tard
    let [index, setIndex] = useState(0);
// ici, on va gérer l'update des logos en fonction de la position de la souris
const updatePositions =({x, y}) => {
    // on regarde la distance entre le curseur et le dernier logo
    const distance = new Vector2(x,y).distanceTo(
        new Vector2([logos.length - 1]?.x, [logos.length - 1]?.y)
    )
    // la distance correspond à la distance entre le pointeur et le logo et le 20 correspond au nombre de logo que l'on veut afficher
    if (distance > 0.1 && logos.length < 20) {
        setIndex((prevIndex) => prevIndex + 1);
        return [
            ...logos,
            {
            x,
            y,
            index: index,
            }
        ]
    }
    // on regarde si le nombre de logo est supérieur au nombre de logos définis si oui on fait un splice pour remplacer le dernier
    // si non, on retourne une copie des logos existants (pour éviter un comportement innnatendu)
    return logos.length > 19 ? logos.splice(logos.length - 19) : logos.map((plane) => ({ ... plane}))
}
    const { viewport } = useThree();

    useFrame(({ mouse }) => {
        const x = (viewport.width * mouse.x) / 2
        const y = (viewport.height * mouse.y) / 2
        updateLogos(updatePositions({ x, y }));
    })

    return (
        <>
            {logos.map((logo) => (
                <Logo key={logo.index} index={logo.index} x={logo.x} y={logo.y} />
            ))}
        </>
    )
};