import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import spectreLogo from './assets/spectre-logo.svg'
import './App.css'
import 'spectre.css/dist/spectre.min.css'

// import 'spectre.css/dist/spectre-icons.min.css'
import 'spectre.css/dist/spectre-exp.min.css'
import Modals from './components/Modals'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GithubCard from './components/GitHubCard'
import Carrousel from './components/Carrousel'
import ImageComparision from './components/ImageComparision'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <section className='mx-10'>
      <Carrousel />
      <Hero />
      <ImageComparision />

      <section className='text-center'>
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
      </section>
    </section>

  
      
     
      

      <section className='bg-secondary col-12'>
      
        
        
        <div style={{height: '100px'}} className='text-center text-primary'>
          <h1>
            Colombia vs brasil
          </h1>
        </div>
        
      

      </section>

      <section id='gabo' className='mx-10'>
        <Modals />
        <GithubCard />
      </section>
    </>
  )
}

export default App
