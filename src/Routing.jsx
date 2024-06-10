// import React, { useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Syllabus from './pages/Syllabus';
// import Staff from './pages/Staff';
// import Inquiry from './pages/Inquiry';
// import './styles/App.css';
// import './styles/tailwind.css';
// import Header from './components/Header';
// import AOS from 'aos';
// import Popup from './components/Popup';

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);
  
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header/>
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/syllabus" element={<Syllabus />} />
//           <Route path="/staff" element={<Staff />} />
//           <Route path="/inquiry" element={<Inquiry />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <Popup/>
//       </main>
//       <Footer/>
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import Staff from './pages/Staff';
import Inquiry from './pages/Inquiry';
import './styles/App.css';
import './styles/tailwind.css';
import AOS from 'locomotive-aos';
import Popup from './components/Popup';

const Routing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Popup />
      </main>
      <Footer />
    </div>
  );
};

export default Routing;
