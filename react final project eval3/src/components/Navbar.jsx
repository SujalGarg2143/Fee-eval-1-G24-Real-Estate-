import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="./src/assets/images/logo/op.png" alt="Logo" />
            </div>
            <div className="menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Services</Link>
                    <ul className="dropdown">
                        <li><Link to="/">Blogs</Link></li>
                        <li><Link to="/">Interior Design</Link></li>
                        <li><Link to="/">EMI Calculator</Link></li>
                    </ul>
                </li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact US</Link></li>
            </ul>
            <div className="login">
                <Link to="/">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
