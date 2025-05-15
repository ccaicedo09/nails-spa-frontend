import React from 'react';

const Footer = () => {
  return (
    <div className='bg-primary' style={{ padding: 24, width: '100%' }}>
      <span>&copy; 2025 Nails Spa. Todos los derechos reservados.</span>
          <span style={{marginBottom: '0'}}> 
        Síguenos en{' '}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='' style={{color: 'white', textDecoration: 'underline'}}>
          Instagram
        </a>{' '}
        y{' '}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='' style={{color: 'white', textDecoration: 'underline'}}>
          Facebook
        </a>.
          </span>
    </div>
  );
}

export default Footer;