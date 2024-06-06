import React from 'react';
// import useModal from '../hooks/useModal';
// import Modal from '../components/Modal';
// import {Route} from 'react-router-dom';
import ContactButton from '../components/ContactButton';

const Inquiry = () => (
  // const { isOpen, openModal, closeModal } = useModal();
  // const handleConfirmClick = () => {
  //   window.location.href = <Route path="/inquiry"/>;
  // };

  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Contact us!</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Name:</label>
        <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block mb-1">Email:</label>
        <input type="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block mb-1">Message:</label>
        <textarea name="message" className="w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <ContactButton/>
      {/* <Modal isOpen={isOpen} onClose={closeModal} onConfirm={handleConfirmClick}>
        <p className="mb-4">We have received your message. You will hear back from our team soon.</p>
      </Modal> */}
    </form>
  </div>
);

export default Inquiry;
