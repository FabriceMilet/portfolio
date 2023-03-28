import { useState, useEffect, useRef } from "react";
import './Contact.scss'

export default function Contact({ className }) {
  // je crée un état pour les positions de la souris pour l'effet hover du titre
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {

    const circle = circleRef.current;
    // const halfCircleSize = circle.offsetHeight;
    const mouse_x = event.clientX;
    const mouse_y = event.clientY;
    circle.style.left = `${mouse_x}px`;
    circle.style.top = `${mouse_y}px`;
    setMouseCoords({ x: mouse_x, y: mouse_y });
    };
    document.addEventListener("mousemove", handleMouseMove);

    // return () => {
    //   document.removeEventListener("mousemove", handleMouseMove);
    // };
    }, []);

  return (
    <div className={className}>
      <h1 className="Contact-title__filled"> Contactez-moi ici</h1>
      <h1 className="Contact-title__empty" aria-hidden="true"> Contactez-moi ici</h1>
      <div id="circle" ref={circleRef}></div>
      <form name="contact" method='post' className="Contact-form">
        <div className="Contact-form__infos" >
          <label className="Contact-form__label" htmlFor="name"> Nom  </label>
          <input className="Contact-form__input" type="text" name="name" />

          <label className="Contact-form__label" htmlFor="email"> Email  </label>
          <input className="Contact-form__input" type="email" name="email" />
        </div>
        <div className="Contact-form__message">
          <label className="Contact-form__label" htmlFor="message"> Message  </label>
          <textarea className="Contact-form__input" name="message" />
        </div>
        <button className="Contact-form__button" type='submit'>Envoyer</button>
      </form>
      <div className="Contact-phone"> <div className="Contact-phone__text">ou par téléphone,</div> <div className="Contact-phone__number">au <span>07 81 69 49 28</span></div></div>
    </div>
  )
};