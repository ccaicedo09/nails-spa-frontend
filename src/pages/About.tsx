import React from 'react';
import Card from '../components/Card';
//@ts-ignore
import aboutUsImage from '/img/about_us.webp';
import './styles/About.css';

const teamWork = [
  {
    name: 'Juliana Enriqueta Buitriago Charry',
    message: 'Con más de 15 años de experiencia en el arte del nail care, cofundé este spa con la visión de crear un espacio donde la belleza y el bienestar se encuentran. Mi pasión es liderar un equipo excepcional que transforma cada visita en una experiencia memorable.',
    pathProfile: 'https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg',
    role: 'Cofundadora & Directora General'
  },
  {
    name: 'Carla Estefany Castro Caicedo',
    message: 'Como cofundadora y especialista en diseño de uñas, mi objetivo es llevar las últimas tendencias internacionales a nuestros clientes. Creo firmemente que cada diseño debe reflejar la personalidad única de quien lo lleva.',
    pathProfile: 'https://i.pinimg.com/1200x/53/71/7e/53717eb0d8f58c3ffa799b25dd3cd1bc.jpg',
    role: 'Cofundadora & Directora Creativa'
  },
  {
    name: 'Gabriela Andrea Fajardo Ortiz',
    message: 'Junto a mis socias, creamos este spa para ofrecer productos de la más alta calidad y tratamientos seguros. Mi compromiso es garantizar que cada servicio cumpla con los estándares más exigentes de la industria.',
    pathProfile: 'https://i.pinimg.com/736x/90/06/83/9006838f5f8347d83b65fea831b40eb9.jpg',
    role: 'Cofundadora & Directora de Calidad'
  },
  {
    name: 'Nathaniel Avila Borrero',
    message: 'Mi visión al cofundar este spa fue crear una experiencia cliente excepcional desde el primer contacto. Me dedico a asegurar que cada persona que nos visita se sienta valorada, escuchada y completamente satisfecha.',
    pathProfile: 'https://i.pinimg.com/736x/7e/46/c6/7e46c6d2798eff446b365c5246f4c9ca.jpg',
    role: 'Cofundador & Director de Experiencia'
  }
]

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-pink-50 min-h-screen">
      <div 
        className='relative w-full h-[90vh] bg-cover bg-center'
        style={{ backgroundImage: `url(${aboutUsImage})` }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70'></div>
        <div className='relative h-full flex items-center justify-center px-6'>
          <div className='text-center text-white max-w-4xl'>
            <h1 className='text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg'>Donde tus uñas cuentan una historia</h1>
            <p className='text-xl md:text-2xl leading-relaxed drop-shadow-md'>Descubre la combinación perfecta de arte, belleza y cuidado en cada detalle. Porque unas manos impecables son el reflejo de tu estilo y personalidad.</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pink-700 mb-3">Nuestra Misión</h3>
              <p className="text-gray-700">Ofrecer servicios de belleza excepcionales que realcen la confianza y estilo único de cada cliente.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">Nuestra Visión</h3>
              <p className="text-gray-700">Ser el spa de uñas líder reconocido por innovación, calidad y experiencia excepcional del cliente.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Nuestros Valores</h3>
              <p className="text-gray-700">Excelencia, innovación, profesionalismo y dedicación en cada servicio que ofrecemos.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">Nuestros Fundadores</h2>
              <div className="h-1 bg-pink-600 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">El equipo visionario detrás de tu experiencia de belleza y bienestar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamWork.map((worker, index) => (
              <Card key={index} worker={worker} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;