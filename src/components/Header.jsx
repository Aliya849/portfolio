import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
       <Navbar/> 
        <section className="home " id="home">
        <div className="home-content">
            <h1>Hi,It's<span> Aliya</span></h1>
            <h3 className="textanim">I'm a <span></span></h3>
            <p>
            I am currently pursuing a Bachelor of Computer Applications (BCA) at INTERFACE COLLEGE OF COMPUTER APPLICATION (ICCA) in Davangere. Throughout my academic journey, I have developed a strong foundation in computer science and a keen interest in software development.
            <br />
            I am passionate about solving complex problems and continuously learning new technologies. My goal is to build a career in software development, where I can contribute to innovative projects and grow as a professional.
            </p>
        

        <div className="social-icons">
        <a href="https://www.linkedin.com/in/aliya-banu-188b09313" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>           
        <a href="https://github.com/Aliya849" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>           
        <a href="https://www.youtube.com/@aliyabanu4507" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a>           
        </div>

        <div className="btn-grp">
             <Link to="/contact" className="btn">Contact Me</Link>
        </div>
    </div>
        <div className="image">
            <img src="myimg1.jpg" alt=""/>
        </div>
     </section>

     <Footer/>
    </div>

  )
}

export default Header
