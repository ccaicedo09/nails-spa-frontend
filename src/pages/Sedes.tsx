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
    <div style={{ backgroundColor: '#1E1E1E', padding: 24, width: '100%', minHeight: 'calc(100vh - 8rem)' }}>
      <h2 className='text-center' style={{ color: '#F5F5F5', marginBottom: 28 }}>Conoce cada una de nuestras sedes!</h2>
      
      <Sucursal url={'https://maps.app.goo.gl/hMh2G9v2sjZffuUj6'}/>
      <Sucursal url={'https://maps.app.goo.gl/hMh2G9v2sjZffuUj6'}/>
      <Sucursal url={'https://maps.app.goo.gl/hMh2G9v2sjZffuUj6'}/>
    </div>
  );
}

export default Sedes;