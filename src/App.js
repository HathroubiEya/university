import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LoginComp from './composants/LoginComp';
import HomeComp from './composants/HomeComp';
import Student from "./composants/Student";
import About from "./composants/About";
import Teacher from './composants/teacher';
import Courses from './composants/courses';
import StudentList from './composants/StudentList';
import AdminPage from './composants/AdminPage';
import MyNotes from './composants/MyNotes';
import InscriptionIset from './composants/InscriptionIset';
import PrivateRoute from './composants/PrivateRoute';
import LayoutWithNavbar from './composants/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages sans Navbar */}
        <Route path="/" element={<LoginComp />} />
        <Route path="/InscriptionIset" element={<InscriptionIset />} />
        
        {/* Pages avec Navbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/home" element={<HomeComp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/StudentList" element={<StudentList />} />
          <Route path="/MyNotes" element={<MyNotes />} />
          
          {/* Routes protégées */}
          <Route
            path="/Student"
            element={
              <PrivateRoute allowedRole="student">
                <Student />
              </PrivateRoute>
            }
          />
          <Route
            path="/teacher"
            element={
              <PrivateRoute allowedRole="teacher">
                <Teacher />
              </PrivateRoute>
            }
          />
          <Route
            path="/AdminPage"
            element={
              <PrivateRoute allowedRole="admin">
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Route>

        {/* Redirection selon rôle */}
        <Route
          path="/redirect"
          element={
            (() => {
              const role = localStorage.getItem('role');
              if (role === 'student') return <Navigate to="/Student" />;
              if (role === 'teacher') return <Navigate to="/teacher" />;
              if (role === 'admin') return <Navigate to="/AdminPage" />;
              return <Navigate to="/" />;
            })()
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;