"use client"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./teacher.css"

const Teacher = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if (!token || role !== "teacher") {
      navigate("/") // Redirige vers la page de connexion si non autorisé
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    navigate("/")
  }

  return (
    <div className="teacher-container">
      <div className="teacher-header">
        <h1 className="teacher-title">Espace Enseignant</h1>
        <button className="logout-button" onClick={handleLogout}>🔓 Déconnexion</button>
      </div>

      <div className="dashboard-grid">
        {/* Statistiques */}
        <div className="dashboard-card stats-card">
          <h2>Statistiques</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">5</span>
              <span className="stat-label">Cours en charge</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">120</span>
              <span className="stat-label">Étudiants</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">8</span>
              <span className="stat-label">Devoirs à corriger</span>
            </div>
          </div>
        </div>

        {/* Mises à jour récentes */}
        <div className="dashboard-card">
          <h2>Mises à Jour Récentes</h2>
          <ul className="updates-list">
            <li className="update-item">
              <span className="update-icon">📚</span>
              <div className="update-content">
                <p className="update-title">Nouveau cours publié</p>
                <p className="update-time">Il y a 3 heures</p>
              </div>
            </li>
            <li className="update-item">
              <span className="update-icon">📝</span>
              <div className="update-content">
                <p className="update-title">10 devoirs soumis</p>
                <p className="update-time">Hier</p>
              </div>
            </li>
            <li className="update-item">
              <span className="update-icon">📊</span>
              <div className="update-content">
                <p className="update-title">Statistiques mises à jour</p>
                <p className="update-time">Il y a 2 jours</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Actions rapides */}
        <div className="dashboard-card">
          <h2>Actions Rapides</h2>
          <div className="actions-grid">
            <button className="action-button" onClick={() => navigate("/manage-courses")}>
              <span className="action-icon">📚</span>
              <span>Gérer les Cours</span>
            </button>
            <button className="action-button" onClick={() => navigate("/grade-assignments")}>
              <span className="action-icon">📝</span>
              <span>Corriger Devoirs</span>
            </button>
            <button className="action-button" onClick={() => navigate("/schedule")}>
              <span className="action-icon">📅</span>
              <span>Planifier</span>
            </button>
            <button className="action-button" onClick={() => navigate("/communicate")}>
              <span className="action-icon">💬</span>
              <span>Communiquer</span>
            </button>
          </div>
        </div>

        {/* Dates importantes */}
        <div className="dashboard-card">
          <h2>Dates Importantes</h2>
          <ul className="deadlines-list">
            <li className="deadline-item">
              <div className="deadline-date">
                <span className="deadline-day">17</span>
                <span className="deadline-month">Mar</span>
              </div>
              <div className="deadline-content">
                <p className="deadline-title">Corriger les devoirs de la semaine</p>
                <p className="deadline-time">18:00</p>
              </div>
            </li>
            <li className="deadline-item">
              <div className="deadline-date">
                <span className="deadline-day">20</span>
                <span className="deadline-month">Mar</span>
              </div>
              <div className="deadline-content">
                <p className="deadline-title">Réunion pédagogique</p>
                <p className="deadline-time">14:00 - 16:00</p>
              </div>
            </li>
            <li className="deadline-item">
              <div className="deadline-date">
                <span className="deadline-day">25</span>
                <span className="deadline-month">Mar</span>
              </div>
              <div className="deadline-content">
                <p className="deadline-title">Publier les notes finales</p>
                <p className="deadline-time">23:59</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Teacher
