import React from 'react';
import './Header.css';

const Header = ({ userType, userName }) => {
  // Fonction pour obtenir le nom du rôle
  const getRoleName = () => {
    switch(userType) {
      case 'admin': return 'Administrateur';
      case 'teacher': return 'Enseignant';
      case 'student': return 'Étudiant';
      default: return 'Visiteur';
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="university-brand">
          <div className="logo-circle">
            <span className="logo-red"></span>
            <span className="logo-yellow"></span>
            <span className="logo-green"></span>
          </div>
          <div className="university-info">
            <h1>Université de Yaoundé I</h1>
            <h2>3IAC - Plateforme d'Encadrement</h2>
          </div>
        </div>
        
        <div className="user-info">
          {userName ? (
            <>
              <span className="welcome">Bienvenue,</span>
              <span className="user-name">{userName}</span>
              <span className="user-role">{getRoleName()}</span>
            </>
          ) : (
            <span className="welcome">Bienvenue sur la plateforme</span>
          )}
        </div>
      </div>

      <nav className="main-nav">
        <ul className="nav-list">
          <li><a href="/" className="nav-link active">Accueil</a></li>
          <li><a href="/encadrements" className="nav-link">Mes Encadrements</a></li>
          <li><a href="/forum" className="nav-link">Forum</a></li>
          <li><a href="/documents" className="nav-link">Documents</a></li>
          <li><a href="/rencontres" className="nav-link">Rencontres</a></li>
          {userType === 'admin' && (
            <li><a href="/administration" className="nav-link admin-link">Administration</a></li>
          )}
          <li><a href="/aide" className="nav-link">Aide</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;