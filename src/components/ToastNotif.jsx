import React from 'react';
import { Toaster, toast } from 'sonner';
import '../styles/App.css'; // Include any additional styles here

function Toast() {
  // Function to detect light/dark mode
  const getMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // Function to show toast notification
  const showToast = (message, type) => {
    const mode = getMode();
    toast(message, {
      className: `toast-${mode}`,
      duration: 2000,
      type: type,
      position: 'top-right',
      // Add custom CSS class for countdown bar
      style: { animation: 'countdown 2s linear forwards' },
    });
  };

  return (
    <div className="App">
      <Toaster />
      <button onClick={() => showToast('Success! Message sent.', 'success')} className="btn">
        Show Success Toast
      </button>
      <button onClick={() => showToast('Failed! Message not sent.', 'error')} className="btn">
        Show Error Toast
      </button>
    </div>
  );
}

export default Toast;
