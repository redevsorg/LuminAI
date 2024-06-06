import React, { useState } from 'react';
import Modal from './Modal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    heardFrom: '',
    questionType: '',
    additionalInfo: '',
    course: ''
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Valid email is required';
    }
    if (!formData.heardFrom) {
      tempErrors.heardFrom = 'Please select how you heard about us';
    }
    if (!formData.questionType) {
      tempErrors.questionType = 'Please select the type of question';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
    }
  };

  const handleConfirmClick = () => {
    window.location.href = 'https://forms.gle/RaW38zynf2p515Ua8';
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700">How did you hear about us?</label>
          <select
            name="heardFrom"
            value={formData.heardFrom}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          >
            <option value="">Select an option</option>
            <option value="internet search">Internet Search</option>
            <option value="reddit">Reddit</option>
            <option value="discord">Discord</option>
            <option value="school announcement">School Announcement</option>
            <option value="other">Other (Please specify)</option>
          </select>
          {formData.heardFrom === 'other' && (
            <input
              type="text"
              name="additionalInfo"
              placeholder="Please specify"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />
          )}
          {errors.heardFrom && <p className="text-red-500 text-sm">{errors.heardFrom}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Type of question</label>
          <select
            name="questionType"
            value={formData.questionType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          >
            <option value="">Select a type</option>
            <option value="improve">Help us improve!</option>
            <option value="course/camp">Questions about course/camp</option>
            <option value="collaboration/business">Contact for collaboration/business reasons</option>
          </select>
          {formData.questionType === 'course/camp' && (
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md"
            >
              <option value="">Select a course</option>
              <option value="AI innovate scholars">AI Innovate Scholars</option>
            </select>
          )}
          {errors.questionType && <p className="text-red-500 text-sm">{errors.questionType}</p>}
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmClick}
        confirmText="OK"
        cancelText="Cancel"
      >
        <p className="mb-4">We have received your message. You will hear back from our team soon.</p>
      </Modal>
    </div>
  );
};

export default ContactForm;
