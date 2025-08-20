import React from 'react';
import './styles/about/Card.css'

const Card = ({worker}) => {
  return (
    <div className='bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center p-6'>
      <div className='w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg'>
        <img src={worker.pathProfile} alt={worker.name} className="w-full h-full object-cover" />
      </div>
      
      <div className='mb-4'>
        <h3 className='text-xl font-bold text-blue-600 mb-2'>{worker.name}</h3>
        <span className="text-gray-600 font-semibold">{worker.role}</span>
      </div>

      <div className='mb-6'>
        <p className="text-gray-600 leading-relaxed">{worker.message}</p>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
        Contactar
      </button>
    </div>
  );
}

export default Card;