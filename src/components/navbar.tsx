import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './navbar-clean.css';
import { useState } from 'react';
import menuIcon from '../assets/menu.png'; // Using the original menu icon

const Navbar = () => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='navbar'>
            <div style={{display:"flex",flexDirection:"row",gap:"0.2rem",fontSize:"30px",marginBottom:"-25px",marginLeft:"15px"}}>

                    <p style={{color:"#3A8DFF",font:"Inter"}}>Law </p>
                    <p style={{color:"#1E1E1E"}}>You</p>
            </div>
            {/* Hamburger icon for sidebar */}
            <img
                src={menuIcon}
                alt="menu"
                className="hamburger-icon"
                onClick={() => setSidebarOpen(prev => !prev)}
            />

            {/* Sidebar menu */}
            <div className={`sidebar-menu${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)}>
                <div className="sidebar-content" onClick={e => e.stopPropagation()}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setSidebarOpen(false)}>
                        Home
                    </Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setSidebarOpen(false)}>
                        About
                    </Link>
                    <Link to="/login" className={location.pathname === '/login' ? 'active' : ''} onClick={() => setSidebarOpen(false)}>
                        Login
                    </Link>
                    <Link to="/Home" className={location.pathname === '/login' ? 'active' : ''} onClick={() => setSidebarOpen(false)}>
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar