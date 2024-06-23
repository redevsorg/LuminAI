import React from 'react';

const TeamMember = ({ name, role, fact, description }) => {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg text-center transition-transform transform hover:scale-105" data-aos="fade-up">
      <div className="w-full h-52 bg-gray-300 rounded mb-4"></div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-lg">{role}</p>
      <p className="text-sm italic">{fact}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TeamMember;
