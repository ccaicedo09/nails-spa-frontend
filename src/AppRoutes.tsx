import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Sedes from './pages/Sedes';
import Appointments from './pages/Appointments';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sobre-nosotros', element: <About /> },
    { path: '/servicios', element: <Services /> },
    { path: '/sedes', element: <Sedes />},
    { path: '/citas', element: <Appointments />}
  ]);

  return routes;
}

export default AppRoutes;