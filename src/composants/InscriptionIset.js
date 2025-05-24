import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './inscription.css';

const InscriptionIset = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'student',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:3002/inscriptionIset', formData);
      setSuccess('Inscription réussie ! Vous pouvez maintenant vous connecter.');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        role: 'student',
      });
    } catch (err) {
      setError(err.response?.data?.error || "Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="inscription-container">
      <form onSubmit={handleSubmit}>
        <h2>Inscription ISET</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="student">Étudiant</option>
          <option value="teacher">Enseignant</option>
          <option value="admin">Administrateur</option>
        </select>

        <button type="submit">S'inscrire</button>
        <p style={{ marginTop: '20px' }}></p>
        <button onClick={() => navigate('/')} className="retour-button">
        Retour à la connexion
      </button>
      </form>
    </div>
  );
};

export default InscriptionIset;
