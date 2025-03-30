import React, { useEffect, useState } from 'react'
import { useFormContext } from './AppointmentFormContext'
import supabase from '../../utils/supabaseClient';
import Service from '../../types/FormTypes.interface';
import "../../components/styles/appointments/Services.css";	

const Services = () => {
  const { services, setServices } = useFormContext();
  const [servicesList, setServicesList] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const { data: services, error } = await supabase
          .from("services")
          .select("*")
        
        console.log(services);
        
        if (error) throw error;
        setServicesList(services);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleSelectService = (service: Service) => {
    setServices((prev) => {
      const isSelected = prev.some((s) => s.id === service.id);
      if (isSelected) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <div>
      <h3>Selecciona un Servicio</h3>
      {servicesList.map((service) => (
        <article
          key={service.id}
          className={`card card-custom ${
            services.some((s) => s.id === service.id) ? "selected" : ""
          }`}
          onClick={() => handleSelectService(service)}
        >
          <div
            className="card-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 className="h5">{service.name}</h4>
            <p>
                <strong>$ {service.price.toLocaleString('es-CO')}</strong>
            </p>
          </div>
          <div className="card-body">
            <ul>
              <li>
                <strong>Duración: </strong> {service.estimated_duration} min
              </li>
              <li>{service.description}</li>
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Services;