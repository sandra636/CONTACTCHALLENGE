import React from 'react';
import Layout from '../components/layout/Layout';

const AdminPage = () => {
  return (
    <Layout userType="admin" userName="Administrateur Principal">
      <div className="admin-dashboard">
        <h1 className="page-title">Interface Administrateur</h1>
        
        <div className="dashboard-grid">
          {/* Section statistiques */}
          <div className="stats-section">
            <h2 className="section-title">Statistiques générales</h2>
            <div className="stats-grid">
              <div className="stat-card red">
                <h3>Total Étudiants</h3>
                <p className="stat-number">1,250</p>
              </div>
              <div className="stat-card yellow">
                <h3>Total Enseignants</h3>
                <p className="stat-number">85</p>
              </div>
              <div className="stat-card green">
                <h3>Encadrements actifs</h3>
                <p className="stat-number">420</p>
              </div>
              <div className="stat-card blue">
                <h3>Soutenances ce mois</h3>
                <p className="stat-number">35</p>
              </div>
            </div>
          </div>

          {/* Section actions rapides */}
          <div className="quick-actions">
            <h2 className="section-title">Actions rapides</h2>
            <div className="actions-grid">
              <button className="action-btn">Importer étudiants</button>
              <button className="action-btn">Affecter encadrants</button>
              <button className="action-btn">Générer rapports</button>
              <button className="action-btn">Voir statistiques</button>
              <button className="action-btn">Gérer utilisateurs</button>
              <button className="action-btn">Exporter données</button>
            </div>
          </div>

          {/* Section derniers encadrements */}
          <div className="recent-section">
            <h2 className="section-title">Derniers encadrements ajoutés</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Étudiant</th>
                    <th>Encadrant</th>
                    <th>Type</th>
                    <th>Date début</th>
                    <th>Statut</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jean Dupont</td>
                    <td>Prof. Martin</td>
                    <td>Mémoire</td>
                    <td>15/01/2024</td>
                    <td><span className="status active">Actif</span></td>
                  </tr>
                  <tr>
                    <td>Marie Curie</td>
                    <td>Prof. Einstein</td>
                    <td>Stage</td>
                    <td>10/02/2024</td>
                    <td><span className="status pending">En attente</span></td>
                  </tr>
                  <tr>
                    <td>Paul Smith</td>
                    <td>Prof. Newton</td>
                    <td>Projet</td>
                    <td>05/03/2024</td>
                    <td><span className="status completed">Terminé</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;