import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './Sidebar';

// Import your page components
// import Home from '../pages/Home';
import Login from '../pages/Login';
// import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import SignUp from '../pages/SignUp';
import CustomerDashboard from '../pages/customerDashboard';
import ClientDashboard from '../pages/clientDashboard';
import StudentDashboard from '../pages/studentDashboard';
import LawyerDashboard from '../pages/lawyerDashboard';
import ProfileSettings from '../pages/ProfileSettings';
import LawTalkHub from '../pages/LawTalkHub';
import LegalLearning from '../pages/LegalLearning';
import LandingPage from '../pages/LandingPage';
import ExploreServices from '../pages/exploreServices';
import FindLawyer from '../pages/findLawyer';
import LawyerProfile from '../pages/LawyerProfile';
import BookConsultation from '../pages/BookConsultation';
// Define your routes configuration
export const routes = [
  {
    path: '/',
    element: <LandingPage />,
    name: 'Home'
  },
  {
    path: '/login',
    element: <Login />,
    name: 'Login'
  },
  {
    path: '/dashboard',
    element: <CustomerDashboard />,
    name: 'Dashboard'
  },
  {
    path: '/clientDashboard',
    element: <ClientDashboard />,
    name: 'ClientDashboard'
  },
  {
    path: '/studentDashboard',
    element: <StudentDashboard />,
    name: 'StudentDashboard'
  },
  {
    path: '/lawyerDashboard',
    element: <LawyerDashboard />,
    name: 'LawyerDashboard'
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
  },
  {
    path: '/exploreServices',
    element: <ExploreServices />,
    name: 'exploreServices'
  },
  {
    path: '/findLawyer',
    element: <FindLawyer />,
    name: 'findLawyer'
  },
  {
    path: '/lawyer/:id',
    element: <LawyerProfile />,
    name: 'lawyerProfile'
  },
  {
    path: '/book-consultation/:lawyerId',
    element: <BookConsultation />,
    name: 'bookConsultation'
  },
  {
    path: '/profile',
    element: <ProfileSettings />,
    name: 'ProfileSettings'
  },
  {
    path: '/lawtalk-hub',
    element: <LawTalkHub />,
    name: 'LawTalkHub'
  },
  {
    path: '/legal-learning',
    element: <LegalLearning />,
    name: 'LegalLearning'
  }
];

// Inner component to access location
const AppRouterInner: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signUp';
  const hideNavbar = isLoginPage || isSignUpPage;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app-container">
      {/* Navigation bar - hidden on login and signup pages */}
      {!hideNavbar && <Navbar onHamburgerClick={toggleSidebar} />}
      
      {/* Sidebar - available on all pages with navbar */}
      {!hideNavbar && <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />}
      
      {/* Main content area */}
      <main className="main-content" style={{ margin: 0, padding: 0 }}>
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
  );
};

// AppRouter component
const AppRouter: React.FC = () => {
  return (
    <Router>
      <AppRouterInner />
    </Router>
  );
};

export default AppRouter;