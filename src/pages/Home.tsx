import React from 'react'
import './styles/Home.css'
import Carrousel from '../components/Carrousel'
import FeaturedServices from '../components/FeaturedServices'
import Schedule from '../components/Schedule'
import PDFCard from '../components/PDFCard'
import Footer from '../components/Footer'

// gallery images referenced directly from /public/img

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="bg-pink-50 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 leading-tight">Belleza y cuidado para tus uñas</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">Relájate y deja que nuestros expertos transformen tus manos y pies. Reserva tu cita hoy y vive la experiencia Nails Spa.</p>
            <div className="mt-6 flex gap-4">
              <a href="/citas" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold">Reservar ahora</a>
              <a href="/services" className="bg-white border border-pink-200 text-pink-700 px-6 py-3 rounded-full font-semibold">Ver servicios</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Abierto hoy • 9:00 - 20:00 • Atención personalizada</div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Carrousel />
            </div>
          </div>
        </div>
      </section>

      {/* Featured services — denser cards */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros servicios destacados</h2>
          <p className="text-gray-600 mb-6">Tratamientos diseñados para tu estilo y comodidad.</p>
          <FeaturedServices />
        </div>
      </section>

      {/* Gallery + Newsletter */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-semibold mb-4">Galería</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <img src="/img/test_img_21.png" className="w-full h-44 object-cover rounded-lg" alt="gallery1" />
            <img src="/img/test_img_22.png" className="w-full h-44 object-cover rounded-lg" alt="gallery2" />
            <img src="/img/test_img_23.png" className="w-full h-44 object-cover rounded-lg" alt="gallery3" />
            <img src="/img/test_img_24.png" className="w-full h-44 object-cover rounded-lg" alt="gallery4" />
          </div>

          <div className="bg-pink-50 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-pink-700">Suscríbete a nuestras novedades</h4>
              <p className="text-gray-600">Recibe promociones y tips de cuidado para uñas en tu correo.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input className="px-4 py-2 rounded-lg border border-pink-200" placeholder="Tu correo" />
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">Suscribirme</button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-6">Testimonios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">M</div>
                <div>
                  <div className="font-semibold">María González</div>
                  <div className="text-sm text-gray-500">Cliente frecuente</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Mis uñas quedaron espectaculares! El servicio es excepcional y los diseños son únicos."</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <div className="font-semibold">Ana Rodríguez</div>
                  <div className="text-sm text-gray-500">Nueva cliente</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Primera vez que vengo y quedé completamente satisfecha. El personal es muy profesional."</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;
