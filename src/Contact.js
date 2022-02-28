import React, { useRef } from 'react';
import './Contact.scss'
import Footer from './Footer'
import emailjs from 'emailjs-com'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n6jbqw2', 'template_8qoxkyu', e.target, 'haY9CCbjnHs84SIFl')
      .then((result) => {
          console.log(result.text);
          alert('Message sent!')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contact'>
      <div className="con--container">
        <h1> <span className='symbol'>&#10070;</span> Let's talk</h1>
        <div className="con--card">

          <form ref={form} onSubmit={sendEmail}>
            <div className="username">
            <label>
              First Name <span className='star'>*</span>
              <input type="text" name="fname" />
            </label>
            <label>
              Last Name <span className='star'>*</span>
              <input type="text" name="lname" />
            </label>
            </div>
            <label>
              Email <span className='star'>*</span>
              <input type="email" name="email"  className='width'/>
            </label>
            <label>
              Subject
              <input type="text" name="subject"  className='width'/>
            </label>
            <label>
              Message
              <input type="text" name="msg"  className='msg'/>
            </label>
            <input type="submit" value="Send" className='button'/>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact