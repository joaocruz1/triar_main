import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/header.css';

type HeaderProps = {
  title: string;
  subtitle: string;
  logoUrl: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle, logoUrl }) => {
  return (
    <header>
      <div className="top-section">
        <div className="logo">
          {logoUrl && <img src={logoUrl} alt="Logo" />}
        </div>
        <div className="text">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;



