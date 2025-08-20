import nailsLogo from '../assets/logo.svg';
import './styles/Navbar.css'; 

function Navbar() {
  return (
    <>
    <header className="sticky top-0 w-full bg-gray-100/80 backdrop-blur border-b border-gray-200 flex items-center justify-between px-24 py-2 z-50">
        <section className="flex items-center gap-2">
          <a href="/about" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Sobre nosotros</a>
          <a href="/sedes" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Nuestras sedes</a>
        </section>
        <section className="flex-1 flex items-center justify-center">
          <a href="/"  rel="noopener noreferrer">
              <img src={spectreLogo} className="logo" alt="Spectre logo" />
          </a>
        </section>
        <section className="flex items-center gap-2">
          <a href="/services" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Nuestros servicios</a>
          <a href="/citas" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Agenda tu cita</a>
        </section>
      </header>
    </>
  )
}

export default Navbar;