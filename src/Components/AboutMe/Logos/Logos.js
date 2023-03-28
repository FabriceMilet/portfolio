import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import { Vector2 } from "three";
import Logo from "../Logo/Logo";


export default function Logos() {
     // on recupère viewport qui nous permet de savoir où on se trouve sur l'écran
     const { viewport } = useThree();
    // on initialise un tableau vide de logos et sa fonction updateLogos
    let [logos, updateLogos] = useState([])
    // on initialise un index qu'on utilisera dans la key du map plus tard
    let [index, setIndex] = useState(0);
    const updatePositions = ({ x, y, index }) => {

        if (logos.length === 0) {
            setIndex((index) => index + 1)
            return [
                {
                    x,
                    y,
                    index,
                    offset: {
                        x: Math.floor(Math.random() * 3) / 3,
                        y: Math.floor(Math.random() * 3) / 3
                    }
                }
            ]
        }

        // on regarde la distance entre le curseur et le dernier logo
        const lastLogo = logos[logos.length - 1];
        const distance = new Vector2(x, y).distanceTo(
            new Vector2(lastLogo.x, lastLogo.y)
        )
        // la distance correspond à la distance entre le pointeur et le logo et le 20 correspond au nombre de logo que l'on veut afficher
        if (distance > 0.5 && logos.length) {
            setIndex((index) => index + 1)
            return [
                ...logos,
                {
                    x,
                    y,
                    index,
                    offset: {
                        x: Math.floor(Math.random() * 3) / 3,
                        y: Math.floor(Math.random() * 3) / 3
                    }
                }
            ]
        }
        // on regarde si le nombre de logo est supérieur au nombre de logos définis si oui on fait un splice pour remplacer le dernier
        // si non, on retourne une copie des logos existants (pour éviter un comportement innnatendu)
        return logos.length > 19 ? logos.splice(logos.length - 19) : logos.map((logo) => ({ ...logo }))
    }
    useFrame(({ mouse }) => {
        const x = (viewport.width * mouse.x) / 2
        const y = (viewport.height * mouse.y) / 2
        updateLogos(updatePositions({ x, y, index }));
    })

    return (
        <>
            {logos.length > 1 ? logos.map((logo) => (
                <Logo key={logo.index} index={logo.index} x={logo.x} y={logo.y}
                    offset={logo.offset}
                />
            )) : null}
        </>
    )
};