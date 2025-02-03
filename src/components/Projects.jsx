import React from 'react';
import Navbar from './Navbar';
import { FaShoppingCart,FaTrophy,FaShoppingBasket, FaReact, FaGithub, FaLink, FaCode } from 'react-icons/fa';

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white p-20">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-gray-800 p-10  rounded-2xl shadow-lg mb-10 ">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaShoppingCart className="mr-2 text-yellow-500" />
            Shopping Cart Project
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            A user-friendly shopping cart application created in C during a hackathon, designed for efficient item management and smooth user interaction. Secured second place in the competition for its innovation and functionality.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Features</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-400">
            <li>Item Management: Add, remove, and edit items in the cart.</li>
            <li>User-friendly interface for seamless navigation.</li>
            <li>Real-time total calculation and checkout process.</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
          <p className="text-gray-400 mb-4">
            <FaCode className="inline mr-2 text-yellow-500" />
            C Programming
          </p>
          <h3 className="text-2xl font-semibold mb-2">Hackathon Achievement</h3>
          <p className="text-gray-400 mb-4">
            <FaTrophy className="inline mr-2 text-yellow-500" />
            Secured <span className="font-semibold text-sm">second place</span> in the hackathon for its creativity and smooth functionality, with excellent presentation.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaShoppingBasket className="mr-2 text-green-500" />
            Grocery Shopping Project
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            A Grocery Shopping web app built using React, featuring dynamic product listings and a smooth user experience. It integrates APIs for fetching real-time data and allows users to manage their shopping list easily.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Features</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-400">
            <li><span className="font-semibold">Product Listing:</span> Fetches product data using APIs.</li>
            <li><span className="font-semibold">Shopping Cart:</span> Add items to cart and checkout process.</li>
            <li><span className="font-semibold">Responsive Design:</span> Fully responsive layout using Tailwind CSS.</li>
            <li><span className="font-semibold">React Router:</span> Navigate through pages without reloading.</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
          <p className="text-gray-400 mb-4">
            <FaReact className="inline mr-2 text-blue-400" />
            React JSX, React Router, Tailwind CSS, APIs
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-400">
              <FaGithub className="mr-2" />
              GitHub Repo
            </a>
            <a href="https://your-demo-link.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-400">
              <FaLink className="mr-2" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
