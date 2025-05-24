// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Assurez-vous d'avoir ce composant

const LayoutWithNavbar = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet /> {/* Ceci affichera les composants enfants (Student, Teacher, AdminPage) */}
      </div>
    </>
  );
};

export default LayoutWithNavbar;