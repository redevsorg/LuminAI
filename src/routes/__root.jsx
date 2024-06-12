import { createRootRoute, Outlet } from '@tanstack/react-router'
import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import getMode from '../utils/getMode';
import '../styles/Header.css';
import '../styles/App.css';

export const Route = createRootRoute({
    component: Root
})

function Root() {
    const [showProgressBar, setShowProgressBar] = useState(false);

    useEffect(() => {
        const scrollEl = document.querySelector('#main-container');
        const headerEl = document.querySelector('header');
        const footerEl = document.querySelector('footer');

    /*
        // For debugging use only
        console.log('Elements:', { scrollEl, headerEl, footerEl });
        if (!scrollEl || !headerEl || !footerEl) {
            console.error('Missing elements:', { scrollEl, headerEl, footerEl });
            return;
        }
    */
   
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
                    headerEl.classList.add('visible');
                    headerEl.classList.remove('hidden');
                } else {
                    headerEl.classList.remove('visible');
                    headerEl.classList.add('hidden');
                }
            }
            
            if (footerEl) {
                if (scrollPosition + windowHeight >= totalHeight) {
                    footerEl.classList.add('visible');
                    footerEl.classList.remove('hidden');
                } else {
                    footerEl.classList.remove('visible');
                    footerEl.classList.add('hidden');
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
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};