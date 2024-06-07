import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LocomotiveScroll from 'locomotive-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = () => {
  useEffect(() => {
    const scrollEl = document.querySelector('#root');
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      getDirection: true,
    });

    AOS.init({
      duration: 1000,
      once: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
  );
};

export default SmoothScroll;
