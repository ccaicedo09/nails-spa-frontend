import { useEffect, useState } from 'react';
import Sucursal from '../components/Sucursal';
import SucursalSkeleton from '../components/SucursalSkeleton';
import { getAllLocationsRequest } from '../api/locations';
import { Location } from '../types/sedes';
import './styles/Sedes.css';

const Sedes = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await getAllLocationsRequest();
        console.log('Datos recibidos del backend:', res.data);
        setLocations(res.data.locations); 
      } catch (error) {
        console.error('Error al cargar las sedes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) {
    // Show a few skeleton placeholders while the real data is loading.
    return (
      <div className="sedes-container" aria-busy>
        <h2 className='text-center'>
          Conoce cada una de nuestras sedes!
        </h2>
        <div className="flex-container">
          {[1, 2, 3].map((i) => (
            <SucursalSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="sedes-container">
      <h2 className='text-center'>
        Conoce cada una de nuestras sedes!
      </h2>

      {locations.length > 0 ? (
        <div className="flex-container">
          {locations.map((loc) => (
            <Sucursal
              key={loc._id}
              url={loc.pictureUrl}
              name={loc.name}
              address={loc.address}
              schedule={loc.schedule}
              manager={loc.manager}
              phone={loc.phone}
            />
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-400'>No hay sedes registradas aún.</p>
      )}
    </div>
  );
};

export default Sedes;
