import React from 'react';
import Card from '../components/Card';
import PDFCard from '../components/PDFCard';
import Branch from '../components/Branch';
import Shecdule from '../components/Schedule';
import Contact from '../components/Contact';

const teamWork = [
  {
    name: 'Claudia Castro',
    message: 'La palabra perfecta que define a súper wow es FAMILIA por que es un lugar lleno de amor, paz, diversión, complicidad y sobre todo mucho profesionalismo. Siempre hacen que me sienta Súper WOW!!!',
    pathProfile: 'https://th.bing.com/th/id/OIP.mYEoUnMW0N6XkBCe_YmKwwAAAA?rs=1&pid=ImgDetMain',
    role: 'Actriz'
  },
  {
    name: 'Laura de Leon',
    message: 'Me encanta Superwow porque me dejan las uñas perfectas, me dura mucho más tiempo el esmalte y sus procesos de asepsia son impecables que es lo más importante para mí.',
    pathProfile: 'https://superwow.com.co/wp-content/uploads/2022/12/Claudia-castro.png',
    role: 'Modelo'
  },
  {
    name: 'Ana Maria Uribe',
    message: 'AMO ir a Súper Wow porque no existe lugar donde me sienta mas tranquila y en total confianza para entregar a ojos cerrados el cuidado de mis uñas ❤',
    pathProfile: 'https://superwow.com.co/wp-content/uploads/2022/12/Ana-maria-uribe.png',
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
          <Shecdule />
        </div>
        
        <div style={{ backgroundColor: '#1E1E1E', padding: 24 }}>
          <h2 className='text-center' style={{ color: '#F5F5F5', marginBottom: 28 }}>Conoce cada una de nuestras sedes!</h2>
          <Branch url={'https://maps.app.goo.gl/hMh2G9v2sjZffuUj6'}/>
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