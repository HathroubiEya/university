import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Récupérer les données des étudiants et enseignants
    fetchStudentsAndTeachers();
  }, []);

  const fetchStudentsAndTeachers = async () => {
    try {
      // Récupérer la liste des étudiants
      const studentResponse = await axios.get('http://localhost:3002/students');
      setStudents(studentResponse.data);

      // Récupérer la liste des enseignants
      const teacherResponse = await axios.get('http://localhost:3002/teachers');
      setTeachers(teacherResponse.data);

    } catch (err) {
      console.error('Erreur lors de la récupération des données', err);
      setError('Une erreur est survenue lors de la récupération des données.');
    }
  };

  return (
    <div className="admin-container">
      <h1>Page Administrateur</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="section">
        <h2>Étudiants</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Nom d'utilisateur</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.username}>
                <td>{student.full_name}</td>
                <td>{student.username}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Enseignants</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Nom d'utilisateur</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map(teacher => (
              <tr key={teacher.username}>
                <td>{teacher.full_name}</td>
                <td>{teacher.username}</td>
                <td>{teacher.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;