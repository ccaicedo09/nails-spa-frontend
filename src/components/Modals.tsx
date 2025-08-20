import React, { useState } from 'react';

// import 'spectre.css/dist/spectre.min.css';
// import 'spectre.css/dist/spectre-icons.min.css';
// import 'spectre.css/dist/spectre-exp.min.css';

const Modals = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSmallModal, setShowSmallModal] = useState<boolean>(false);
  const [showLargeModal, setShowLargeModal] = useState<boolean>(false);

  const openModal = (type: 'default' | 'large' | 'small') => {
    switch (type) {
      case 'default':
        setShowModal(true);
        break;
      case 'large':
        setShowLargeModal(true);
        break;
      case 'small':
        setShowSmallModal(true);
        break;
    }
  };

  const closeModal = (type: 'default' | 'large' | 'small') => {
    switch (type) {
      case 'default':
        setShowModal(false);
        break;
      case 'large':
        setShowLargeModal(false);
        break;
      case 'small':
        setShowSmallModal(false);
        break;
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button 
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" 
          onClick={() => openModal('default')}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">📋</div>
            <div>Abrir Modal</div>
          </div>
        </button>
        <button 
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" 
          onClick={() => openModal('large')}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">📄</div>
            <div>Modal Grande</div>
          </div>
        </button>
        <button 
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" 
          onClick={() => openModal('small')}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">💬</div>
            <div>Modal Pequeño</div>
          </div>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center visible">
          <a onClick={() => closeModal('default')} className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-label="Close"></a>
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    📋
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-800">Información Importante</div>
                    <div className="text-gray-600">Detalles del servicio</div>
                  </div>
                </div>
                <button onClick={() => closeModal('default')} className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors" aria-label="Close">
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Bienvenido a Nails Spa</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En nuestro spa de uñas, nos dedicamos a proporcionar servicios de alta calidad para el cuidado y embellecimiento de tus uñas. 
                  Nuestro equipo de profesionales está comprometido con tu satisfacción.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-blue-800">
                    <strong>💡 Consejo:</strong> Para obtener mejores resultados, te recomendamos mantener tus uñas hidratadas y evitar el uso de productos químicos fuertes.
                  </p>
                </div>
                <button className="cursor-help bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg transition-colors" title="Información adicional sobre nuestros servicios">
                  ℹ️ Más información
                </button>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-semibold transition-colors" onClick={() => closeModal('default')}>
                Cancelar
              </button>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors" onClick={() => closeModal('default')}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}

      {showSmallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center visible">
          <a onClick={() => closeModal('small')} className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-label="Close"></a>
          <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-2xl">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    💬
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-800">Mensaje</div>
                    <div className="text-gray-600">Notificación</div>
                  </div>
                </div>
                <button onClick={() => closeModal('small')} className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors" aria-label="Close">
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No tienes mensajes nuevos</h3>
                <p className="text-gray-600 mb-6">Haz clic en el botón para iniciar una conversación.</p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLargeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center visible">
          <a onClick={() => closeModal('large')} className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-label="Close"></a>
          <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-2xl sticky top-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    📄
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-800">Guía Completa de Servicios</div>
                    <div className="text-gray-600">Información detallada</div>
                  </div>
                </div>
                <button onClick={() => closeModal('large')} className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors" aria-label="Close">
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestros Servicios Profesionales</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">💅 Semi-permanentes</h4>
                    <p className="text-blue-700 leading-relaxed">
                      Esmaltado semi-permanente que dura hasta 3 semanas. Perfecto para mantener tus uñas siempre perfectas.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">🎨 Diseños Personalizados</h4>
                    <p className="text-purple-700 leading-relaxed">
                      Diseños únicos y creativos adaptados a tu estilo personal. Desde diseños minimalistas hasta obras de arte.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">🔧 Acrílicos</h4>
                    <p className="text-green-700 leading-relaxed">
                      Extensiones acrílicas resistentes y duraderas. Ideal para uñas quebradizas o que necesitan más longitud.
                    </p>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-pink-800 mb-3">✨ Tratamientos Especiales</h4>
                    <p className="text-pink-700 leading-relaxed">
                      Tratamientos hidratantes y fortalecedores para mantener tus uñas saludables y hermosas.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">🌟 ¿Por qué elegirnos?</h4>
                  <ul className="text-orange-700 space-y-2">
                    <li>• Profesionales certificados y con experiencia</li>
                    <li>• Productos de alta calidad</li>
                    <li>• Ambiente relajante y acogedor</li>
                    <li>• Atención personalizada</li>
                    <li>• Garantía de satisfacción</li>
                  </ul>
                </div>

                <div className="text-center">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                    Reservar Cita Ahora
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-semibold transition-colors" onClick={() => closeModal('large')}>
                Cerrar
              </button>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors" onClick={() => closeModal('large')}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;