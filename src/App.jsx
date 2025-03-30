import './App.css'
import '../spectre.css/dist/spectre.min.css'
// import 'spectre.css/dist/spectre-icons.min.css'
import '../spectre.css/dist/spectre-exp.min.css'
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