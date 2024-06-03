import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Syllabus from './pages/syllabus';
import Staff from './pages/staff';
import Inquiry from './pages/inquiry';

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
