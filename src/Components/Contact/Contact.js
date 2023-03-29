import './Contact.scss'
import { forwardRef } from 'react';

const Contact = forwardRef(({ className, contactHover}, targetContact ) => {

  const handleDownload = () => {
    const pdfUrl = "../pdf/CV_F_Milet.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
          <div className="Contact-phone__cv">Télécharger mon <span onClick={handleDownload}>CV</span></div>
          </div>
    </div>
  )
});
export default Contact;