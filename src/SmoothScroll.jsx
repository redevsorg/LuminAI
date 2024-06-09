// import React, { useEffect } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import LocomotiveScroll from 'locomotive-scroll';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// const SmoothScroll = () => {
//   useEffect(() => {
//     const scrollEl = document.querySelector('#root');
//     const scroll = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       getDirection: true,
//     });

//     AOS.init({
//       duration: 1000,
//       once: true,
//     });

//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []);


//   return (
//     <BrowserRouter basename={process.env.PUBLIC_URL}>
//         <App />
//     </BrowserRouter>
//   );
// };

// export default SmoothScroll;

import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LocomotiveScroll from 'locomotive-scroll';
import Aos from 'locomotive-aos';
import './styles/Aos.css'; // Import AOS styles
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Header from './components/Header';

const SmoothScroll = () => {
  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    const headerEl = document.querySelector('header');
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });

    const handleScroll = () => {
      const scrollPosition = scroll.scroll.instance.scroll.y;
      if (scrollPosition > window.innerHeight / 2) {
        headerEl.style.opacity = '1';
      } else {
        headerEl.style.opacity = '0';
      }
    };

    scroll.on('scroll', handleScroll);

    return () => {
      scroll.destroy();
      scroll.off('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div id="root">
        <Header/>
        <main id="main-container" data-scroll-container>
          <App />
        </main>
      </div>
    </BrowserRouter>
  );
};


export default SmoothScroll;
