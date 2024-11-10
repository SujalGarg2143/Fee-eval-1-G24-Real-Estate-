import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login</title>
  <link rel="stylesheet" href="Login.css" />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div className="wrapper">
    <form id="loginForm">
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" id="username" placeholder="Username" required="" />
        <i className="bx bxs-user" />
      </div>
      <br />
      <div className="input-box">
        <input
          type="password"
          id="password"
          placeholder="Password"
          required=""
        />
        <i className="bx bxs-lock-alt" />
      </div>
      <br />
      <br />
      <div className="remember-forgot">
        <label>
          <input type="checkbox" id="rememberMe" />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <br />
      <button type="submit" className="btn">
        Login
      </button>
      <br />
      <br />
      <div className="register-link">
        <p>
          Don't have an account?{" "}
          <a href="Register.html" target="_blank">
            Register
          </a>
        </p>
      </div>
    </form>
  </div>
</>


   );
};

export default Login;
