import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Form</title>
    <link rel="stylesheet" href="Register.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <div className="wrapper">
      <form action="">
        <h1>Registration Form</h1>
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Full Name" required="" />
            <i className="bx bxs-user" />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Username" required="" />
            <i className="bx bxs-user" />
          </div>
        </div>
        <div className="input-box">
          <div className="input-field">
            <input type="email" placeholder="Email" required="" />
            <i className="bx bxs-envelope" />
          </div>
          <div className="input-field">
            <input type="number" placeholder="Phone Number" required="" />
            <i className="bx bxs-phone" />
          </div>
        </div>
        <div className="input-box">
          <div className="input-field">
            <input type="password" placeholder="Password" required="" />
            <i className="bx bxs-lock" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Confirm Password" required="" />
            <i className="bx bxs-lock" />
          </div>
        </div>
        <label>
          <input type="checkbox" />I hereby declare that the above information
          provided is true and correct
        </label>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>

  </>


   );
};

export default Register;
