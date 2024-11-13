import React from 'react';
import { FaEnvelope, FaTelegramPlane, FaFacebookF, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-200 p-10 pt-28 mt-16">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">Contact</h2>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <p className="text-center text-lg text-gray-700 mb-6">Feel free to reach out to me through any of the following:</p>
        
        <div className="flex items-center space-x-4 mb-4">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <p className="text-lg text-gray-800">Email: <a href="mailto:gailcastada17@gmail.com" className="text-blue-500 hover:underline">gaicastada17@gmail.com</a></p>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <FaTelegramPlane className="text-blue-400 text-2xl" />
          <p className="text-lg text-gray-800">Telegram: <a href="https://t.me/briane_castada" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@briane_castada</a></p>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <FaFacebookF className="text-blue-700 text-2xl" />
          <p className="text-lg text-gray-800">Facebook: <a href="https://www.facebook.com/BrianeCastada " target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">BrianeCastada</a></p>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-green-500 text-2xl" />
          <p className="text-lg text-gray-800">Phone: <span className="text-gray-700">09672803133</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
