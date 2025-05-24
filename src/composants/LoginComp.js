import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginComp.css';

const LoginComp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3002/loginComp', {
        username,
        password,
      });

      const { token, role, username: returnedUsername } = response.data;

      if (token && ['admin', 'teacher', 'student'].includes(role)) {
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('username', returnedUsername);

        if (role === 'admin') navigate('/AdminPage');
        else if (role === 'teacher') navigate('/teacher');
        else if (role === 'student') navigate('/student');
      } else {
        setError("Rôle non autorisé ou identifiants incorrects");
      }
    } catch (err) {
      console.error("Erreur :", err.response ? err.response.data : err.message);
      setError(err.response?.data?.error || 'Erreur lors de la connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Connexion</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label className="label">Nom d'utilisateur :</label>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />

        <label className="label">Mot de passe :</label>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit" disabled={loading}>LOG IN</button>
        {loading && <p>Chargement...</p>}

        <button
          type="button"
          onClick={() => navigate('/InscriptionIset')}
          style={{ marginTop: '10px' }}
        >
          Créer un compte
        </button>

        <p style={{ marginTop: '20px' }}>
          Pas encore de compte ? <Link to="/InscriptionIset">Créez-en un ici</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginComp;
