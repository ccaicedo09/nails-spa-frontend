import React from 'react';
import Card from '../components/Card';
import PDFCard from '../components/PDFCard';
import Schedule from '../components/Schedule';
import Sucursal from '../components/Sucursal';
import Contact from '../components/Contact';

const teamWork = [
  {
    name: 'Esperanza Gomez',
    message: 'Aquí en nuestras instalaciones encontrarás un espacio diseñado para brindarte bienestar, belleza y comodidad. Somos un equipo apasionado por el detalle y la perfección, comprometidos en ofrecerte una experiencia única en cada visita.',
    pathProfile: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
    role: 'Diseñadora'
  },
  {
    name: 'Mia Khalifa',
    message: 'Nos especializamos en ofrecerte servicios de la más alta calidad, con técnicas innovadoras y un equipo de profesionales que cuidan cada detalle. Queremos que cada cliente se sienta especial y disfrute de una experiencia premium.',
    pathProfile: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
    role: 'Modelo'
  },
  {
    name: 'Lana Rhoades',
    message: 'En nuestro espacio encontrarás el equilibrio perfecto entre elegancia y bienestar. Nos enfocamos en brindarte un servicio impecable, con un ambiente acogedor donde cada cliente se siente valorado y atendido con profesionalismo.',
    pathProfile: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
    role: 'Publicista'
  }
]

const About = () => {
  return (
    <>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
        <div style={{  backgroundColor: '#8b0000', padding: 24, width: '100%' }}></div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
          <PDFCard />
          <Schedule />
        </div>
        
        <div style={{ backgroundColor: '#1E1E1E', padding: 24 }}>
          <h2 className='text-center' style={{ color: '#F5F5F5', marginBottom: 28 }}>Conoce cada una de nuestras sedes!</h2>
          <Sucursal url={'https://maps.app.goo.gl/hMh2G9v2sjZffuUj6'}/>
        </div>

        <h2 className='text-center'>Expertos en nuestra pasión</h2>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {teamWork.map((worker, index) => (
            <Card key={index} worker={worker} />
          ))}
        </div>

        <div style={{  backgroundColor: '#8b0000', padding: 24, width: '100%' }}></div>
      </section>

      <Contact />
    </>

  )
}

export default About;