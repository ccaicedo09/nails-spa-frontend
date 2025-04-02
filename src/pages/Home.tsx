import React from 'react'
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
    
      <section className='mx-30 mt-50'>
      
      {/* <Hero /> */}

      <div className='text-center text-dark hero'>
        <h1 className='text-4xl '>
        Bienvenidos a Nails Spa! 

        </h1>


      </div>

      <Carrousel />
      <section className='columns my-10'>
      <ImageComparision />
    
      <ImageComparision />

      </section>
     

      
    </section>
    <section className='bg-secondary col-12 px-30 my-10 py-30'>



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
                        <div className='card-body bg-dark text-light'>
                          <h4 className='text-center'>Nail Art</h4>
                          <p className='text-center'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                    <div className="column p-0 col-6 mt-2"  >
                    <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image18} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-light' >
                          <h4 className='text-center'>Nail Art</h4>
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
                        <div className='card-body bg-dark text-light'>
                          <h4 className='text-center'>Nail Art</h4>
                          <p className='text-center'>Diseños de uñas creativos y personalizados.</p>
                        </div>
                      </div>
                    </div>
                    <div className="column col-6"  >
                    <div className='card my-10'>
                        <div className="card-image">
                        <img  className="img-responsive"src={image20} alt=''   />
                        </div>
                        <div className='card-body bg-dark text-light'>
                          <h4 className='text-center'>Nail Art</h4>
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
      <section id='gabo' className='mx-30'>
        {/* <Modals /> */}
        <GithubCard />
      </section>
      <section className='bg-dark'>
        <footer className='text-center text-light py-20'>
          <p>&copy; 2025 Nails Spa. Todos los derechos reservados.</p>
          <p > 
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