import React from 'react';
// import useModal from '../hooks/useModal';
// import Modal from '../components/Modal';
// import {Route} from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Inquiry = () => (
  // const { isOpen, openModal, closeModal } = useModal();
  // const handleConfirmClick = () => {
  //   window.location.href = <Route path="/inquiry"/>;
  // };

  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Contact us!</h2>
    <form className="space-y-4">
      <div>
      <ContactForm/>
      </div>
    </form>
  </div>
);

export default Inquiry;
