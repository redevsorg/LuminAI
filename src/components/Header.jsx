import React from 'react';
import '../styles/App.css';
import '../styles/Header.css';
import getMode from '../utils/getMode';
import { Link } from '@tanstack/react-router';

const Header = () => {
  const mode = getMode();
  const headerClass = `header bg-blue-600 text-white p-4 hidden ${mode === "dark" ? "header-dark" : "header-light"}`;
  const navClass = `mt-2 ${mode === "dark" ? "header-dark" : "header-light"}`; // add fonts

  return (
    <div>
      <header className={headerClass}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl">LuminAI Innovate Scholars</h1>
          <nav className={navClass}>
            <Link to="/" className="mx-2">Home</Link>
            <Link to="/syllabus" className="mx-2">Syllabus</Link>
            <Link to="/staff" className="mx-2">Meet Our Staff</Link>
            <Link to="/inquiry" className="mx-2">Inquiry</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
