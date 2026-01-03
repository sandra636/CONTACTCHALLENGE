import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const teamMembers = [
    { name: 'BIKAKA SANDRA', role: 'Développeuse Frontend' },
    { name: 'BANGFOFACK', role: 'Développeur Backend' },
    { name: 'TAYOUO TALLA', role: 'Designer UI/UX' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="logo-icon">🎓</div>
            <div className="footer-brand">
              <h3>Plateforme 3IAC</h3>
              <p className="footer-subtitle">Institut Universitaire de la Côte</p>
            </div>
          </div>
          <p className="footer-description">
            Plateforme dédiée à l'encadrement académique des étudiants en Informatique.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><a href="/">Accueil</a></li>
            <li><a href="/dashboard">Tableau de bord</a></li>
            <li><a href="/supervisions">Encadrements</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Équipe de développement</h4>
          <div className="team-list">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <span className="member-name">{member.name}</span>
                <span className="member-role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © {currentYear} Institut Universitaire de la Côte. Tous droits réservés.
        </div>
        <div className="version">
          Version 1.0.0
        </div>
      </div>
    </footer>
  );
};

export default Footer;