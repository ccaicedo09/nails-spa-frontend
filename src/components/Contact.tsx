import React from 'react';
//@ts-ignore
import whatsappLogo from '../assets/whatsapp.svg';
import './styles/Contact.css'

const Contact = () => {
  const whatsappNumber = "+573209066633";

  return (
    <button className='contact' onClick={() => window.open(`https://wa.me/${whatsappNumber}`)}>
      <img src={whatsappLogo} alt="WhatsApp Logo" className='whatsapp-logo'/>
    </button>
  )
}

export default Contact;