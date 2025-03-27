import React from 'react';
//@ts-ignore
import branch from '/img/branch.webp';
import './styles/about/Branch.css';

const getLocation = (url: string) => {
  window.open(url, '_blank');
}

const Branch = ({url}) => {
  return (
    <div className='card card-brch p-centered'>
      <div className='card-image'>
        <img src={branch} alt="Surcursal" className='img-responsive' />
      </div>

      <div className='brch-body'>
        <div className='card-header'>
          <div className='card-title h4'>Sede Principal</div>
          <div className='card-subtitle text-gray'>Carrera 7 #25-40, Neiva, Huila.</div>
        </div>

        <div className='card-body'>
          <p> Nuestro spa de uñas en Neiva ofrece un espacio moderno y relajante, ideal para el cuidado y embellecimiento de tus manos y pies. Con un equipo de expertos, garantizamos una experiencia de calidad y bienestar en cada visita.</p>
        </div>

        <div className='card-footer'>
          <button className='btn btn-primary' onClick={() => getLocation(url)}>Cómo llegar &gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Branch; 