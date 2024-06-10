import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import LocomotiveScroll from 'locomotive-scroll';
import Aos from 'locomotive-aos';
import './styles/Aos.css'; // Import AOS styles
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Header from './components/Header';
import getMode from './utils/getMode';
import './styles/Header.css';


const App = () => {

  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    const headerEl = document.querySelector('header');

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      // getDirection: true,  // research on the purpose of this
    });

    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });

    const handleScroll = () => {
      const scrollPosition = scroll.scroll.instance.scroll.y;
      const totalHeight = scroll.scroll.instance.limit.y;
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
          progressBarEl.style.opacity = (scrollPosition > windowHeight / 3) ? '1' : '0';
          progressBarEl.style.width = `${scrollPercentage}%`;
        }
      }
      
      if (scrollPosition > windowHeight / 2.5) {
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
  }, [showProgressBar]);

return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="relative">
        {showProgressBar && (
          <div id="progress-bar" className={(getMode() === "dark") ? "scroll-watcher-dark" : "scroll-watcher-light"} style={{ width: '0%' }}></div>
        )}
        <div id="root">
          <Header />
          <main id="main-container" data-scroll-container>
            <Routing />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
