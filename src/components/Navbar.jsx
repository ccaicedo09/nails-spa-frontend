// import spectreLogo from '../assets/spectre-logo.svg';
import spectreLogo from '../assets/logo.png'


function Navbar() {
  return (
    <>
    <header className="navbar p-sticky  bg-secondary px-30">
        <section className="navbar-section">
          <a href="#" className="btn btn-link ">Sobre nosotros</a>
          <a href="#" className="btn btn-link ">Nuestras sedes</a>
        </section>
        <section className="navbar-center">
          <a href="/"  rel="noopener noreferrer">
              <img src={spectreLogo} className="logo" alt="Spectre logo" />
          </a>
        </section>
        <section className="navbar-section">
          <a href="#" className="btn btn-link ">Nuestros servicios</a>
          <a href="#" className="btn btn-link ">Api</a>
        </section>
      </header>
    </>
  )
}

export default Navbar;