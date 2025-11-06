import React from 'react';
import { Service } from '../types/servicios';
import ServiceCard from './ServiceCard';

const FeaturedServices = ({ services }: { services: Service[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services && services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
};

export default FeaturedServices;