// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home"></Link></li>
        <li><Link to="/About"></Link></li>
        <li><Link to="/Courses"></Link></li>
        <li><Link to="/StudentList"></Link></li>
        <li><Link to="/MyNotes"></Link></li>
        {/* Ajoutez d'autres liens selon le rôle si nécessaire */}
      </ul>
    </nav>
  );
};

export default Navbar;