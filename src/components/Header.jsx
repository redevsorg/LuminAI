import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import '../styles/ScrollBar.css'
import '../styles/Header.css';
import getMode from '../utils/getMode';

const Header = () => (
  <>
  <div class="scroll-watcher"/>
    <div><header className={"bg-blue-600 text-white p-4" + (getMode() === "dark") ? "header-dark" : "header-light"} 
    style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">LuminAI Innovate Scholars</h1>
        <nav className="mt-2">
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/syllabus" className="mx-2">Syllabus</Link>
          <Link to="/staff" className="mx-2">Meet Our Staff</Link>
          <Link to="/inquiry" className="mx-2">Inquiry</Link>
        </nav>
      </div>
    </header></div>
  </> 
);

export default Header;
