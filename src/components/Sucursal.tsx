import React from 'react';
//@ts-ignore
import sucursal from '/img/sucursal.webp';
import './styles/about/Sucursal.css';

const Sucursal = ({url}) => {
  return (
    <div className='card card-scrl p-centered'>
      <div className='card-image'>
        <img src={sucursal} alt="Sucursal" className='img-responsive' />
      </div>

      <div className='scrl-body'>
        <div className='card-header'>
          <div className='card-title h4'>Sede Principal</div>
          <div className='card-subtitle text-gray'>Carrera 7 #25-40, Neiva, Huila.</div>
        </div>

        <div className='card-body'>
          <p> Nuestro spa de uñas en Neiva ofrece un espacio moderno y relajante, ideal para el cuidado y embellecimiento de tus manos y pies.</p>
        </div>

        <div className='card-footer'>
          <button className='btn btn-primary' onClick={() => window.open(url, '_blank')}>Cómo llegar &gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Sucursal; 