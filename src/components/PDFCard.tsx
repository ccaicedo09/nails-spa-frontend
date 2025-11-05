import React from 'react';
import { jsPDF } from 'jspdf';
import { getAllServicesRequest } from '../api/services';
import { Service } from '../types/servicios';
// @ts-ignore
import PDFLogo from '../assets/pdf.svg';
import './styles/about/PDFCard.css';



const PDFCard = ({services}: {services: Service[]}) => {
  const handleGeneratePDF = async () => {
    try {
     

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
      doc.setDrawColor(236, 72, 153); 
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
          doc.setDrawColor(229, 231, 235); 
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

      const pdfURL = doc.output('bloburl');
      window.open(pdfURL, '_blank');

    } catch (error) {
      console.error('Error generando el PDF:', error);
      alert('Hubo un error generando la carta de servicios. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8" style={{flexGrow: 1, minWidth: 300}}>
      <div className="text-center mb-6">
        <div className="inline-block bg-blue-500 rounded-2xl p-3 mb-3 shadow-md">
          <span className="text-3xl">📄</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Carta de Servicios</h3>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-xl">💅</span>
            <span className="font-semibold text-gray-800">Todos los servicios</span>
          </div>
          <span className="bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-full text-sm">
            Disponible
          </span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-xl">💰</span>
            <span className="font-semibold text-gray-800">Precios actualizados</span>
          </div>
          <span className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full text-sm">
            2024
          </span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-xl">⏱️</span>
            <span className="font-semibold text-gray-800">Duración incluida</span>
          </div>
          <span className="bg-purple-100 text-purple-600 font-semibold px-3 py-1 rounded-full text-sm">
            Completo
          </span>
        </div>
      </div>
      
      <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
        <p className="text-gray-700 text-sm text-center mb-3 font-medium">
          📄 Incluye precios y duraciones
        </p>
        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md" 
          onClick={handleGeneratePDF}
        >
          Ver Carta PDF
        </button>
      </div>
    </div>
  );
};

export default PDFCard;