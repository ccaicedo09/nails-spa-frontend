import React from 'react';
import Card from '../components/Card';
//@ts-ignore
import aboutUsImage from '/img/about_us.webp';
import './styles/About.css';

const teamWork = [
  {
    name: 'Nathalia Avila Borrero',
    message: 'Visionaria y apasionada por la belleza de las uñas',
    role: 'Cofundadora & Directora General'
  },
  {
    name: 'Carlos Esteban Castro Caicedo',
    message: 'Especialista en calidad de producto.',
    role: 'Cofundador & Director de producto'
  },
  {
    name: 'Gabriel Andres Fajardo Ortiz',
    message: 'Lider de proyectos tecnológicos y desarrollo.',
    role: 'Cofundador & Director de tecnología'
  },
  {
    name: 'Julian Enrique Buitrago Charry',
    message: 'Experto en experiencia del cliente y diseño.',
    role: 'Cofundador & Director de experiencia'
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