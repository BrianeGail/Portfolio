import React from 'react';
import { FaCode, FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-200 p-10 pt-28 mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

 <div className="flex justify-center items-center mb-6 md:mb-0 md:mr-8">
          <img
            src="./assets/profile.png"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
        </div>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I am a passionate front-end developer with two years of experience in web development,
          specializing in creating user-friendly and visually appealing systems. I have a strong
          foundation in communication skills, allowing me to collaborate effectively with team members,
          designers, and stakeholders to bring innovative ideas to life and enhance the overall user
          experience.
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Additionally, I am a skilled Linux system analyst, adept at maintaining and optimizing web
          applications to ensure they run smoothly. I thrive on problem-solving and continuously seek
          to improve system performance and functionality.
        </motion.p>
      


       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
    
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg text-center flex justify-center items-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <FaCode className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Front-End Developer</h3>
            <p className="text-gray-600">Specializing in user-friendly and visually appealing designs</p>
          </motion.div>

          {/* Linux System Analyst Section */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg text-center flex justify-center items-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <FaServer className="text-green-500 text-5xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Linux System Analyst</h3>
            <p className="text-gray-600">Ensuring smooth and optimized web application performance</p>
          </motion.div>
        </div>

        {/* "View Resume" Button */}
        <div className="mt-8">
          <motion.button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition mt-4"
            onClick={() => window.open('./assets/cv_castada.pdf', '_blank')}
            whileHover={{ scale: 1.1 }}
          >
            View Resume
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;