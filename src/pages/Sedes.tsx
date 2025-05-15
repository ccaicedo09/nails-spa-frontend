import React from 'react';
import Sucursal from '../components/Sucursal';

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