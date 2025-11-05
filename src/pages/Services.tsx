import React, {useState, useEffect} from 'react';
import PDFCard from '../components/PDFCard';
import Schedule from '../components/Schedule';
import FeaturedServices from '../components/FeaturedServices';
import { Service } from '../types/servicios';
import { getAllServicesRequest } from '../api/services';

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
     const fetchServices = async () => {
       const res = await getAllServicesRequest();
       const services: Service[] = res.data.services;
       setServices(services);
     };
     fetchServices();
  }, []);

  return (
    <div className="text-primary bg-white" style={{fontSize:'1rem', minHeight: '100vh', padding: 24 }}>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-pink-700 mb-3">Nuestros Servicios</h1>
        <p className="text-gray-600 text-lg">Experiencia y calidad en cada detalle</p>
      </div>

      <div className=" max-w-6xl mx-auto">
        <FeaturedServices services={services}/>
        <div className="grid mt-8 grid-cols-1 lg:grid-cols-2 gap-6 ">
        
        <PDFCard services={services}/>
        <Schedule />
      </div>
      </div>

      
    </div>
  );
}

export default Services;