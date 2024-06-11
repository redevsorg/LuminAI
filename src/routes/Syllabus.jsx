import React from 'react';
import { createFileRoute } from '@tanstack/react-router'
import getMode from '../utils/getMode';
import { Helmet } from 'react-helmet-async';

export const Route = createFileRoute('/Syllabus')({
  component: Syllabus,
})

function Syllabus() {
  var colorMode = getMode();

  return (
    <div data-scroll-section id='main-container'
    className={(colorMode === "dark") ? "text-white" : "text-black"}
    style={{ backgroundColor: (colorMode === 'dark') ? "#18181B" : "#f3f3f3" }}
    >
      <Helmet>
        <title>LuminAI - Syllabus</title>
      </Helmet>

      <div className="p-4 justify-center text-center"
        style={{ animation: 'textPopIn 0.7s ease-in-out' }}
      >
        <h2 className="text-2xl font-bold mb-4">Bootcamp Syllabus</h2>
        <p>Here you will find the detailed curriculum for our AI bootcamp.</p>
      </div>
    </div>
  )
};

export default Syllabus;
