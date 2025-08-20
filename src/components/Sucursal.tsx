import React from 'react';
//@ts-ignore
import sucursal from '/img/sucursal.webp';
import './styles/about/Sucursal.css';

const Sucursal = ({url}) => {
  return (
    <div className='bg-white rounded-3xl shadow-xl overflow-hidden transform mb-16'>
      <div className='relative h-64 overflow-hidden'>
        <img src={sucursal} alt="Sucursal" className='w-full h-full object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sede Principal
          </div>
        </div>
      </div>

      <div className='p-6'>
        <div className='mb-4'>
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>Sede Principal</h3>
          <div className='flex items-center text-gray-600 mb-2'>
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Carrera 7 #25-40, Neiva, Huila.</span>
          </div>
        </div>

        <div className='mb-6'>
          <p className="text-gray-600 leading-relaxed">
            Nuestro spa de uñas en Neiva ofrece un espacio moderno y relajante, ideal para el cuidado y embellecimiento de tus manos y pies.
          </p>
        </div>

        <div className='flex justify-between items-center'>
          <div className="flex items-center text-green-600">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Abierto ahora</span>
          </div>
          <button 
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2' 
            onClick={() => window.open(url, '_blank')}
          >
            Cómo llegar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sucursal; 