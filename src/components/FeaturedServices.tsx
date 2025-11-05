import React from 'react';
import { getAllServicesRequest } from '../api/services';
import { Service } from '../types/servicios';



const FeaturedServices= ({services}: {services: Service[]}) => {
  
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services && services.map((service, index) => (
        <div 
          key={index}
          className="rounded-2xl p-6 shadow-lg hover:shadow-2xl"
        >
          <div className={`w-16 h-16  rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
            {service.pictureUrl ? (
              <img src={service.pictureUrl} alt={service.name} className="w-12 h-12 object-cover rounded-full"/>
            ) : (
              <span>💅</span>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
            {service.name} | {service.duration} min ${service.price}
          </h3>
          <p className="text-gray-600 text-sm text-center leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedServices;