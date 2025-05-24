"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./courses.css"

const MesCours = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  // Données des cours spécifiques
  const courses = [
    {
      id: 1,
      title: "Java",
      instructor: "Prof. Hassan ben salah ",
      schedule: "Lundi, 10:00 - 12:00",
      room: "Labo Info A-101",
      progress: 65,
      image: "☕",
    },
    {
      id: 2,
      title: "Architecture des Logiciels",
      instructor: "Prof. Soumya Klash",
      schedule: "Mardi, 14:00 - 16:00",
      room: "Salle B-202",
      progress: 78,
      image: "🏗️",
    },
    {
      id: 3,
      title: "Génie Logiciel",
      instructor: "Prof. Fadwa",
      schedule: "Mercredi, 08:00 - 10:00",
      room: "Salle C-305",
      progress: 42,
      image: "⚙️",
    },
    {
      id: 4,
      title: "React",
      instructor: "Prof. Marwen Ben Haccin",
      schedule: "Jeudi, 13:00 - 15:00",
      room: "Labo Info D-405",
      progress: 90,
      image: "⚛️",
    },
    {
      id: 5,
      title: "Français",
      instructor: "Prof.Sameh Hamdi ",
      schedule: "Vendredi, 11:00 - 13:00",
      room: "Salle E-100",
      progress: 55,
      image: "🇫🇷",
    },
  ]

  // Filtrer les cours en fonction du terme de recherche
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Naviguer vers la page détaillée du cours
  const goToCourseDetail = (courseId) => {
    navigate(`/student/course/${courseId}`)
  }

  return (
    <div className="courses-content">
      <div className="courses-stats">
        <div className="stat-box">
          <span className="stat-value">{courses.length}</span>
          <span className="stat-label">Cours inscrits</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">15</span>
          <span className="stat-label">Heures par semaine</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">66%</span>
          <span className="stat-label">Progression moyenne</span>
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course, index) => (
          <div key={course.id} className="course-card" onClick={() => goToCourseDetail(course.id)}>
            {index === 0 ? (
              // Premier cours avec design spécial (Java)
              <>
                <div className="course-icon">{course.image}</div>
                <div className="course-content">
                  <h2 className="course-title">{course.title}</h2>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <div className="progress-label">
                      <span>{course.progress}%</span>
                    </div>
                  </div>
                  <button className="course-button">Accéder au cours</button>
                </div>
              </>
            ) : (
              // Autres cours avec design standard
              <div className="course-content">
                <div className="course-icon">{course.image}</div>
                <h2 className="course-title">{course.title}</h2>
                <p className="course-instructor">{course.instructor}</p>
                <div className="course-details">
                  <p className="course-schedule">
                    <span className="detail-icon">🕒</span> {course.schedule}
                  </p>
                  <p className="course-room">
                    <span className="detail-icon">🏢</span> {course.room}
                  </p>
                </div>
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Progression</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
                <button className="course-button">Accéder au cours</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
export default MesCours