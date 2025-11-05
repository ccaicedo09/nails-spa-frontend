import { useEffect, useState } from 'react';
import Sucursal from '../components/Sucursal';
import SucursalSkeleton from '../components/SucursalSkeleton';
import { getAllLocationsRequest } from '../api/locations';
import { Location } from '../types/sedes';
import './styles/Sedes.css';
import { BuildingIcon } from '../components/icons';

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
    return (
      <div className="bg-white min-h-screen" style={{padding: 24}} aria-busy>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pink-700 mb-3">Nuestras Sedes</h1>
            <p className="text-gray-600 text-lg">Encuentra la sucursal más cercana a ti</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <SucursalSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen" style={{padding: 24}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-700 mb-3">Nuestras Sedes</h1>
          <p className="text-gray-600 text-lg">Encuentra la sucursal más cercana a ti</p>
        </div>

        {locations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="text-center py-16">
            <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
              <BuildingIcon className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600 text-lg">No hay sedes registradas aún.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sedes;