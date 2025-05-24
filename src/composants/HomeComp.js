// src/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.js"; 
import "./home.css"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <section className="welcome-section">
          <h1>Bienvenue chez ISET services</h1>
          <p>
            Iset services est une plateforme moderne qui facilite la gestion des services universitaires pour les étudiants et les enseignants.
          </p>
        </section>

        <section className="features">
          <h2>Fonctionnalités clés</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">📚</span>
              <h3>Gestion des cours</h3>
              <p>Inscrivez-vous et suivez vos cours en ligne facilement.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📅</span>
              <h3>Calendrier académique</h3>
              <p>Restez informé des événements importants et des échéances.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📝</span>
              <h3>Soumission des devoirs</h3>
              <p>Envoyez vos devoirs et recevez vos notes directement.</p>
            </div>
          </div>
        </section>

        <section className="reviews">
          <h2>Ce que disent nos utilisateurs</h2>
          <div className="review-card">
            <p>
              "L'application m'a simplifié la vie, je peux facilement suivre mes cours et gérer mes devoirs."
            </p>
            <span>- Étudiant</span>
          </div>
          <div className="review-card">
            <p>
              "Une solution idéale pour gérer les cours et communiquer avec mes étudiants."
            </p>
            <span>- Enseignant</span>
          </div>
        </section>
        <footer className="footer">
          <p>© 2025 [ISET services]. Tous droits réservés.</p>
          <p>Contactez-nous : <a href="mailto:contact@iset services.tn">contact@iset services.tn</a></p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
