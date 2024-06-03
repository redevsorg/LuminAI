import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-white p-6 rounded shadow-lg transition-transform duration-300">
        {children}
        <div className="flex justify-between mt-4">
          <button onClick={onConfirm} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Yes
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
