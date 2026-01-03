import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children, userType, userName, onLogout }) => {
  return (
    <div className="layout">
      <Header 
        userType={userType} 
        userName={userName} 
        onLogout={onLogout}
      />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;