import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
  ]);

  return routes;
}

export default AppRoutes;