import React from 'react';
import { jsPDF } from 'jspdf';
import { getAllServicesRequest } from '../api/services';
import { Service } from '../types/servicios';
// @ts-ignore
import PDFLogo from '../assets/pdf.svg';
import './styles/about/PDFCard.css';

const PDFCard: React.FC = () => {
  const handleGeneratePDF = async () => {
    try {
      const res = await getAllServicesRequest();
      const services: Service[] = res.data.services;

      if (!services || services.length === 0) {
        alert('No hay servicios disponibles para generar el PDF.');
        return;
      }

      const doc = new jsPDF();

      // Header
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('Nails Spa', 105, 15, { align: 'center' });
      
      doc.setFontSize(16);
      doc.text('Carta de Servicios', 105, 25, { align: 'center' });

      // Line separator
      doc.setDrawColor(236, 72, 153); // pink-500
      doc.setLineWidth(0.5);
      doc.line(20, 30, 190, 30);

      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');

      let y = 40;

      services.forEach((service, index) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }

        // Service number and name
        doc.setFont('helvetica', 'bold');
        doc.text(`${index + 1}. ${service.name}`, 20, y);
        
        doc.setFont('helvetica', 'normal');
        
        // Description
        doc.text(`   ${service.description}`, 20, y + 6);
        
        // Price
        doc.setFont('helvetica', 'bold');
        doc.text(`   Precio: $${service.price.toLocaleString()}`, 20, y + 12);
        
        // Duration
        doc.setFont('helvetica', 'normal');
        doc.text(`   Duración: ${service.duration} minutos`, 20, y + 18);
        y += 26;

        // Separator line
        if (index < services.length - 1) {
          doc.setDrawColor(229, 231, 235); // gray-200
          doc.setLineWidth(0.2);
          doc.line(20, y, 190, y);
          y += 8;
        }
      });

      // Footer on last page
      const pageCount = doc.getNumberOfPages();
      doc.setPage(pageCount);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text('www.nailsspa.com | Contacto: info@nailsspa.com', 105, 285, { align: 'center' });

      doc.save('carta-servicios-nailsspa.pdf');
    } catch (error) {
      console.error('Error generando el PDF:', error);
      alert('Hubo un error generando la carta de servicios. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300'>
      <div className='mb-6'>
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <img src={PDFLogo} alt='PDF logo' className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Carta de Servicios</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Descubre todos los tratamientos y cuidados que ofrecemos para tus uñas.
        </p>
      </div>

      <button 
        className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto gap-3' 
        onClick={handleGeneratePDF}
      >
        <img src={PDFLogo} alt='PDF logo' className="w-6 h-6" />
        Generar Carta PDF
      </button>
    </div>
  );
};

export default PDFCard;