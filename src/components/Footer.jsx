import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-8 mt-10 shadow-lg">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-xl font-semibold">Stay in touch through my social platforms:</h2>

        <div className="flex justify-center flex-wrap gap-4 mt-3">
          <a 
            href="https://www.linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-2xl"
            aria-label="LinkedIn"
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-2xl"
            aria-label="GitHub"
          >
            <i className='bx bxl-github'></i>
          </a>
          <a 
            href="https://www.youtube.com/@yourchannel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-[#be95c4] transition-colors duration-300 text-2xl"
            aria-label="YouTube"
          >
            <i className='bx bxl-youtube'></i>
          </a>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Aliya Banu</h3>
          <p className="text-sm text-gray-300">Fresher</p>
          <p className="text-sm text-gray-400">Passionate about building interactive web applications.</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Skills</h3>
          <p className="text-sm text-gray-300">C, C#, Java, JavaScript, React.js, SQL</p>
        </div>

        <div className="flex justify-center gap-6 mt-4 text-sm">
        <Link to="/" className="hover:underline text-gray-300 font-semibold">Home</Link>  
        <Link to="/Projects" className="hover:underline text-gray-300 font-semibold">Projects</Link>  
        <Link to="/Contact" className="hover:underline text-gray-300 font-semibold">Contact</Link>  
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <p>Location: Davangere, Karnataka India</p>
          <p>Email: <a href="mailto:aliyabanu849.gmail.com" className="text-yellow-400 hover:underline">aliyabanu849.gmail.com</a></p>
        </div>

        <p className="text-sm mt-6">&copy; {new Date().getFullYear()} Aliya Banu. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
