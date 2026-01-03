import React from 'react';
import Layout from '../components/layout/Layout';

const TeacherPage = () => {
  return (
    <Layout userType="teacher" userName="Dr. TEKOUDJOU F. Xavier">
      <div className="teacher-dashboard">
        <h1 className="page-title">Interface Enseignant-Encadrant</h1>
        
        <div className="teacher-content">
          {/* Section mes étudiants */}
          <div className="my-students">
            <h2 className="section-title">Mes étudiants encadrés</h2>
            <div className="students-grid">
              {['BIKAKA SANDRA', 'BANGFOFACK', 'TAYOUO TALLA', 'Étudiant 4', 'Étudiant 5'].map((student, index) => (
                <div key={index} className="student-card">
                  <h3>{student}</h3>
                  <p>Mémoire - Informatique</p>
                  <div className="student-status">
                    <span className="progress">Progression: 75%</span>
                    <button className="chat-btn">Discuter</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section formulaire rencontre */}
          <div className="meeting-form-section">
            <h2 className="section-title">Nouvelle rencontre</h2>
            <form className="meeting-form">
              <div className="form-group">
                <label>Étudiant</label>
                <select>
                  <option>Sélectionner un étudiant</option>
                  <option>BIKAKA SANDRA</option>
                  <option>BANGFOFACK</option>
                  <option>TAYOUO TALLA</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Date de la rencontre</label>
                <input type="date" />
              </div>
              
              <div className="form-group">
                <label>Travail réalisé</label>
                <textarea rows="3" placeholder="Décrivez le travail effectué..."></textarea>
              </div>
              
              <div className="form-group">
                <label>Prochaines étapes</label>
                <textarea rows="2" placeholder="Prochaines actions à réaliser..."></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Enregistrer la rencontre</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherPage;