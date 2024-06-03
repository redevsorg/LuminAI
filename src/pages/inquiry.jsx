import React from 'react';

const Inquiry = () => (
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
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  </div>
);

export default Inquiry;
