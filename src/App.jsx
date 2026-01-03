// src/App.jsx
import React, { useState } from 'react';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  // Page de connexion simple
  if (currentPage === 'login') {
    return (
      <div className="app">
        <div className="login-page" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #00205B 0%, #1a365d 100%)'
        }}>
          <div className="login-container" style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '400px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #C8102E, #FCD116, #007A5E)'
                }}></div>
              </div>
              <h1 style={{
                color: '#00205B',
                marginBottom: '0.5rem'
              }}>Connexion</h1>
              <p style={{ color: '#666' }}>Plateforme d'Encadrement 3IAC</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="votre@email.com" />
              </div>
              
              <div className="form-group">
                <label>Mot de passe</label>
                <input type="password" placeholder="••••••••" />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                style={{ marginTop: '1.5rem' }}
                onClick={() => setCurrentPage('admin')}
              >
                Se connecter
              </button>
            </form>

            <div style={{
              marginTop: '2rem',
              textAlign: 'center',
              color: '#666',
              fontSize: '0.9rem'
            }}>
              <p>Testez les différentes interfaces :</p>
              <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '1rem',
                justifyContent: 'center'
              }}>
                <button 
                  onClick={() => setCurrentPage('admin')}
                  style={{
                    padding: '8px 16px',
                    background: '#00205B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Admin
                </button>
                <button 
                  onClick={() => setCurrentPage('teacher')}
                  style={{
                    padding: '8px 16px',
                    background: '#C8102E',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Enseignant
                </button>
                <button 
                  onClick={() => setCurrentPage('student')}
                  style={{
                    padding: '8px 16px',
                    background: '#007A5E',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Étudiant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Pages principales
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
              Institut Universitaire de la Cote
            </h1>
            <h2 style={{ fontSize: '1rem', color: '#FCD116' }}>
              3IAC - Plateforme d'Encadrement
            </h2>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              Bienvenue, {currentPage === 'admin' ? 'Administrateur' : 
                         currentPage === 'teacher' ? 'Dr. TEKOUDJOU' : 
                         'Étudiant 3IAC'}
            </div>
            <div style={{
              background: '#007A5E',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              marginTop: '4px',
              display: 'inline-block'
            }}>
              {currentPage === 'admin' ? 'Administrateur' : 
               currentPage === 'teacher' ? 'Enseignant' : 'Étudiant'}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <button 
              onClick={() => setCurrentPage('admin')}
              style={{
                color: 'white',
                background: currentPage === 'admin' ? '#FCD116' : 'transparent',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                color: currentPage === 'admin' ? '#00205B' : 'white'
              }}
            >
              Admin
            </button>
            <button 
              onClick={() => setCurrentPage('teacher')}
              style={{
                color: 'white',
                background: currentPage === 'teacher' ? '#FCD116' : 'transparent',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                color: currentPage === 'teacher' ? '#00205B' : 'white'
              }}
            >
              Enseignant
            </button>
            <button 
              onClick={() => setCurrentPage('student')}
              style={{
                color: 'white',
                background: currentPage === 'student' ? '#FCD116' : 'transparent',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                color: currentPage === 'student' ? '#00205B' : 'white'
              }}
            >
              Étudiant
            </button>
            <button 
              onClick={() => setCurrentPage('login')}
              style={{
                color: 'white',
                background: 'transparent',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginLeft: 'auto'
              }}
            >
              Déconnexion
            </button>
          </div>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="main-content">
        <h1 className="page-title">
          Interface {currentPage === 'admin' ? 'Administrateur' : 
                    currentPage === 'teacher' ? 'Enseignant' : 'Étudiant'}
        </h1>

        {/* Contenu selon la page */}
        <div className="card">
          <h2 className="section-title">Bienvenue sur la plateforme</h2>
          <p>            {currentPage}.</p>
          <p style={{ marginTop: '1rem' }}>
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '2rem'
          }}>
            <div className="stat-card" style={{ background: '#C8102E' }}>
              <h3>Total Étudiants</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>1,250</p>
            </div>
            <div className="stat-card" style={{ background: '#FCD116', color: '#333' }}>
              <h3>Total Enseignants</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>85</p>
            </div>
            <div className="stat-card" style={{ background: '#007A5E' }}>
              <h3>Encadrements actifs</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>420</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p>Développé par : BIKAKA SANDRA, BANGFOFACK, TAYOUO TALLA</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Plateforme d'Encadrement des Étudiants - IUC
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;