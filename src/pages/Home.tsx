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
import image16 from '/img/test_img_16.png'




const Home = () => {
  return (
    <>
    <Carrousel />
      <section className='mx-30 '>
      
      <Hero />
      <ImageComparision />


      {/* <section className='text-center'>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://picturepan2.github.io/spectre/getting-started.html">
            <img src={spectreLogo} className='logo' alt="Spectre logo" />
          </a>
        </div>
        <h1>Vite + React + Spectre</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </section> */}
    </section>
    <section className='bg-secondary col-12 px-30 my-10'>



        <div  className='text-center text-primary'>
          <div className="container">
              <div className="columns">
                <div className="column col-6" >
                  <div className="columns">
                    <div className="column col-6" >
                      <img src={image17} alt='' style={{height: '120px'}}  />
                    </div>
                    <div className="column col-6" >
                    <img src={image16} alt='' style={{height: '120px'}}  />
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column col-6" >
                      <img src={image20} alt='' style={{height: '120px'}}  />
                    </div>
                    <div className="column col-6" >
                    <img src={image18} alt='' style={{height: '120px'}}  />
                    </div>
                  </div>
                </div>
                <div className="column col-6" >col-6</div>
              </div>
          </div>
        </div>

        



      </section>
      <section id='gabo' className='mx-30'>
        <Modals />
        <GithubCard />
      </section>
    </>
  )
}

export default Home;