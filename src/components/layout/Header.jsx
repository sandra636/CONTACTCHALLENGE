import React from 'react';
import './Header.css';

const Header = ({ userType, userName, onLogout }) => {
  const getRoleName = () => {
    switch(userType) {
      case 'admin': return 'Administrateur';
      case 'teacher': return 'Enseignant';
      case 'student': return 'Étudiant';
      default: return 'Utilisateur';
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <div className="logo-text">
              <h1>IUC - Plateforme 3IAC</h1>
              <p>Encadrement Académique</p>
            </div>
          </div>
        </div>

        <div className="user-section">
          {userName && (
            <>
              <div className="user-info">
                <div className="user-avatar">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div className="user-details">
                  <span className="user-name">{userName}</span>
                  <span className={`user-role role-${userType}`}>
                    {getRoleName()}
                  </span>
                </div>
              </div>
              {onLogout && (
                <button 
                  className="logout-btn"
                  onClick={onLogout}
                  title="Déconnexion"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z"/>
                  </svg>
                </button>
              )}
            </>
          )}
        </div>
      </div>

      <nav className="main-nav">
        <ul className="nav-list">
          <li><a href="/dashboard" className="nav-link active">Tableau de bord</a></li>
          <li><a href="/supervisions" className="nav-link">Encadrements</a></li>
          <li><a href="/documents" className="nav-link">Documents</a></li>
          <li><a href="/calendar" className="nav-link">Calendrier</a></li>
          {userType === 'admin' && (
            <li><a href="/admin" className="nav-link admin">Administration</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;