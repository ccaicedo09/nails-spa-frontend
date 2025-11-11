import './App.css'
// Eliminado: imports de Spectre. Estilos ahora provienen de Tailwind y spectre-compat.
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import Footer from './components/Footer'
import AuthProvider from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Contact />
        <Footer />
        <Toaster 
          position="top-left"
          reverseOrder={false}
          gutter={12}
        />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App