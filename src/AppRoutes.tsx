import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Sedes from './pages/Sedes';
import Api from './pages/Api';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/services', element: <Services /> },
    { path: '/sedes', element: <Sedes />},
    { path: '/api', element: <Api />}
  ]);

  return routes;
}

export default AppRoutes;