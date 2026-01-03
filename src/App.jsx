import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);
  const [userName, setUserName] = useState('');

  const handleLogin = (type, name) => {
    setUserType(type);
    setUserName(name);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setUserName('');
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Layout 
      userType={userType} 
      userName={userName} 
      onLogout={handleLogout}
    >
      <div className="dashboard">
        <h1>Bienvenue sur la Plateforme 3IAC</h1>
        <p>Interface {userType === 'admin' ? 'Administrateur' : 
                     userType === 'teacher' ? 'Enseignant' : 
                     'Étudiant'}</p>
        
        <div className="dashboard-grid">
          <div className="card">
            <h3>Encadrements en cours</h3>
            <p>Gérez vos encadrements académiques</p>
          </div>
          
          <div className="card">
            <h3>Documents partagés</h3>
            <p>Accédez aux documents de travail</p>
          </div>
          
          <div className="card">
            <h3>Calendrier</h3>
            <p>Consultez les dates importantes</p>
          </div>
          
          {userType === 'admin' && (
            <div className="card admin">
              <h3>Administration</h3>
              <p>Gestion des utilisateurs et paramètres</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default App;