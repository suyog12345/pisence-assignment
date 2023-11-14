import React from 'react';
import './Sidebar.css'; // Add styles for the sidebar
import home from '../../assets/home.png'
import library from '../../assets/library.png'
import cctv2 from '../../assets/cctv2.png'
import book from '../../assets/book.png'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="close-btn">
        &times;
      </button>
      <div>
        <p > <img src={home}/>Summary Dashboard</p>
      </div>
      <p><img src={library}/> Attendence Tracking</p>
      <p> <img src={cctv2}/> Behavioral Analytics</p>
      <p><img src={book}/> Academic Performance Tracking</p>
    </div>
  );
};

export default Sidebar;
