import React from 'react';
import Navbar from './Navbar';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt, FaTools, FaUsers, FaComments, FaLightbulb, FaClock, FaCuttlefish, FaJava, FaPython, FaHashtag } from "react-icons/fa";

const technicalSkills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" />, description: "Experience with semantic HTML and accessibility." },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" />, description: "Proficient in responsive design, Flexbox, and Grid." },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" />, description: "Building interactive web applications with async data fetching." },
      { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" />, description: "Knowledge of Components, Hooks, and React Router." },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C Programming", icon: <FaCuttlefish className="text-blue-500 text-4xl" />, description: "Familiar with syntax and header files." },
      { name: "C#", icon: <FaHashtag className="text-purple-500 text-4xl" />, description: "Understanding of OOP concepts." },
      { name: "Java", icon: <FaJava className="text-red-500 text-4xl" />, description: "Basic knowledge with Java utilities." },
      { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" />, description: "Working with OS module." },
      { name: "Database", icon: <FaDatabase className="text-gray-500 text-4xl" />, description: "Skilled in SQL queries, Cursors, and Triggers." },
    ],
  },
  {
    category: "Version Control",
    skills: [{ name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-4xl" /> }],
  },
  {
    category: "Other Tools & Technologies",
    skills: [{ name: "REST APIs, Tailwind CSS", icon: <FaTools className="text-yellow-400 text-4xl" /> }],
  },
];

const softSkills = [
  { name: "Communication", icon: <FaComments className="text-blue-400 text-4xl" /> },
  { name: "Teamwork", icon: <FaUsers className="text-green-500 text-4xl" /> },
  { name: "Problem-Solving", icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
  { name: "Time Management", icon: <FaClock className="text-purple-500 text-4xl" /> },
];

function Skills() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 sm:p-12 md:p-16 lg:p-24">
        <div className="w-full max-w-5xl">
          <h3 className="text-3xl font-extrabold mb-10 text-center text-[#be95c4] mt-20">Technical Skills</h3>
          {technicalSkills.map((category, index) => (
            <div key={index} className="mb-8">
              <h4 className="text-xl font-semibold text-gray-300 mb-3 text-center md:text-left">{category.category}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                    {skill.icon}
                    <p className="mt-3 text-lg font-semibold">{skill.name}</p>
                    {skill.description && (
                      <p className="text-sm text-gray-400 mt-2 text-center">💡 {skill.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-5xl mt-12">
          <h3 className="text-3xl font-extrabold mb-6 text-center text-[#be95c4]">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                {skill.icon}
                <p className="mt-3 text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
