import './App.css'
// Eliminado: imports de Spectre. Estilos ahora provienen de Tailwind y spectre-compat.
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Contact />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App