import React from 'react';
import ApplyButton from '../components/ApplyButton';

const Home = () => (
  <div className="p-4 justify-center text-center"
  style={{animation: 'textPopIn 0.7s ease-in-out'}}
  >
    <h2 className="text-2xl font-bold mb-4">Welcome to LuminAI Innovate Scholars</h2>
    <p className="mb-4">Empowering the next generation of AI innovators through comprehensive bootcamps.</p>
    <ApplyButton />
  </div>
);

export default Home;
