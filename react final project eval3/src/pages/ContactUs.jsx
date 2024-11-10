import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us</title>
  <link rel="stylesheet" href="Contact-Us.css" />
  <div className="con">
    <marquee width="100%" direction="right" height="100px">
      <strong>CONTACT US!</strong>
    </marquee>
  </div>
  <br />
  <div className="under">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.06236369937!2d-74.30933324138607!3d40.69701927059908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723824463420!5m2!1sen!2sin"
      width="100%"
      height={400}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  <div className="over">
    <img
      className="card-img1"
      src="https://img.icons8.com/?size=100&id=w0dIhl0x6mwx&format=png&color=000000"
      alt=""
    />
    <h2 className="card-heading">Call Us</h2>
    <p className="card-p">"Connect with Us—Your Questions Deserve Answers!"</p>
    <div className="card-buttons">
      <button>+123 456 789</button>
      <button>+(222)4567 586</button>
    </div>
  </div>
  <div className="over1">
    <img
      className="card-img1"
      src="https://img.icons8.com/?size=100&id=YbPqIO0gOrT3&format=png&color=000000"
      alt=""
    />
    <h2 className="card-heading">Email Us</h2>
    <p className="card-p">
      "Have a Suggestion? Email Us and Let Us Know Right Now!"
    </p>
    <p className="card-p2">
      <strong>Real.estate@email.com</strong>
    </p>
  </div>
  <div className="over2">
    <img
      className="card-img1"
      src="https://img.icons8.com/?size=100&id=qKOUyChoiEeu&format=png&color=000000"
      alt=""
    />
    <h2 className="card-heading">Social Media</h2>
    <p className="card-p">
      Easily find us on these different social media platforms.
    </p>
    <div className="s-media">
      <a href="https://www.instagram.com/chitkarau/" target="_blank">
        <img
          className="sm"
          src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
          alt="Instagram"
        />
      </a>
      <a href="#" target="_blank">
        <img
          className="sm"
          src="https://img.icons8.com/fluency/48/000000/twitter.png"
          alt="Twitter"
        />
      </a>
      <a href="#" target="_blank">
        <img
          className="sm"
          src="https://img.icons8.com/fluency/48/000000/dribbble.png"
          alt="Dribbble"
        />
      </a>
      <a href="#" target="_blank">
        <img
          className="sm"
          src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
          alt="Facebook"
        />
      </a>
      <a href="#" target="_blank">
        <img
          className="sm"
          src="https://img.icons8.com/fluency/48/000000/whatsapp.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="container">
    <h1>Let Us Hear From You Directly!</h1>
    <p className="op">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </p>
    <div className="row">
      <div className="col">
        <img
          src="../Fee-eval-1-G24-Real-Estate-/images/ContactUs/ppppp.png"
          alt="Contact Image"
        />
      </div>
      <div className="col">
        <form>
          <label htmlFor="name">
            Name:
            <span className="extra">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required=""
          />
          <label htmlFor="email">
            Your Email:<span className="extra">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required=""
          />
          <label htmlFor="phone">
            Your Phone:<span className="extra">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required=""
          />
          <label htmlFor="comments">Your Comments:</label>
          <textarea
            type="text"
            name="comments"
            id="comments"
            placeholder="Tell us what we can help you with!"
            defaultValue={""}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
  <br />
  
</>


   );
};

export default ContactUs;
