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
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1'>
      <div className='relative overflow-hidden' style={{height: 240}}>
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
                    height={240}
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
                  height={240}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl mb-2 block">🏢</span>
                <span className="text-gray-500 text-sm">Imagen no disponible</span>
              </div>
            </div>
          )}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className='text-2xl font-bold text-white drop-shadow-lg'>{name}</h3>
        </div>
      </div>

      <div className='p-6'>
        <div className='space-y-3'>
          <div className='flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200'>
            <svg className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className='text-gray-700 text-sm'>{address}</span>
          </div>

          <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-200'>
            <span className='text-lg flex-shrink-0'>📅</span>
            <span className='text-gray-700 text-sm font-medium'>{schedule}</span>
          </div>

          <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-200'>
            <span className='text-lg flex-shrink-0'>👩‍💼</span>
            <span className='text-gray-700 text-sm'>{manager}</span>
          </div>

          <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors duration-200'>
            <span className='text-lg flex-shrink-0'>📞</span>
            <a href={`tel:${phone}`} className='text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors'>
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sucursal;