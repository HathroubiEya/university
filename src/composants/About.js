import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assurez-vous d'utiliser React Router pour la navigation.

const AboutUs = () => {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages.

  const handleGoHome = () => {
    navigate('/home'); // Redirige vers la route de la page d'accueil.
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>À propos de nous</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Notre mission</h2>
          <p>
            Iset services est une plateforme conçue pour simplifier et centraliser la gestion des services universitaires.
            Nous aidons les étudiants et le personnel à accéder facilement à divers services administratifs et académiques.
          </p>
        </section>
        <section>
          <h2>Fonctionnalités principales</h2>
          <ul>
            <li>Gestion des cours et inscriptions</li>
            <li>Calendrier académique personnalisé</li>
            <li>Demandes administratives simplifiées</li>
            <li>Notifications en temps réel</li>
            <li>Support dédié à l'utilisateur</li>
          </ul>
        </section>
        <section>
          <h2>Pourquoi nous choisir ?</h2>
          <p>
            Notre application propose une interface conviviale, une sécurité renforcée et un accès 24/7 pour une expérience optimale.
          </p>
        </section>
        <section>
          <h2>Contactez-nous</h2>
          <p>
            Besoin d'aide ? Contactez-nous par e-mail à{' '}
            <a href="mailto:contact@iset services.tn">contact@iset services.tn</a> ou appelez-nous au +216 123 456 789.
          </p>
        </section>
      </main>
      <footer style={styles.footer}>
        <button style={styles.button} onClick={handleGoHome}>
          Retour à la page d'accueil
        </button>
        <p>© 2025 [Nom de l'application]. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

// Styles inline pour simplifier
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    margin: '0',
    padding: '0',
  },
  header: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  main: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#ecf0f1',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default AboutUs;
