import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Cube({ castShadow, receiveShadow }) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.1 * delta))

  // Créer un tableau de textes pour chaque face du cube
  const texts = ['Fabrice Milet', 'Développeur Web & Mobile', 'Bienvenue sur mon portfolio', 'Contactez moi et discutons', 'Rendez-vous plus bas pour voir mes projets', 'Descendez pour voir ma présentation'];

  // Créer un canvas pour chaque face du cube avec le texte et la couleur correspondants
  const canvases = texts.map((text) => {
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
    ctx.font = '50px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#34626A';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#EFECEC';
    const words = text.split(' ');
    if (words.length > 2) {
      // Si la chaîne contient plus de 3 mots, j'affiche deux lignes
      const firstLine = words.slice(0, words.length / 2).join(' ');
      const secondLine = words.slice(words.length / 2).join(' ');
      ctx.fillText(firstLine, canvas.width / 2, canvas.height / 3);
      ctx.fillText(secondLine, canvas.width / 2, (canvas.height / 3) * 2);
    } else {
      // Sinon,  une seule ligne
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    }
    return canvas;
  });

  // Créer un tableau de textures à partir des canvases créés
  const textures = canvases.map(canvas => new THREE.CanvasTexture(canvas));

  // Créer un tableau de matériaux pour chaque face du cube
  const materials = textures.map(texture => new THREE.MeshStandardMaterial({ map: texture }));

  // Créer la géométrie du cube
  const geometry = new THREE.BoxGeometry(4.5, 4.5, 4.5);

  return (
    <mesh ref={ref} material={materials} geometry={geometry}
   />
  )
}


