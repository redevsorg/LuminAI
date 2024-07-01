import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';

import getMode from '../utils/getMode';
import MovingGradient from '../components/DynamicGradient';
import '../styles/App.css';
import '../styles/Staff.css';

export const Route = createFileRoute('/Staff')({
  component: Staff,
});

function Staff() {
  const colorMode = getMode();



  const teamMembers = [
    { 
      name: 'John Doe', 
      role: 'President', 
      fact: 'Developed a state-of-the-art NLP model.', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
    },
    { 
      name: 'Jane Smith', 
      role: 'Director of Coursework', 
      fact: 'Specialized in machine learning algorithms.', 
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' 
    },
    { 
      name: 'Emily Chen', 
      role: 'Director of Logistics', 
      fact: 'Organized a statewide coding competition that attracted over 500 participants.', 
      description: 'Emily is known for her exceptional organizational skills and ability to handle complex logistics with ease. She ensures everything runs smoothly.' 
    },
    { 
      name: 'Michael Thompson', 
      role: 'Director of Management', 
      fact: 'Managed a team of 20 volunteers for a community tech education program.', 
      description: 'Michael\'s leadership and management skills have been instrumental in the success of several community projects, making a significant impact.' 
    },
    { 
      name: 'Sophia Martinez', 
      role: 'Director of Mentorship', 
      fact: 'Created a peer mentoring program that improved academic performance and morale among students.', 
      description: 'Sophia is passionate about helping others succeed. Her mentorship program has been a game-changer for many students, providing guidance and support.' 
    }
  ];  

  return (
    <div
      data-scroll-section
      id='main-container'
      className={(colorMode === "dark") ? "text-white" : "text-black"}
      style={{ backgroundColor: (colorMode === 'dark') ? "#18181B" : "#f3f3f3" }}
    >  
      <Helmet>
        <title>LuminAI - Staff</title>
      </Helmet>
      <div className="custom-border p-4 justify-center text-center" style={{ animation: 'textPopIn 0.7s ease-in-out' }}>
        <h2 className="text-2xl font-bold mb-4">Meet Our Staff</h2>
        <p>Information about our experienced instructors and staff members.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 p-6 rounded-lg text-center relative group"
              data-aos="fade-up"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <MovingGradient />
              </div>
              <h2 className="text-2xl font-bold ">{member.name}</h2>
              <div className="transform absolute inset-0 transition hover:scale-105 rounded-md bg-white bg-opacity-90 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 ">
                <p className="text-lg">{member.role}</p>
                <p className="text-sm italic">{member.fact}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Staff;
