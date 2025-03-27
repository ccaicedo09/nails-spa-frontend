import React from 'react';
//@ts-ignore
import PDFLogo from '../assets/pdf.svg'; 
import './styles/about/PDFCard.css'; 

const PDFCard = () => {
  return (
    <div className='card card-dwnld s-rounded col-4 p-centered bg-dark text-white text-center'>
      <div className='card-body'>
        <h2>Carta de Servicios</h2>
        <p>Descubre todos los tratamientos y cuidados que ofrecemos para tus uñas.</p>
      </div>

      <button className='btn btn-primary' onClick={() => window.open('/carta-precios-2025.pdf', '_blank')}>
        <img src={PDFLogo} alt='PDF logo' />
        Descargar PDF
      </button>
    </div>
  );
}

export default PDFCard;