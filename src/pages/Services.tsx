import React from 'react';
import PDFCard from '../components/PDFCard';
import Schedule from '../components/Schedule';

const Services = () => {
  return (
    <div className="text-primary" style={{fontSize:'1rem', display: 'flex', flexWrap: 'wrap', gap: 32, minHeight: '100vh', padding: 24 }}>
      <PDFCard />
      <Schedule />
    </div>
  );
}

export default Services;