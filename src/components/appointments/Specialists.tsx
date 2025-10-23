import React, { useEffect, useState } from 'react'
import { useFormContext } from './AppointmentFormContext'

import { Specialist } from '../../types/FormTypes.interface';

const Specialists = () => {
    const { specialist, setSpecialist } = useFormContext();
    const [specialistsList, setSpecialistsList] = useState<Specialist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSpecialists = async () => {
            try {
                setLoading(true);
                const specialists: [] = []
                
                console.log(specialists);
                
                if (error) throw error;
                setSpecialistsList(specialists);
            } catch (error: any) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchSpecialists();
    }, []);

    const handleSelectSpecialist = (selectedSpecialist: Specialist) => {
        setSpecialist(selectedSpecialist)
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

  return (
    <div>
      <h3 className="text-primary">Selecciona una especialista</h3>
      {specialistsList.map((specialistItem) => (
        <article
          style={{ cursor: "pointer" }}
          key={specialistItem.id}
          className={`card card-custom ${
            specialist?.id === specialistItem.id ? "selected" : ""
          }`}
          onClick={() => handleSelectSpecialist(specialistItem)}
        >
          <div
            className="card-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 className="h5">{specialistItem.name}</h4>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Specialists;