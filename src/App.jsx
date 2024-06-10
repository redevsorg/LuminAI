/*
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import LocomotiveScroll from 'locomotive-scroll';
import Aos from 'aos'; // Use AOS directly from the package
import 'aos/dist/aos.css'; // Ensure correct AOS styles import
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Footer from './components/Footer';
import Header from './components/Header';
import getMode from './utils/getMode';
import './styles/Header.css';

const App = () => {
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    const headerEl = document.querySelector('header'); // Ensure this selector matches your Header component

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    // Aos.init({
    //   duration: 1300,
    //   once: true,
    //   easing: "ease-in-out",
    // });

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       Aos.refresh();
    //     }
    //   });
    // });

    // document.querySelectorAll('[data-aos]').forEach((aosElem) => {
    //   observer.observe(aosElem);
    // });

    const handleScroll = (args) => {
      const scrollPosition = args.scroll.y;
      const totalHeight = args.limit.y;
      const windowHeight = window.innerHeight;

      if (totalHeight > 2.5 * windowHeight) {
        setShowProgressBar(true);
      } else {
        setShowProgressBar(false);
      }

      if (showProgressBar) {
        const progressBarEl = document.querySelector('#progress-bar');
        if (progressBarEl) {
          const scrollPercentage = (scrollPosition / totalHeight) * 100;
          progressBarEl.style.width = `${scrollPercentage}%`;
        }
      }

      if (headerEl) {
        if (scrollPosition > windowHeight / 2.5) {
          headerEl.style.opacity = '1';
        } else {
          headerEl.style.opacity = '0';
        }
      }
    };

    scroll.on('scroll', handleScroll);

    return () => {
      scroll.destroy();
      scroll.off('scroll', handleScroll);
      // observer.disconnect();
    };
  }, [showProgressBar]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <>
        {showProgressBar && (
          <div
            id="progress-bar"
            className={(getMode() === "dark") ? "scroll-watcher-dark" : "scroll-watcher-light"}
            style={{ width: '0%' }}
          ></div>
        )}
        <div>
          <Header />
          <main id="main-container" data-scroll-container>
            <Routing />
          </main>
          <Footer/>
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;

*/
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import getMode from './utils/getMode';
import './styles/Header.css';

const App = () => {
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    const headerEl = document.querySelector('header');
    const footerEl = document.querySelector('footer');

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('[data-aos]').forEach((aosElem) => {
      observer.observe(aosElem);
    });

    const handleScroll = (args) => {
      const scrollPosition = args.scroll.y;
      const totalHeight = args.limit.y;
      const windowHeight = window.innerHeight;

      if (totalHeight > 2.5 * windowHeight) {
        setShowProgressBar(true);
      } else {
        setShowProgressBar(false);
      }

      if (showProgressBar) {
        const progressBarEl = document.querySelector('#progress-bar');
        if (progressBarEl) {
          const scrollPercentage = (scrollPosition / totalHeight) * 100;
          progressBarEl.style.width = `${scrollPercentage}%`;
        }
      }

      if (headerEl) {
        if (scrollPosition > windowHeight / 2.5) {
          headerEl.style.opacity = '1';
          headerEl.classList.add('visible');
        } else {
          headerEl.style.opacity = '0';
          headerEl.classList.remove('visible');
        }
      }

      if (footerEl) {
        if (scrollPosition + windowHeight >= totalHeight) {
          footerEl.style.opacity = '1';
          footerEl.classList.add('visible');
        } else {
          footerEl.style.opacity = '0';
          footerEl.classList.remove('visible');
        }
      }

      // Reset animations when reaching the top
      if (scrollPosition === 0) {
        document.querySelectorAll('[data-aos]').forEach((aosElem) => {
          aosElem.classList.remove('aos-animate');
          observer.observe(aosElem);
        });
      }
    };

    scroll.on('scroll', handleScroll);

    return () => {
      scroll.destroy();
      scroll.off('scroll', handleScroll);
      observer.disconnect();
    };
  }, [showProgressBar]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <>
        {showProgressBar && (
          <div id="progress-bar"
            className={(getMode() === "dark") ? "scroll-watcher-dark" : "scroll-watcher-light"}
            style={{ width: '0%' }}
          ></div>
        )}
        <div>
          <Header />
          <main id="main-container" data-scroll-container>
            <Routing />
          </main>
          <Footer />
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
