import React from 'react';
import './styles/about/Card.css'

const Card = ({worker}) => {
  return (
    <div className='card card-tm text-center p-centered'>
      <div className='card-header'>
        <h3 className='text-primary'>{worker.name}</h3>
        <span>{worker.role}</span>
      </div>
      
      <div className='avatar avatar-xl p-centered'>
        <img src={worker.pathProfile} alt={worker.name} />
      </div>

      <div className='card-body'>
        <p className='text-gray'>{worker.message}</p>
      </div>
    </div>
  );
}

export default Card;