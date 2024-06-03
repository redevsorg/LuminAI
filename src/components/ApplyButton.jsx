import React from 'react';
import useModal from '../hooks/useModal';
import Modal from './Modal';

const ApplyButton = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleConfirmClick = () => {
    window.location.href = 'https://forms.gle/RaW38zynf2p515Ua8';
  };

  return (
    <div className="text-center mt-8">
      <button onClick={openModal} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
        Apply Now
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} onConfirm={handleConfirmClick}>
        <p className="mb-4">You are about to leave LuminAI. Do you want to proceed?</p>
      </Modal>
    </div>
  );
};

export default ApplyButton;

