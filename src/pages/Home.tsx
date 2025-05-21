import React from 'react'
//Css
 import './styles/Home.css'

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

const Home = () => {
  return (
    <>
    <section className='container home-container'>

    <section className="columns my-30 section-hero">
      <div className="column col-md-12 col-6 bg-secondary d-flex flex-column justify-center align-center text-center p-4">
        <div>
        <h2 className="text-center">Nails Spa</h2>
        <p className="text-primary">Manicures, Pedicures, y más.</p>
        <p className="text-primary">Localizados en Neiva, Huila.</p>
        </div>
      </div>

      <div className="column col-md-12 col-6 p-0">
        <Carrousel />
      </div>
    </section>    

    <section className='column col-12 px-30 hero bg-none text-opinion text-center text-primary'>
        <h4 className='text-center text-dark'>
          Somos los mejores en el sector de uñas
        </h4>
        <p>¡Conocénos y sé parte de nuestra comunidad!</p>
    </section>

    <section className='bg-secondary col-12 px-30  py-30'>

      <h5 className='text-center'>Nuestros servicios</h5>

        <div  className='text-center text-primary'>
          <div className="container">
              <div className="columns">
                <div className="column p-0 col-12" >
                  <div className="columns">
                    <div className="column col-lg-6 col-md-12 mt-2" >
                      <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image17} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-primary'>
                          <h4 className='text-center'>Acrilicas</h4>
                          <p className='text-center text-cards'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                    <div className="column  col-md-12 col-6 mt-2"  >
                    <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image9} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-primary' >
                          <h4 className='text-center'>Press on</h4>
                          <p className='text-center text-cards'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column col-md-12 col-6 "  >
                    <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image19} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-primary'>
                          <h4 className='text-center'>Permanentes</h4>
                          <p className='text-center text-cards'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                    <div className="column col-md-12 col-6 "  >
                    <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image20} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-primary'>
                          <h4 className='text-center'>Tratamientos</h4>
                          <p className='text-center text-cards'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </section>
     
    <h5 className='text-center'>Reseñas destacadas</h5>
   
     <section className="columns my-30 section-hero">
      
      <div className="column col-md-12 col-6 bg-secondary d-flex flex-column justify-center align-center text-center p-4">
        <div>
        <h6 className="text-center">Marta Diaz Lozano</h6>
        <p className="text-primary">Mis uñas quedaron espectacular! Se los recomiendo!</p>
        <div className="rating text-large">
          ⭐⭐⭐⭐☆
      </div>
      
        </div>
      </div>

      <div className="column comparation-section col-md-12 col-6 p-0">
        <ImageComparision />
      </div>
    </section>    

    <section className="columns my-30 section-hero">
      
         <div className="column comparation-section col-md-12 col-6 p-0">
        <ImageComparision />
      </div>

      <div className="column col-md-12 col-6 bg-secondary d-flex flex-column justify-center align-center text-center p-4">
        <div>
        <h6 className="text-center mt-2">Marta Diaz Lozano</h6>
        <p className="text-primary">Mis uñas quedaron espectacular! Se los recomiendo!</p>
        <div className="rating text-large">
          ⭐⭐⭐⭐☆
      </div>
      
        </div>
      </div>
      
    </section>    

    </section>
    </>
  );
}

export default Home;