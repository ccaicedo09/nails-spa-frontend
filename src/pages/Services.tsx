import React from 'react';
import PDFCard from '../components/PDFCard';
import Schedule from '../components/Schedule';

const Services = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
      <PDFCard />
      <Schedule />
    </div>
  );
}

export default Services;