import React from 'react';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Syllabus')({
  component: Syllabus,
})

function Syllabus() {
  return (
    <div className="p-4 justify-center text-center"
      style={{ animation: 'textPopIn 0.7s ease-in-out' }}
    >
      <h2 className="text-2xl font-bold mb-4">Bootcamp Syllabus</h2>
      <p>Here you will find the detailed curriculum for our AI bootcamp.</p>
    </div>
  )
};

export default Syllabus;
