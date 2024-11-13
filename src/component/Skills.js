import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaVuejs, FaReact, FaBootstrap, FaPhp, FaDatabase, FaAws, FaLinux, FaGithub, FaFigma } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-200 p-10 pt-28 mt-16">
      <h2 className="text-4xl font-semibold text-center mb-6 text-gray-800">Skills</h2>
      <p className="text-lg text-center mb-8 text-gray-700">Here are some of the technologies and tools I am proficient in:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Skill 1 */}
        <div className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHtml5 className="text-red-600 text-5xl mb-4" />
          <p className="text-xl font-medium">HTML / CSS / JavaScript</p>
        </div>

        {/* Skill 2 */}
        <div className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaVuejs className="text-green-500 text-5xl mb-2" />
          <FaReact className="text-blue-600 text-5xl mb-2" />
          <p className="text-xl font-medium">Vue / React / Next.js</p>
        </div>

        {/* Skill 3 */}
        <div className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaPhp className="text-blue-600 text-5xl mb-4" />
          <FaDatabase className="text-yellow-600 text-5xl mb-4" />
          <p className="text-xl font-medium">PHP / Laravel / SQL</p>
        </div>

        {/* Skill 4 */}
        <div className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-5xl text-gray-700 mb-4">🔗</p>
          <p className="text-xl font-medium">API Integration</p>
        </div>

        {/* Skill 5 */}
        <div className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaLinux className="text-black text-5xl mb-4" />
          <p className="text-xl font-medium">Linux / Bash / Shell</p>
        </div>

        {/* Skill 6 */}
        <div className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaAws className="text-orange-500 text-5xl mb-4" />
          <p className="text-xl font-medium">DNS / AWS / GCP</p>
        </div>

        {/* Skill 7 */}
        <div className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-5xl text-gray-700 mb-4">💻</p>
          <p className="text-xl font-medium">Windows / Mac Troubleshooting</p>
        </div>

        {/* Skill 8 */}
        <div className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaFigma className="text-pink-500 text-5xl mb-4" />
          <p className="text-xl font-medium">Figma / UI/UX</p>
        </div>

        {/* Skill 9 */}
        <div className="text-center flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaGithub className="text-gray-800 text-5xl mb-4" />
          <p className="text-xl font-medium">Git / Version Control</p>
        </div>  
      </div>
    </section>
  );
};

export default Skills;
