import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState('student');

  return (
    <Layout>
      <div className="login-page">
        <div className="login-container">
          {/* Logo et titre */}
          <div className="login-header">
            <div className="login-logo">
              <div className="logo-colors">
                <span className="color-red"></span>
                <span className="color-yellow"></span>
                <span className="color-green"></span>
              </div>
              <h1>Connexion</h1>
            </div>
            <p className="login-subtitle">Plateforme d'Encadrement 3IAC</p>
          </div>

          {/* Sélection du rôle */}
          <div className="role-selection">
            <h2>Choisissez votre profil</h2>
            <div className="role-options">
              <button 
                className={`role-option ${selectedRole === 'admin' ? 'selected' : ''}`}
                onClick={() => setSelectedRole('admin')}
              >
                <span className="role-icon">👨‍💼</span>
                <span className="role-name">Administrateur</span>
              </button>
              
              <button 
                className={`role-option ${selectedRole === 'teacher' ? 'selected' : ''}`}
                onClick={() => setSelectedRole('teacher')}
              >
                <span className="role-icon">👨‍🏫</span>
                <span className="role-name">Enseignant</span>
              </button>
              
              <button 
                className={`role-option ${selectedRole === 'student' ? 'selected' : ''}`}
                onClick={() => setSelectedRole('student')}
              >
                <span className="role-icon">🎓</span>
                <span className="role-name">Étudiant</span>
              </button>
            </div>
          </div>

          {/* Formulaire de connexion */}
          <form className="login-form">
            <div className="form-group">
              <label>Identifiant</label>
              <input 
                type="text" 
                placeholder={selectedRole === 'admin' ? 'admin@3iac.uy1.cm' : 
                           selectedRole === 'teacher' ? 'enseignant@uy1.cm' : 
                           'etudiant@uy1.cm'}
              />
            </div>
            
            <div className="form-group">
              <label>Mot de passe</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Se souvenir de moi
              </label>
              <a href="#forgot" className="forgot-password">Mot de passe oublié ?</a>
            </div>

            <button type="submit" className="login-btn">
              Se connecter
            </button>

            <div className="login-footer">
              <p>Problèmes de connexion ? <a href="#contact">Contactez l'administrateur</a></p>
              <p className="team-info">Développé par : BIKAKA SANDRA, BANGFOFACK, TAYOUO TALLA</p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;