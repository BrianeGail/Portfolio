import React from 'react';

const Project = () => {
  const projects = [
    {
      id: 1,
      img: './assets/1.png',
      title: 'Caritas Health Shield Payroll Management System',
      description: 'Payroll management system using HTML, Bootstrap, PHP, and MySQL.',
    },
    {
      id: 2,
      img: './assets/2.png',
      title: 'Record Management System',
      description: 'Front-end developer using Nuxt and Vuetify for consistent design.',
    },
    {
      id: 3,
      img: './assets/3.png',
      title: 'Inventory System',
      description: 'Inventory system with various features.',
      
    },
    {
      id: 4,
      img: './assets/4.png',
      title: 'Online Shopping',
      description: 'Implemented Docker and Pinia state management.',
    },
    {
      id: 4,
      img: './assets/5.png',
      title: 'Chinese Company website',
      description: 'Developed a responsive website for a Chinese company to showcase their services and products. Used modern web technologies and ensured compatibility with Chinese content and style preferences.',
    },
  ];

  return (
    <section id="project" className="min-h-screen bg-gray-200 p-10 pt-28 mt-16">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full md:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
