// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; 
import hamburger from '../../assets/hamburger.png'
import user from '../../assets/user.png'
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="left-item"> <img src= {hamburger} onClick={toggleSidebar} className="hamburger-btn"/>  </div>
      <div className="right-item"><img src= {user} /> </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
