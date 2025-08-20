import React from 'react';
//@ts-ignore
import PDFLogo from '../assets/pdf.svg'; 
import './styles/about/PDFCard.css'; 

const PDFCard = () => {
  return (
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300'>
      <div className='mb-6'>
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <img src={PDFLogo} alt='PDF logo' className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Carta de Servicios</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Descubre todos los tratamientos y cuidados que ofrecemos para tus uñas.
        </p>
      </div>

      <button 
        className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto gap-3' 
        onClick={() => window.open('/carta-precios-2025.pdf', '_blank')}
      >
        <img src={PDFLogo} alt='PDF logo' className="w-6 h-6" />
        Descargar PDF
      </button>
    </div>
  );
}

export default PDFCard;