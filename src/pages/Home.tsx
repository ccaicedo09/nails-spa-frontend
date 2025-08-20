import React from 'react'
//Css
 import './Home.css'

//@ts-ignore
import reactLogo from '../assets/react.svg'
//@ts-ignore
import viteLogo from '/vite.svg'
//@ts-ignore
import spectreLogo from '../assets/spectre-logo.svg'
import Hero from '../components/Hero'
import GithubCard from '../components/GitHubCard'
import Carrousel from '../components/Carrousel'
import ImageComparision from '../components/ImageComparision'
import Modals from '../components/Modals'

import image20 from '/img/test_img_20.png'
import image19 from '/img/test_img_19.png'
import image9 from '/img/test_img_9.png'
import image17 from '/img/test_img_17.png'
import Footer from '../components/Footer'





const Home = () => {
  return (
    <>
    
      <section className='mx-30'>
      
      {/* <Hero /> */}

      <div className='relative text-center py-24 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl overflow-hidden'>	
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className='text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight'>
            Bienvenidos a Nails Spa!
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 mb-8'>El lugar perfecto para el cuidado de tus uñas</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Descubre nuestros servicios
          </button>
        </div>
      </div>


     
      {/* <Carrousel /> */}
      

      
    </section>
    <div className='col-span-12 px-24 w-full rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-center py-12'>
      <h2 className='text-4xl md:text-5xl font-bold text-blue-600 mb-4'>
        Somos los mejores en el sector de uñas!
      </h2>
      <p className='text-xl text-gray-600'>
        Conócenos y sé parte de nuestra comunidad
      </p>
    </div>
    <section className='bg-gradient-to-br from-gray-50 to-white py-20'>

        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>Nuestros Servicios</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Descubre nuestra amplia gama de servicios profesionales para el cuidado y embellecimiento de tus uñas</p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={image17} alt='Semi-permanentes' />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className='p-6'>
                <h4 className='text-xl font-bold text-gray-800 mb-3 text-center'>Semi-permanentes</h4>
                <p className='text-gray-600 text-center leading-relaxed'>Diseños de uñas creativos y personalizados que duran semanas.</p>
                <div className="mt-4 text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            </div>

            <div className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={image9} alt='Press on' />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className='p-6'>
                <h4 className='text-xl font-bold text-gray-800 mb-3 text-center'>Press on</h4>
                <p className='text-gray-600 text-center leading-relaxed'>Uñas postizas de alta calidad con diseños únicos.</p>
                <div className="mt-4 text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            </div>

            <div className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={image19} alt='Acrílicos' />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className='p-6'>
                <h4 className='text-xl font-bold text-gray-800 mb-3 text-center'>Acrílicos</h4>
                <p className='text-gray-600 text-center leading-relaxed'>Extensiones acrílicas resistentes y duraderas.</p>
                <div className="mt-4 text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            </div>

            <div className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={image20} alt='Permanentes' />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className='p-6'>
                <h4 className='text-xl font-bold text-gray-800 mb-3 text-center'>Permanentes</h4>
                <p className='text-gray-600 text-center leading-relaxed'>Tratamientos permanentes para uñas perfectas.</p>
                <div className="mt-4 text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        



      </section>
      <section id='testimonios' className='py-20 bg-gradient-to-br from-blue-50 to-indigo-50'>

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>Testimonios de Clientes</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Descubre lo que dicen nuestros clientes satisfechos sobre nuestros servicios</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className='bg-white rounded-3xl p-8 shadow-xl'>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  M
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">María González</h4>
                  <p className="text-gray-600">Cliente frecuente</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Mis uñas quedaron espectaculares! El servicio es excepcional y los diseños son únicos. 
                Definitivamente se los recomiendo a todas mis amigas."
              </p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className='bg-white rounded-3xl p-8 shadow-xl'>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  A
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Ana Rodríguez</h4>
                  <p className="text-gray-600">Nueva cliente</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Primera vez que vengo y quedé completamente satisfecha. 
                El personal es muy profesional y los resultados superaron mis expectativas."
              </p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

          </div>
        </div>

      </section>
      <section className='bg-footer'>
        <Footer />
      </section>
    </>
  )
}

export default Home;