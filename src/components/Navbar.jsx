  import { useNavigate } from 'react-router-dom';
import nailsLogo from '../assets/logo.svg';
import './styles/Navbar.css'; 
import { logoutAccount } from '../api/auth';
import axios from 'axios';
import { useContext } from 'react';
import { isAuthenticatedContext } from '../context/IsAuthenticatedContext';

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(isAuthenticatedContext);

  const handleLogout = async () => {
    try {
      const response = await logoutAccount();
      alert(response.data.message || "Sesión cerrada correctamente");
      setIsAuthenticated(false);
      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.error || "Error al cerrar sesión");
      } else {
        alert("Error inesperado al cerrar sesión");
      }
    }
  };

  return (
    <header className="sticky top-0 w-full bg-gray-100/80 backdrop-blur border-b border-gray-200 flex items-center justify-between px-24 py-2 z-50">
      <section className="flex items-center gap-2">
        <a href="/about" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Sobre nosotros</a>
        <a href="/sedes" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Nuestras sedes</a>
      </section>
      <section className="flex-1 flex items-center justify-center">
        <a href="/"  rel="noopener noreferrer">
            <img src={nailsLogo} className="logo" alt="Spectre logo" />
        </a>
      </section>
      <section className="flex items-center gap-2">
        <a href="/services" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Nuestros servicios</a>
        <a href="/citas" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Agenda tu cita</a>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-transparent text-blue-600 hover:underline px-2 py-1"
          >
            Cerrar sesión
          </button>
        ) : (
          <a
            href="/login"
            className="bg-transparent text-blue-600 hover:underline px-2 py-1"
          >
            Iniciar Sesión
          </a>
        )}
      </section>
    </header>
  )
}

export default Navbar;