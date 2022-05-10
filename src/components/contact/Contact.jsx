// import { useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import { useState } from "react";

const Result = () => {
  return <p className="mess">Your message has been succesfully sent.<br/>i will contact you soon :)</p>;
};

function Contact() {
  const [result, showResult] = useState(false);
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_f55edvm','template_0lwj2di',e.target,'_mAyVt0D-NBgQWdeN')
    .then(res=>{
      console.log(res);
    }).catch(e=>{
      console.error(e)
    })
    e.target.reset();
    showResult(true);
  } 
 
  return (

    <div className="contact" id="contact">
      
      <div className="right">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Enter Your Name" />
        <input type="email" name="user_email" placeholder="Enter Your Email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
        {result ? <Result /> : null}
      </form>
      </div>
      
    </div>
   
  );
}

export default Contact;
