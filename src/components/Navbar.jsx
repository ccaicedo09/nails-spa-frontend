  import { useEffect } from 'react';
import nailsLogo from '../assets/logo.svg';
import './styles/Navbar.css'; 
import { Link } from 'react-router-dom';
import { useAuthGlobal } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useAuthGlobal();
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/v1/auth/check', {
          credentials: 'include'
        })
        if (!res.ok) {
          setIsAuthenticated(false)
          return
        }

        const data = await res.json()
        const loggedIn = !!data.authenticated
        setIsAuthenticated(loggedIn)
      } catch (err) {
        console.error('Error verificando autenticación:', err)
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/auth/logout', {
        method: 'GET',
        credentials: 'include'
      })
      if (!res.ok) throw new Error('Error al cerrar sesión')

      const data = await res.json()
      console.log(data.message)

      setIsAuthenticated(false)
    } catch (err) {
      console.error('Error al cerrar sesión:', err)
    }
  }

  return (
    <>
    <header className="sticky top-0 w-full bg-gray-100/80 backdrop-blur border-b border-gray-200 flex items-center justify-between px-24 py-2 z-50">
        <section className="flex items-center gap-2">
          <Link to="/about" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Sobre nosotros</Link>
          <Link to="/sedes" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Nuestras sedes</Link>
        </section>
        <section className="flex-1 flex items-center justify-center">
          <Link to="/"  rel="noopener noreferrer">
              <img src={nailsLogo} className="logo" alt="Spectre logo" />
          </Link>
        </section>
        <section className="flex items-center gap-2">
          <Link to="/services" className="bg-transparent text-blue-600 hover:underline px-2 py-1">Nuestros servicios</Link>
          {isAuthenticated ? (
          <Link
            onClick={handleLogout}
            className="text-blue-600 px-3 py-1 rounded-md hover:text-blue-700 transition-all"
          >
            Cerrar sesión
          </Link>
          ) : (
          <Link
            to="/login"
            className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-all"
          >
            Iniciar sesión
          </Link>
          )}
        </section>
      </header>
    </>
  )
}

export default Navbar;