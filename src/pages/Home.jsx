import React from 'react';
import ApplyButton from '../components/ApplyButton';
import '../styles/App.css';
// import Aos from 'locomotive-aos';
import { Toaster } from 'sonner';
import showNotif from '../components/ToastNotif';
import getMode from '../utils/getMode';

const Home = () => {
  var colorMode = getMode();
  return (
    <div data-scroll-section id='main-container' 
    className={(colorMode === "dark") ? "text-white" : "text-black"} 
    style={{backgroundColor: (colorMode === 'dark') ? "#18181B" : "#f3f3f3"}}
    >

      <div className='flex-container'>
        <div className="p-4 justify-center text-center" style={{ animation: 'textPopIn 0.7s ease-in-out' }}>
          <h2 className="text-2xl font-bold mb-4">Welcome to LuminAI Innovate Scholars</h2>
          <p className="mb-4">Empowering the next generation of AI innovators through comprehensive bootcamps.</p>
          <ApplyButton />
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">Welcome to Lumin AI Innovate Scholars</h2>
        <p className="mb-4" data-aos="fade-up" data-aos-delay="100">Empowering the next generation of AI innovators through comprehensive bootcamps.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">Completely Free</h3>
            <p>Lumin AI Innovate Scholars is a completely free bootcamp. We believe in providing quality education to everyone without any cost at all.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">From Students, For Students</h3>
            <p>Our program is created by students who understand the challenges and needs of learning AI. We aim to make AI education accessible to all students.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">Non-Profit Organization</h3>
            <p>We are a non-profit organization dedicated to spreading knowledge and fostering innovation in the field of artificial intelligence.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">Legitimate Industry Standard AI</h3>
            <p>Our curriculum covers industry-standard AI tools and techniques, ensuring that our students are well-prepared for real-world applications.</p>
          </div>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-bold mb-4">Programming Frameworks and Libraries</h3>
          <p>We cover popular programming frameworks and libraries such as PyTorch and TensorFlow, helping you build robust AI models.</p>
          <ul className="list-disc list-inside">
            <li>Convolutional Neural Networks (CNNs)</li>
            <li>Image Recognition</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Reinforcement Learning (RL)</li>
            <li>Machine Learning Algorithms</li>
          </ul>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl font-bold mb-4">Mathematical Foundations</h3>
          <p>We also cover essential mathematical concepts that are fundamental to AI, including:</p>
          <ul className="list-disc list-inside">
            <li>Matrices and Basic Linear Algebra</li>
            <li>Principles of Neural Networks</li>
            <li>Understanding Large Language Models (LLMs)</li>
          </ul>
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
          <ApplyButton />
        </div>

        <div>
          <Toaster richColors/>
          <button onClick={() => showNotif('Success! Message sent.', 'success')} className="btn mt-1 p-1 border rounded">
          Show Success Toast
        </button>
        <button onClick={() => showNotif('Failed! Message not sent.', 'error')} className="btn mt-1 p-1 border rounded">
          Show Error Toast
        </button>

        </div>
        

      </div>
    </div>
  );
};

export default Home;
