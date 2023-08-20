import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
// import {CiFacebook} from 'react-icons/ci'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2x907vx', 'template_krotg89', form.current, 'RdVlW2veCPehxlgaG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()  
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mrzaqulovbegzod@gmail.com</h5>
            <a href="mailto:mrzaqulovbegzod@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>sql_me</h5>
            <a href="https://t.me/sql_me" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          {/* <article className="contact__option">
            <CiFacebook className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>suraj.sulten@gmail.com</h5>
            <a href="https://m.me/" target='_blank'>Send a message</a>
          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="meassage" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact