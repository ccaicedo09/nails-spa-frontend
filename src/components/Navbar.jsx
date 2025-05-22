import nailsLogo from '../assets/logo.svg';
import './styles/Navbar.css'; 

function Navbar() {
  return (
    <header className="navbar bg-secondary compact-navbar">
      <section className="navbar-section">
        <a href="/sobre-nosotros" className="btn btn-link">Nosotros</a>
        <a href="/sedes" className="btn btn-link">Sedes</a>
      </section>
      <section className="navbar-center">
        <a href="/" rel="noopener noreferrer">
          <img src={nailsLogo} className="logo" alt="Nails Spa Logo" />
        </a>
      </section>
      <section className="navbar-section">
        <a href="/servicios" className="btn btn-link">Servicios</a>
        <a href="/citas" className="btn btn-link">Citas</a>
      </section>
    </header>
  );
}

export default Navbar;