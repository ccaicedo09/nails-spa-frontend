import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Sedes from './pages/Sedes';
import Login from './pages/Login';

import Appointments from './pages/Appointments';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/register', element: <Register />},
    { path: '/login', element: <Login/> },
    { path: '/about', element: <About /> },
    { path: '/services', element: <Services /> },
    { path: '/sedes', element: <Sedes />},
    { path: '/citas', 
      element: (
        <ProtectedRoute>
          <Appointments />
        </ProtectedRoute>
      )
    },
  ]); 

  return routes;
}

export default AppRoutes;