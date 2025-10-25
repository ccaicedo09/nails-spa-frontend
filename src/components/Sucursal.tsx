import React from 'react';
// @ts-ignore
import './styles/about/Sucursal.css';

interface SucursalProps {
  url?: string;
  pictureUrlSmall?: string;
  pictureUrlMedium?: string;
  pictureUrlLarge?: string;
  name: string;
  address: string;
  schedule: string;
  manager: string;
  phone: string;
}

const Sucursal: React.FC<SucursalProps> = ({ url, pictureUrlSmall, pictureUrlMedium, pictureUrlLarge, name, address, schedule, manager, phone }) => {

  return (
    <div className='bg-white rounded-3xl shadow-xl overflow-hidden transform mb-16'>
      <div className='relative overflow-hidden'>
          {url ? (
            <>
              {(typeof (pictureUrlSmall) !== 'undefined' || typeof (pictureUrlMedium) !== 'undefined' || typeof (pictureUrlLarge) !== 'undefined') ? (
                <picture>
                  {pictureUrlLarge && <source srcSet={pictureUrlLarge} media="(min-width:1200px)" />}
                  {pictureUrlMedium && <source srcSet={pictureUrlMedium} media="(min-width:600px)" />}
                  {pictureUrlSmall && <source srcSet={pictureUrlSmall} media="(max-width:599px)" />}
                  <img
                    src={url}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    width={420}
                    height={340}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </picture>
              ) : (
                <img
                  src={url}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  width={420}
                  height={340}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{minHeight: 340}}>
              <div className="text-gray-500">Imagen no disponible</div>
            </div>
          )}
        <div className="absolute bottom-4 left-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {name}
          </div>
        </div>
      </div>

      <div className='p-6'>
        <div className='mb-4'>
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>{name}</h3>
          <div className='flex items-center text-gray-600 mb-2'>
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{address}</span>
          </div>
          <p className='text-gray-600'>📅 {schedule}</p>
          <p className='text-gray-600'>👩‍💼 {manager}</p>
          <p className='text-gray-600'>📞 {phone}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Sucursal;
