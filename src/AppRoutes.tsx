import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
  ]);

  return routes;
}

export default AppRoutes;