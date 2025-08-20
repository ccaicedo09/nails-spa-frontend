import React from 'react'
import { useFormContext } from './AppointmentFormContext';
import { useAppointmentNavigation } from '../../hooks/useAppointmentNavigation';

const FormControls = () => {
    const { currentStep } = useFormContext();
    const {
      startDate,
      endDate,
      specialist,
      services,
      showModal,
      setShowModal,
      handleNext,
      handlePrev,
      handleConfirm,
      handleReset,
      handleGoHome,
    } = useAppointmentNavigation();

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-center gap-6">
          <button 
            className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2" 
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior
          </button>
          
          {currentStep === 3 ? (
            <button 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2" 
              onClick={handleConfirm}
            >
              Confirmar Cita
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          ) : (
            <button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2" 
              onClick={handleNext}
            >
              Continuar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Modal de Confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">Confirmación de cita</h3>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setShowModal(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-6 space-y-4">
              {/* Especialista */}
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {specialist?.name?.charAt(0) || 'E'}
                </div>
                <div>
                  <p className="text-sm text-gray-600">Especialista</p>
                  <p className="font-semibold text-gray-800">{specialist?.name}</p>
                </div>
              </div>

              {/* Servicios */}
              <div>
                <p className="font-semibold text-gray-800 mb-2">Servicios seleccionados:</p>
                <div className="space-y-2">
                  {services.map((service) => (
                    <div key={service.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">{service.name}</p>
                        <p className="text-sm text-gray-600">{service.estimated_duration} min</p>
                      </div>
                      <p className="font-semibold text-green-600">
                        ${service.price.toLocaleString("es-CO")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fecha y Hora */}
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="font-semibold text-gray-800 mb-1">Fecha y hora:</p>
                <p className="text-gray-700">
                  {startDate?.toLocaleDateString("es-CO", {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-gray-700">
                  De {startDate?.toLocaleTimeString("es-CO", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })} a {endDate?.toLocaleTimeString("es-CO", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200">
              <button 
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={handleReset}
              >
                Hacer otra cita
              </button>
              <button 
                className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={handleGoHome}
              >
                Ir al inicio
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormControls;