import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import Staff from './pages/Staff';
import Inquiry from './pages/Inquiry';
import './App.css';
import './styles/tailwind.css';
import Header from './components/Header';


const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header/>
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
    <Footer/>
  </div>
);

export default App;