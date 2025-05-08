import React from 'react'
//Css
// import './Home.css'

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
import image18 from '/img/test_img_18.png'
import image17 from '/img/test_img_17.png'





const Home = () => {
  return (
    <>
    
      <section className='mx-30 mt-80'>
      
      {/* <Hero /> */}

      <div className='text-center  hero py-30 bg-hero'>	
        <h1 className='text-hero'>
        Bienvenidos a Nails Spa! El lugar adecuado para tus uñas. 
        </h1>
        <p className=''>Descubre nuestros servicios </p>
        


      </div>

      {/* <Carrousel /> */}
      

      
    </section>
    <section className='bg-secondary col-12 px-30  py-30'>



        <div  className='text-center text-primary'>
          <div className="container">
              <div className="columns">
                <div className="column p-0 col-12" >
                  <div className="columns">
                    <div className="column col-6 mt-2" >
                      <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image17} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-primary'>
                          <h4 className='text-center'>Semi-permanentes</h4>
                          <p className='text-center'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                    <div className="column p-0 col-6 mt-2"  >
                    <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image18} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-primary' >
                          <h4 className='text-center'>Press on</h4>
                          <p className='text-center'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column col-6"  >
                    <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image19} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-primary'>
                          <h4 className='text-center'>Acrilicos</h4>
                          <p className='text-center'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                    <div className="column col-6"  >
                    <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image20} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-primary'>
                          <h4 className='text-center'>Permanentes</h4>
                          <p className='text-center'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        



      </section>
      <section id='gabo' className='mx-30 py-30'>

      <section className='columns my-30'>
      {/* <ImageComparision /> */}
    
    <code className='column col-6 hero text-opinion text-primary'>Mis uñas quedaron espectacular! Se los recomiendo!
      
    </code>
      <ImageComparision />

      </section>

      <section className='columns '>
      {/* <ImageComparision /> */}
    
    
      <ImageComparision />
      <code className='column col-6 hero text-opinion text-primary'>Mis uñas quedaron muy mal!No se los recomiendo!
      
    </code>

      </section>
     
        
      </section>
      <section className='bg-footer'>
        <footer className='text-center text-light bg- py-20'>
          <p>&copy; 2025 Nails Spa. Todos los derechos reservados.</p>
          <p style={{marginBottom: '0'}}> 
        Síguenos en{' '}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-primary'>
          Instagram
        </a>{' '}
        y{' '}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-primary'>
          Facebook
        </a>.
          </p>
        </footer>
      </section>
    </>
  )
}

export default Home;