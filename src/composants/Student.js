"use client"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./Navbar.js"
import "./Student.css"

const Student = () => {
  const navigate = useNavigate()

  // 🔒 Vérifie que l'utilisateur est connecté avec le rôle student
  useEffect(() => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if (!token || role !== "student") {
      navigate("/") // Redirige vers login si pas autorisé
    }
  }, [navigate])

  // 🔘 Fonction de déconnexion
  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <>
      <Navbar />

      {/* 🔘 Bouton Logout en haut à droite */}
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px 20px" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      <div className="student-container">
        <h1 className="student-title">Espace Étudiant</h1>

        <div className="dashboard-grid">
          {/* Statistiques rapides */}
          <div className="dashboard-card stats-card">
            <h2>Statistiques</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">85%</span>
                <span className="stat-label">Présence</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">14</span>
                <span className="stat-label">Cours</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">3</span>
                <span className="stat-label">Devoirs</span>
              </div>
            </div>
          </div>

          {/* Activité récente */}
          <div className="dashboard-card">
            <h2>Activité Récente</h2>
            <ul className="activity-list">
              <li className="activity-item">
                <span className="activity-icon">📝</span>
                <div className="activity-content">
                  <p className="activity-title">Devoir soumis</p>
                  <p className="activity-time">Il y a 2 heures</p>
                </div>
              </li>
              <li className="activity-item">
                <span className="activity-icon">📊</span>
                <div className="activity-content">
                  <p className="activity-title">Note reçue: 18/20</p>
                  <p className="activity-time">Hier</p>
                </div>
              </li>
              <li className="activity-item">
                <span className="activity-icon">📚</span>
                <div className="activity-content">
                  <p className="activity-title">Nouveau cours disponible</p>
                  <p className="activity-time">Il y a 2 jours</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Actions rapides */}
          <div className="dashboard-card">
            <h2>Actions Rapides</h2>
            <div className="actions-grid">
              <button className="action-button" onClick={() => navigate("/courses")}>
                <span className="action-icon">📚</span>
                <span>Mes Cours</span>
              </button>
              <button className="action-button" onClick={() => navigate("/assignments")}>
                <span className="action-icon">📖</span>
                <span>Devoirs</span>
              </button>
              <button className="action-button" onClick={() => navigate("/MyNotes")}>
                <span className="action-icon">📝</span>
                <span>Mes Notes</span>
              </button>
              <button className="action-button" onClick={() => navigate("/calender")}>
                <span className="action-icon">📊</span>
                <span>Calendrier</span>
              </button>
            </div>
          </div>

          {/* Événements à venir */}
          <div className="dashboard-card">
            <h2>Événements à Venir</h2>
            <ul className="events-list">
              <li className="event-item">
                <div className="event-date">
                  <span className="event-day">15</span>
                  <span className="event-month">Mar</span>
                </div>
                <div className="event-content">
                  <p className="event-title">Examen de programmation</p>
                  <p className="event-time">10:00 - 12:00</p>
                </div>
              </li>
              <li className="event-item">
                <div className="event-date">
                  <span className="event-day">18</span>
                  <span className="event-month">Mar</span>
                </div>
                <div className="event-content">
                  <p className="event-title">Remise de Projet</p>
                  <p className="event-time">23:59</p>
                </div>
              </li>
              <li className="event-item">
                <div className="event-date">
                  <span className="event-day">22</span>
                  <span className="event-month">Mar</span>
                </div>
                <div className="event-content">
                  <p className="event-title">Conférence</p>
                  <p className="event-time">14:00 - 16:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student
