import './Contact.scss'
import { forwardRef } from 'react';
import cvPdf from "../../pdf/CV_F_Milet.pdf"

const Contact = forwardRef(({ className, contactHover}, targetContact ) => {
  return (
    <div className={className} ref={targetContact}>
      {contactHover && <h1 className="Contact-title">
        <span>C</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
        <span>e</span>
        <span>z</span>
        <span>-</span>
        <span>m</span>
        <span>o</span>
        <span>i</span>
        </h1>}
      
      <form name="contact" method='post' className="Contact-form" data-netlify="true" onSubmit='submit'>
        <input type="hidden" name='form-name' value='contact' />
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
          <div className="Contact-phone__number">au <a href="tel:0781694928">07 81 69 49 28</a></div>
          </div>
          <a className="Contact-phone__cv" href={cvPdf} target="_blank" rel="noreferrer">Télécharger mon <span>CV</span></a>
          </div>
    </div>
  )
});
export default Contact;