import React, { useRef, useState } from 'react';
import "./style.css/Contact.css"
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react'
import Fade from 'react-reveal/Fade';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {

  const notify_error = () => toast.error("Please enter all fields");
  const notify_success = (name) => toast.success(`Thank you ${name}`);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {

      notify_error()
    } else {


      emailjs.sendForm('service_r071gij', 'template_fbv2qgp', form.current, 'CSSkauvuYcMLuAi64')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      setName('')
      setMsg('')
      setEmail('')
      notify_success(name)
    }
  };

  return (

    <>
     
      <div className="contact" id='contact'>
        <div className="contactIcon">
          <Fade left>

            <img src={require('../Component/asset/coding.gif')} alt="" />

            <div className="iconicon">

              <span>
                <a href="mailto:nayandhongadi26@gmail.com">
                  <Icon icon="logos:google-gmail" width="35" height="35" />
                </a>
              </span>
              <span >
                <a href="https://www.linkedin.com/in/nayan-dhongadi-320ab0283" target="_blank">

                  <Icon icon="il:linkedin" width="35" height="35" color="blue" />
                </a>
              </span>
              <span>
                <a href="https://wa.me/919730418966" target="_blank">
                  <Icon icon="logos:whatsapp-icon" width="35" height="35" color="blue" />
                </a>
              </span>
              <span>
                <a href="https://github.com/NayanDhongadi" target="_blank">
                  <Icon icon="uil:github" width="35" height="35" color="black" />
                </a>
              </span>


            </div>
          </Fade>
        </div>
        <Fade right>

          <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>


              <p ><label>Enter your Name</label></p>
              <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name='from_name' />
              <p><label >Enter your Email</label></p>
              <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" />
              <p><label >Enter your Message</label></p>
              <textarea name="message" value={msg} onChange={(e) => { setMsg(e.target.value) }} id="msg" cols="40" rows="6"></textarea>
              <br />
              <button onClick={sendEmail} type="submit" value='Send' className="sbbtn">Submit</button>
            </form>
          </div>
        </Fade>
        <ToastContainer />
      </div>
    </>
  )
}
