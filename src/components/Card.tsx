import React from 'react';

const Card = ({worker}: {worker: any}) => {
  return (
    <div className='bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 text-center p-6 border border-pink-100'>
      <div className='w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-md ring-2 ring-pink-100'>
        <img src={worker.pathProfile} alt={worker.name} className="w-full h-full object-cover" />
      </div>
      
      <div className='mb-4'>
        <h3 className='text-lg font-bold text-gray-800 mb-2'>{worker.name}</h3>
        <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">{worker.role}</span>
      </div>

      <div>
        <p className="text-gray-600 text-base leading-relaxed">{worker.message}</p>
      </div>
    </div>
  );
}

export default Card;