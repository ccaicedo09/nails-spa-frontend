import spectreLogo from '../assets/spectre-logo.svg';

function Navbar() {
  return (
    <>
      <header className="navbar">
        <section className="navbar-section">
          <a href="#" className="btn btn-link">Docs</a>
          <a href="#" className="btn btn-link">Examples</a>
        </section>
        <section className="navbar-center">
          <a href="https://picturepan2.github.io/spectre/index.html" target="_blank" rel="noopener noreferrer">
              <img src={spectreLogo} className="logo" alt="Spectre logo" />
          </a>
        </section>
        <section className="navbar-section">
          <a href="#" className="btn btn-link">Twitter</a>
          <a href="#" className="btn btn-link">GitHub</a>
        </section>
      </header>
    </>
  )
}

export default Navbar;