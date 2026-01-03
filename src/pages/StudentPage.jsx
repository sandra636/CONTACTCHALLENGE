import React from 'react';
import Layout from '../components/layout/Layout';

const StudentPage = () => {
  return (
    <Layout userType="student" userName="Étudiant 3IAC">
      <div className="student-dashboard">
        <h1 className="page-title">Interface Étudiant</h1>
        
        <div className="student-content">
          {/* Section mes encadrements */}
          <div className="my-supervisions">
            <h2 className="section-title">Mes encadrements</h2>
            <div className="supervision-cards">
              <div className="supervision-card">
                <div className="card-header">
                  <h3>Encadrement de Mémoire</h3>
                  <span className="status active">En cours</span>
                </div>
                <p><strong>Encadrant:</strong> Dr. TEKOUDJOU F. Xavier</p>
                <p><strong>Date début:</strong> 15/01/2024</p>
                <p><strong>Prochaine rencontre:</strong> 25/04/2024</p>
                <div className="card-actions">
                  <button className="action-btn">Envoyer document</button>
                  <button className="action-btn">Planifier rencontre</button>
                  <button className="action-btn">Consulter historique</button>
                </div>
              </div>
            </div>
          </div>

          {/* Section notifications */}
          <div className="notifications-section">
            <h2 className="section-title">Notifications récentes</h2>
            <div className="notifications-list">
              <div className="notification">
                <span className="notification-icon">📋</span>
                <div className="notification-content">
                  <p>Votre mémoire a été corrigé par Dr. TEKOUDJOU</p>
                  <span className="notification-time">Il y a 2 heures</span>
                </div>
              </div>
              <div className="notification">
                <span className="notification-icon">📅</span>
                <div className="notification-content">
                  <p>Rencontre d'encadrement prévue le 25/04/2024</p>
                  <span className="notification-time">Il y a 1 jour</span>
                </div>
              </div>
              <div className="notification">
                <span className="notification-icon">📤</span>
                <div className="notification-content">
                  <p>Nouveau document partagé: "Corrections chapitre 3"</p>
                  <span className="notification-time">Il y a 3 jours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section formulaire */}
          <div className="student-form-section">
            <h2 className="section-title">Enregistrer un encadrement</h2>
            <form className="supervision-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Type d'encadrement</label>
                  <select>
                    <option>Stage</option>
                    <option>Mémoire</option>
                    <option>Projet</option>
                    <option>Recherche</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Date de début</label>
                  <input type="date" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Sujet/Thème</label>
                <input type="text" placeholder="Ex: Développement d'une plateforme web..." />
              </div>
              
              <div className="form-group">
                <label>Description</label>
                <textarea rows="3" placeholder="Décrivez votre sujet..."></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Enregistrer l'encadrement</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentPage;