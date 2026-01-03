import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const defaultNames = {
      'admin': 'Admin IUC',
      'teacher': 'Prof. Enseignant',
      'student': 'Étudiant 3IAC'
    };
    
    if (onLogin) {
      onLogin(selectedRole, defaultNames[selectedRole]);
    }
  };

  const handleQuickLogin = (role) => {
    setSelectedRole(role);
    const defaultNames = {
      'admin': 'Admin IUC',
      'teacher': 'Prof. Enseignant',
      'student': 'Étudiant 3IAC'
    };
    if (onLogin) {
      onLogin(role, defaultNames[role]);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem'
    },
    card: {
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      padding: '2.5rem',
      width: '100%',
      maxWidth: '400px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    logo: {
      fontSize: '3.5rem',
      color: '#3498db',
      background: '#f8f9fa',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      border: '3px solid #3498db',
      marginBottom: '1rem'
    },
    title: {
      color: '#2c3e50',
      margin: '0',
      fontSize: '1.8rem'
    },
    subtitle: {
      color: '#7f8c8d',
      fontSize: '0.9rem',
      marginTop: '0.5rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#2c3e50',
      fontWeight: '500',
      fontSize: '0.9rem'
    },
    input: {
      width: '100%',
      padding: '0.8rem 1rem',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    inputFocus: {
      outline: 'none',
      borderColor: '#3498db',
      boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.1)'
    },
    loginBtn: {
      width: '100%',
      padding: '1rem',
      background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '1rem'
    },
    quickSection: {
      borderTop: '1px solid #f0f0f0',
      paddingTop: '1.5rem',
      marginTop: '1.5rem'
    },
    quickTitle: {
      textAlign: 'center',
      color: '#7f8c8d',
      fontSize: '0.9rem',
      marginBottom: '1rem'
    },
    quickButtons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.5rem'
    },
    quickBtn: {
      padding: '0.6rem 0.5rem',
      border: '2px solid #e0e0e0',
      background: 'white',
      borderRadius: '6px',
      fontSize: '0.8rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    footer: {
      marginTop: '2rem',
      textAlign: 'center',
      color: '#95a5a6',
      fontSize: '0.85rem'
    },
    teamCredits: {
      fontStyle: 'italic',
      marginTop: '0.5rem'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>🎓</div>
          <h1 style={styles.title}>Connexion 3IAC</h1>
          <p style={styles.subtitle}>Plateforme d'encadrement académique</p>
        </div>

        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Adresse email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@iuc.cm"
              required
              style={styles.input}
              onFocus={(e) => {
                e.target.style.outline = 'none';
                e.target.style.borderColor = '#3498db';
                e.target.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Votre mot de passe"
              required
              style={styles.input}
              onFocus={(e) => {
                e.target.style.outline = 'none';
                e.target.style.borderColor = '#3498db';
                e.target.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button 
            type="submit" 
            style={styles.loginBtn}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Se connecter
          </button>
        </form>

        <div style={styles.quickSection}>
          <p style={styles.quickTitle}>Connexion rapide (démo)</p>
          <div style={styles.quickButtons}>
            <button
              style={{
                ...styles.quickBtn,
                borderColor: '#e74c3c',
                color: '#e74c3c'
              }}
              onClick={() => handleQuickLogin('admin')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = '#e74c3c';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'white';
                e.target.style.color = '#e74c3c';
              }}
            >
              Administrateur
            </button>
            <button
              style={{
                ...styles.quickBtn,
                borderColor: '#27ae60',
                color: '#27ae60'
              }}
              onClick={() => handleQuickLogin('teacher')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = '#27ae60';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'white';
                e.target.style.color = '#27ae60';
              }}
            >
              Enseignant
            </button>
            <button
              style={{
                ...styles.quickBtn,
                borderColor: '#3498db',
                color: '#3498db'
              }}
              onClick={() => handleQuickLogin('student')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = '#3498db';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'white';
                e.target.style.color = '#3498db';
              }}
            >
              Étudiant
            </button>
          </div>
        </div>

        <div style={styles.footer}>
          <p>© 2024 Institut Universitaire de la Côte</p>
          <p style={styles.teamCredits}>Développé par l'équipe 3IAC</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;