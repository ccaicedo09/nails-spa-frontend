import React, { useEffect, useState } from 'react'
import Carrousel from '../components/Carrousel'
import FeaturedServices from '../components/FeaturedServices'
import { Service } from '../types/servicios'
import { getAllServicesRequest } from '../api/services'

const Home = () => {

  const [services, setServices] = useState<Service[]>([]);
  
    useEffect(() => {
       const fetchServices = async () => {
         const res = await getAllServicesRequest();
         const services: Service[] = res.data.services.slice(0, 4); 
         setServices(services);
       };
       fetchServices();
    }, []);
  return (
    <div className="bg-gradient-to-b from-white to-pink-50">
      <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-pink-700 leading-tight mb-6">Belleza y cuidado para tus uñas</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">Relájate y deja que nuestros expertos transformen tus manos y pies. Reserva tu cita hoy y vive la experiencia Nails Spa.</p>
            <div className="flex gap-4">
              <a href="/citas" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg">Reservar ahora</a>
              <a href="/services" className="bg-white hover:bg-pink-50 border border-pink-200 text-pink-700 px-8 py-3 rounded-full font-semibold transition-colors shadow-md">Ver servicios</a>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Carrousel />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Nuestros servicios destacados</h2>
            <p className="text-gray-600 text-lg">Tratamientos diseñados para tu estilo y comodidad</p>
          </div>
          <FeaturedServices services={services}/>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Galería</h3>
            <p className="text-gray-600 text-lg">Descubre nuestros diseños y el arte en cada detalle</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <img src="/img/test_img_21.png" className="w-full h-44 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow" alt="gallery1" />
            <img src="/img/test_img_22.png" className="w-full h-44 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow" alt="gallery2" />
            <img src="/img/test_img_23.png" className="w-full h-44 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow" alt="gallery3" />
            <img src="/img/test_img_24.png" className="w-full h-44 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow" alt="gallery4" />
          </div>

          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-pink-700">Suscríbete a nuestras novedades</h4>
              <p className="text-gray-600">Recibe promociones y tips de cuidado para uñas en tu correo.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input className="px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:outline-none" placeholder="Tu correo" />
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Suscribirme</button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Testimonios</h3>
            <p className="text-gray-600 text-lg">Lo que dicen nuestras clientas sobre su experiencia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
                <div>
                  <div className="font-semibold text-gray-800">María González</div>
                  <div className="text-sm text-gray-500">Cliente frecuente</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed">"Mis uñas quedaron espectaculares! El servicio es excepcional y los diseños son únicos."</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">A</div>
                <div>
                  <div className="font-semibold text-gray-800">Ana Rodríguez</div>
                  <div className="text-sm text-gray-500">Nueva cliente</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed">"Primera vez que vengo y quedé completamente satisfecha. El personal es muy profesional."</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">L</div>
                <div>
                  <div className="font-semibold text-gray-800">Laura Martínez</div>
                  <div className="text-sm text-gray-500">Cliente regular</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed">"El mejor spa de uñas en la ciudad. Siempre salgo sintiéndome renovada y feliz con el resultado."</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;
