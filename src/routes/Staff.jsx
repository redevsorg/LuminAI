import React from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async';

export const Route = createFileRoute('/Staff')({
  component: Staff,
})

function Staff() {
  return (
    <div data-scroll-section id='main-container'
    className={(colorMode === "dark") ? "text-white" : "text-black"}
    style={{ backgroundColor: (colorMode === 'dark') ? "#18181B" : "#f3f3f3" }}
    >  
    <Helmet>
        <title>LuminAI - Staff</title>
      </Helmet>
      <div className="p-4 justify-center text-center"
        style={{ animation: 'textPopIn 0.7s ease-in-out' }}
      >
        <h2 className="text-2xl font-bold mb-4">
          Meet Our Staff
        </h2>
        <p>Information about our experienced instructors and staff members.</p>

        <div>
          NPO Board Members
          President
          Director of Coursework/
          Director of Logistics
          Director of Management
          Director of Mentorship

          (term for a part of a NPO, per school)

        </div>
      </div>
    </div>
  )
};

export default Staff;
