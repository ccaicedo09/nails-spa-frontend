import React from 'react';
//@ts-ignore
import './styles/about/Sucursal.css';

const Sucursal = ({sucursal}) => {
  return (
    <div className='card card-scrl p-centered'>
      <div className='card-image'>
        <img src={sucursal.src} alt="Sucursal" className='img-responsive' />
      </div>

      <div className='scrl-body'>
        <div className='card-header'>
          <div className='card-title h4'>{sucursal.title}</div>
          <div className='card-subtitle'>{sucursal.address}</div>
        </div>

        <div className='card-body'>
          <p>{sucursal.body}</p>
        </div>

        <div className='card-footer'>
          <button className='btn btn-primary' onClick={() => window.open(sucursal.addressUrl, '_blank')}>Cómo llegar &gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Sucursal; 