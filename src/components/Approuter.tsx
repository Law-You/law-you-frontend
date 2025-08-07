import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './navbar';

// Import your page components
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import SignUp from '../pages/SignUp';

// Define your routes configuration
export const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'Home'
  },
  {
    path: '/login',
    element: <Login />,
    name: 'Login'
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    name: 'Dashboard'
  },
  {
    path: '/about',
    element: <About />,
    name: 'About'
  },
  {
    path: '/signUp',
    element: <SignUp />,
    name: 'signUp'
  }
];

// AppRouter component
const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation bar will be shown on all pages */}
        <Navbar />
        
        {/* Main content area */}
        <main className="main-content">
          <Routes>
            {/* Map through routes configuration */}
            {routes.map((route, index) => (
              <Route 
                key={index} 
                path={route.path} 
                element={route.element} 
              />
            ))}
            
            {/* Catch-all route - redirect to home if no match */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRouter;