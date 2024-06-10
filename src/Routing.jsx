// import React, { useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Home from './pages/Home';
// import Syllabus from './pages/Syllabus';
// import Staff from './pages/Staff';
// import Inquiry from './pages/Inquiry';
// import './styles/App.css';
// import './styles/tailwind.css';
// import AOS from 'locomotive-aos';
// import Popup from './components/Popup';

// const Routing = () => {
//   useEffect(() => {
//     AOS.init({
//       easing: 'ease-in-out',
//     });
//   }, []);

//   return (

//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/syllabus" element={<Syllabus />} />
//           <Route path="/staff" element={<Staff />} />
//           <Route path="/inquiry" element={<Inquiry />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <Popup />
//       </main>

//   );
// };

// export default Routing;


import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import Staff from './pages/Staff';
import Inquiry from './pages/Inquiry';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Popup from './components/Popup';

const Routing = () => {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-out',
      duration: 1000,
      once: true,
    });
  }, []);

  return (
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
  );
};

export default Routing;

