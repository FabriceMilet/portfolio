import { useState, useEffect, useRef } from "react";
import './Contact.scss'

export default function Contact({ className }) {

  return (
    <div className={className}>
      <h1 className="Contact-title"> Contactez-moi ici</h1>
      
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
      <div className="Contact-phone">
        <div>
         <div className="Contact-phone__text">Par téléphone,</div>
          <div className="Contact-phone__number">au <span>07 81 69 49 28</span></div>
          </div>
          <div className="Contact-phone__cv">Télécharger mon <span>CV</span></div>
          </div>
    </div>
  )
};