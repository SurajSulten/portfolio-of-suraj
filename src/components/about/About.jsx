import React from 'react'
import "./about.css"
import AboutImg from '../../assets/Bekzod2.jpg'
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImg} alt="About-img" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}
          <p>
            I am a Backend Junior with experience in Django, Flask, and Python. I have completed certifications in Dasturlash from Bir Million Dasturchi and Pdp Academy. During my time at S-orca Company (Inivatsion Vazirligi), I gained valuable experience working on innovative projects. I am currently seeking new opportunities to further enhance my skills and contribute to a dynamic team. My proficiency in Git, Docker, and PostgreSQL allows me to efficiently collaborate with colleagues and deliver high-quality code. With strong problem-solving skills and a passion for clean coding practices, I am confident in my ability to tackle complex backend development tasks. If you are looking for a dedicated backend developer who is eager to learn and grow, please reach out!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>        
        </div>
      </div>
    </section>
  )
}




export default About