import React from 'react';

const featuredServices = [
  {
    icon: '💅',
    title: 'Manicure',
    description: 'Cuidado completo para tus manos',
    color: 'bg-pink-500'
  },
  {
    icon: '✨',
    title: 'Pedicure',
    description: 'Relaja tus pies con nuestro servicio',
    color: 'bg-purple-500'
  },
  {
    icon: '🎨',
    title: 'Diseño de Uñas',
    description: 'Arte personalizado en cada uña',
    color: 'bg-blue-500'
  },
  {
    icon: '💎',
    title: 'Uñas Acrílicas',
    description: 'Extensiones duraderas y elegantes',
    color: 'bg-teal-500'
  }
];

const FeaturedServices: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredServices.map((service, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
        >
          <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
            {service.title}
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