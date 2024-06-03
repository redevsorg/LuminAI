import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl">Lumin AI Innovate Scholars</h1>
      <nav className="mt-2">
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/syllabus" className="mx-2">Syllabus</Link>
        <Link to="/staff" className="mx-2">Meet Our Staff</Link>
        <Link to="/inquiry" className="mx-2">Inquiry</Link>
      </nav>
    </div>
  </header>
);

export default Header;
