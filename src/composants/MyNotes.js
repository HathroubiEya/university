import React, { useState, useEffect } from 'react';
import './MyNotes.css';

const MyNotes = () => {
  // Liste des étudiants
  const students = [
    { username: 'student1', password: '123456', full_name: 'Wiem Bahba', email: 'wiem.bahba@example.com' },
    { username: 'student2', password: '789456', full_name: 'Ahmed Ben Salah', email: 'ahmed.bensalah@example.com' },
    { username: 'student3', password: 'homme123', full_name: 'Aymen Kallel', email: 'aymen.kallel@example.com' },
    { username: 'student4', password: 'femme1234', full_name: 'Salma Hamdi', email: 'salma.hamdi@example.com' },
    { username: 'student5', password: 'fff123', full_name: 'Meryem Ladhari', email: 'meryem.ladhari@example.com' },
  ];

  // Liste des matières
  const courses = ['Java', 'React', 'Génie Logiciel', 'Architecture Logiciel', 'Français'];

  // Simuler des notes et crédits pour chaque étudiant et chaque cours
  const generateGradeData = () => {
    return students.map(student => {
      return courses.map(course => ({
        studentName: student.full_name,
        courseName: course,
        grade: Math.floor(Math.random() * 21), // Simule une note entre 0 et 20
        credit: Math.floor(Math.random() * 5) + 1, // Simule un crédit entre 1 et 5
      }));
    }).flat(); // Aplatir le tableau d'array pour avoir une seule liste
  };

  const [grades, setGrades] = useState([]);

  useEffect(() => {
    // Initialiser les données des notes
    setGrades(generateGradeData());
  }, []);

  return (
    <div className="mynotes-container">
      <h1>Mes Notes</h1>

      <table className="data-table">
        <thead>
          <tr>
            <th>Nom de l'Étudiant</th>
            <th>Nom du Cours</th>
            <th>Note</th>
            <th>Crédit</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.studentName}</td>
              <td>{grade.courseName}</td>
              <td>{grade.grade}</td>
              <td>{grade.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyNotes;
