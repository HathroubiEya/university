import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3001/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Erreur de chargement des étudiants :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="student-list-container">
      
      <h2>Liste des étudiants</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom complet</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.full_name}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
