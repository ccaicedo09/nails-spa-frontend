import React, { useEffect, useState } from 'react'
import { useFormContext } from './AppointmentFormContext'
import supabase from '../../utils/supabaseClient';
import Service from '../../types/FormTypes.interface';

const Services = () => {
  const { setServices, nextStep } = useFormContext();
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <div>
      <h3>Selecciona un Servicio</h3>
      <ul>
        {servicesList.map((service) => (
          <li key={service.id} style={{ marginBottom: "10px" }}>
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <p>
              <strong>Precio:</strong> ${service.price}
            </p>
            <button
              onClick={() => {
                setServices(service);
                nextStep();
              }}
            >
              Seleccionar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services