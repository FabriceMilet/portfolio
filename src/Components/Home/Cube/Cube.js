import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Cube({ castShadow, receiveShadow }) {
  const ref = useRef()

  // on gère ici la rotation du cube
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.1 * delta;
    ref.current.rotation.y += 0.1 * delta;
    })

  // on crée un tableau de textes pour chaque face du cube
  const texts = ['Fabrice Milet',
    'Développeur Web & Mobile',
    'Contactez moi et discutons',
    'Rendez-vous plus bas pour voir mes projets',
    'Bienvenue sur mon portfolio',
    'Descendez pour voir ma présentation'];

  // on ccrée les canvas pour chaque face du cube avec le texte et la couleur correspondants
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

  // On crée un tableau de textures à partir des canvas créés
  const textures = canvases.map(canvas => new THREE.CanvasTexture(canvas));

  // On crée un tableau de matériaux pour chaque face du cube
  const materials = textures.map(texture => new THREE.MeshStandardMaterial({ map: texture }));

  // On crée la géométrie du cube
  const geometry = new THREE.BoxGeometry(5.5, 5.5, 5.5);

  return (
    <mesh ref={ref} material={materials} geometry={geometry}
    />
  )
}


