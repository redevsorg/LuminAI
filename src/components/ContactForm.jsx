import React, { useState } from 'react';
import Modal from './Modal';
import useModal from '../hooks/useModal';

const ContactForm = () => {
    const { isOpen, openModal, closeModal } = useModal();     

    const [formData, setFormData] = useState({
        email: '',
        heardFrom: '',
        questionType: '',
        additionalInfo: '',
        course: ''
    });

    const [errors, setErrors] = useState({});

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
            openModal();
        }
        else {
            // create a new error model with only ok (useModal) based on the error message.
        }
    };

    const handleConfirmClick = () => {
        window.location.href = 'https://forms.gle/RaW38zynf2p515Ua8';
        // send an email to admin@luminai.com
    };

  return (
    <div>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1">
                Name
            </label>
            <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your name" required/>
        </div>
    
        <div>
            <label className="block text-gray-700">
            Email
            </label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md p-2 border"
                placeholder="Enter your full email" required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>


        <div>
            <label className="block text-gray-700">How did you hear about us?</label>
            <select
                name="heardFrom"
                value={formData.heardFrom}
                onChange={handleChange}
                className="mt-1 block w-full border p-2 border-gray-500 rounded-md"
                required
            >
                <option value="">Select an option</option>
                <option value="internet search">Internet Search</option>
                <option value="reddit">Reddit</option>
                <option value="discord">Discord</option>
                <option value="school announcement">School Announcement</option>
                <option value="other">Other (Please Specify)</option>
            </select>
            {formData.heardFrom === 'other' && (
                <input
                type="text"
                name="additionalInfo"
                placeholder="Please specify"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md border p-2"
                required
                />
            )}
            {errors.heardFrom && <p className="text-red-500 text-sm">{errors.heardFrom}</p>}
        </div>

    "// Select the type of question for inquiry, and change the message flex box if necessary"

        <div>
            <label className="block text-gray-700">Type of question</label>
            <select
                name="questionType"
                value={formData.questionType}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-500 rounded-md"
                required
            >
                <option value="">Select a question</option>
                <option value="improve">Help us improve!</option>
                <option value="course/camp">Questions about course/camp</option>
                <option value="collaboration/business">Contact for collaboration/business reasons</option>
            </select>
        </div>


        <div>
        {formData.questionType === 'course/camp' && (
            <div>
                <label className="block text-gray-700">Course Name</label>
                <select name="course" value={formData.course} onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md border p-2">
                    <option value="">Select a course</option>
                    <option value="AI innovate scholars">AI Innovate Scholars</option>
                </select>
            </div>
        )}
        {errors.questionType && <p className="text-red-500 text-sm">{errors.questionType}</p>}
        </div>
        
        <div>    
            <label className="block mb-1">
                Message
            </label>
            <textarea name="message" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your message" required></textarea>
        </div>
    

        <div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Submit
            </button>
        </div>

    </form>
    <Modal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleConfirmClick}>
        <p className="mb-4">
            We have received your message. You will hear back from our team soon.
        </p>
    </Modal>
    </div>
  );
};

export default ContactForm;