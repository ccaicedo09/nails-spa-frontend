// import spectreLogo from '../assets/spectre-logo.svg';
import spectreLogo from '../assets/logo.png'


function Navbar() {
  return (
    <>
    <header className="navbar bg-secondary px-30">
        <section className="navbar-section">
          <a href="/about" className="btn btn-link ">Sobre nosotros</a>
          <a href="/sedes" className="btn btn-link ">Nuestras sedes</a>
        </section>
        <section className="navbar-center">
          <a href="/"  rel="noopener noreferrer">
              <img src={spectreLogo} className="logo" alt="Spectre logo" />
          </a>
        </section>
        <section className="navbar-section">
          <a href="/services" className="btn btn-link ">Nuestros servicios</a>
          <a href="/citas" className="btn btn-link ">Agenda tu cita</a>
        </section>
      </header>
    </>
  )
}

export default Navbar;