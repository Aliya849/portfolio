import React from 'react';
import Navbar from './Navbar';
import { FaShoppingCart,FaTrophy,FaShoppingBasket, FaReact, FaCode } from 'react-icons/fa';

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white  w-[90%] mx-auto">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-24 mb-4 sm:mb-2">
        <div className="bg-gray-800 p-10  rounded-2xl shadow-lg mb-10 ">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaShoppingCart className="mr-2 text-yellow-500" />
            Shopping Cart Project
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            A user-friendly shopping cart application created in C during a hackathon, designed for efficient item management and smooth user interaction. Secured second place in the competition for its innovation and functionality.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Features</h3>
          <ul className="text-xl list-disc pl-5 mb-4 text-gray-400">
            <li>Item Management: Add, remove, and edit items in the cart.</li>
            <li>User-friendly interface for seamless navigation.</li>
            <li>Real-time total calculation and checkout process.</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
          <p className="text-gray-400 mb-4 text-xl">
            <FaCode className="inline mr-2 text-yellow-500 " />
            C Programming
          </p>
          <h3 className="text-2xl font-semibold mb-2">Hackathon Achievement</h3>
          <p className="text-gray-400 mb-4 text-xl">
            <FaTrophy className="inline mr-2 text-yellow-500 text-xl" />
            Secured <span className="font-semibold text-xl">second place</span> in the hackathon for its creativity and smooth functionality, with excellent presentation.
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
          <ul className="list-disc pl-5 mb-4 text-gray-400 text-xl">
            <li><span className="font-semibold text-xl">Product Listing:</span> Fetches product data using APIs.</li>
            <li><span className="font-semibold text-xl">Shopping Cart:</span> Add items to cart and checkout process.</li>
            <li><span className="font-semibold text-xl">Responsive Design:</span> Fully responsive layout using Tailwind CSS.</li>
            <li><span className="font-semibold text-xl">React Router:</span> Navigate through pages without reloading.</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2 ">Technologies Used</h3>
          <p className="text-gray-400 mb-4 text-xl">
            <FaReact className="inline mr-2 text-blue-400 " />
            React JSX, React Router, Tailwind CSS, APIs
          </p>
          <div className="flex space-x-4 text-2xl">
            <a href="https://aliya-e-commerce.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-400">
             
              Visit to my website
            </a>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
