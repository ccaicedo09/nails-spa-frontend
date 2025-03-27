import React from 'react';
import Card from '../components/Card';
//@ts-ignore
import aboutUsImage from '/img/about_us.webp';
import './styles/About.css';

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
    <section style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
      <div className='about' style={{ width: '100%', height: '95vh', backgroundImage: `url(${aboutUsImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
        <div className='text-light'>
          <h1>Donde tus uñas cuentan una historia</h1>
          <p>Descubre la combinación perfecta de arte, belleza y cuidado en cada detalle. Porque unas manos impecables son el reflejo de tu estilo y personalidad.</p>
        </div>
      </div>

      <h2 className='text-center'>Expertos en nuestra pasión</h2>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
        {teamWork.map((worker, index) => (
          <Card key={index} worker={worker} />
        ))}
      </div>
    </section>
  )
}

export default About;