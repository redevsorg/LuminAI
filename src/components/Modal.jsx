import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, onConfirm, children }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActive(true);
    } else {
      setTimeout(() => setActive(false), 300);
    }
  }, [isOpen]);

  if (!active) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 
    ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    style={{animation: 'buttonFadeIn 0.5s ease-in-out'}}
    >
      <div className={`bg-white p-6 rounded shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        {children}
        <div className="flex justify-between mt-4">
          <button onClick={onConfirm} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Yes
          </button>
          <button onClick={onClose}
           className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
           
           >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
