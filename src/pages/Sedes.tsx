import React from 'react';
import Sucursal from '../components/Sucursal';
import './styles/Sedes.css'

const sucursals = [
  {
    id: 1,
    title: "Principal",
    address: "Carrera 7 #25-40, Neiva, Huila.",
    body: "Nuestro spa de uñas en Neiva ofrece un espacio moderno y relajante, ideal para el cuidado y embellecimiento de tus manos y pies.",
    src: "https://superwow.com.co/wp-content/uploads/2022/11/Calle122_WEB-3.jpg",
    addressUrl: "https://maps.app.goo.gl/hMh2G9v2sjZffuUj6"
  },
  {
    id: 2,
    title: "San Pedro",
    address: "Calle 10 #15-32, Neiva, Huila.",
    body: "En nuestra sucursal San Pedro, te ofrecemos un ambiente acogedor con atención personalizada garantizada.",
    src: "https://spaseekers.imgix.net/m/0/dunstonpedicurestations.jpg?auto=format",
    addressUrl: "https://maps.app.goo.gl/hMh2G9v2sjZffuUj6"
  },
  {
    id: 3,
    title: "Zona Norte",
    address: "Avenida Circunvalar #45-67, Neiva, Huila.",
    body: "Ubicado en la zona norte de Neiva, este spa combina técnicas modernas y productos de alta calidad para brindarte un cuidado completo.",
    src: "https://www.smergers.com/media/businessphoto/53814-1607752833-435eccf3-bb37-4b1f-8c73-bf84bf4363a9.jpg",
    addressUrl: "https://maps.app.goo.gl/hMh2G9v2sjZffuUj6"
  }
]

const Sedes = () => {
  return (
    <div className='sedes-container'>
      <h2 className='text-center'>Conoce cada una de nuestras sedes!</h2>

      <section className='flex-container'>
        {sucursals.map((sucursal) => {
          return (
            <Sucursal sucursal={sucursal} key={sucursal.id}/>
          );
        })}
      </section>
    </div>
  );
}

export default Sedes;