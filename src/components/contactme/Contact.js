import React, { useRef } from 'react'
import './Contact.css';
import github from '../../Assets/github.png';
import linkedin from '../../Assets/linkedin.png';
import twitter from '../../Assets/twitter.png';
import instagram from '../../Assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs
          .sendForm('service_nj9zonr', 'template_1dtb2nf', form.current, {
            publicKey: 'pMhlCc5XCCw_QX0yA',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("Email Send!");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
         
        }
  return (
    <div id='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>

      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' placeholder='Enter Your Name.' className='name' name='your_name'required></input>
        <input type='text' placeholder='Enter your Email' className='email' name='your_email'required></input>
      <textarea className="msg"  name='message' rows="5" placeholder='Your Message' ></textarea>
     <button type='submit' className='submitbtn' value='Send'>submit</button>
        </form>
      <div className='links'>
        <img src={instagram} alt='' className='link'/>
        <img src={github} alt='' className='link'/>
        <img src={linkedin} alt='' className='link'/>
        <img src={twitter} alt='' className='link'/>
      </div>
    </div>
  )
}

export default Contact
