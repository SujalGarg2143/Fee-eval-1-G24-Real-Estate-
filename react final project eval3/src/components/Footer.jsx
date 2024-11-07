// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <img src="src/assets/images/footer/footer-icon-1.png" alt="Need House" className="footer-img" />
                    <div className="footer-content">
                        <h3>Need House</h3>
                        <p>Find your dream home with us. Browse our listings and get in touch with an agent today.</p>
                        <a href="https://tally.so/r/wk5VKd" target="_blank" className="contact-button">Contact Us</a>
                    </div>
                </div>
                <div className="footer-section">
                    <img src="src/assets/images/footer/footer-icon-2.png" alt="Sell" className="footer-img" />
                    <div className="footer-content">
                        <h3>Sell</h3>
                        <p>Ready to sell your property? List it with us and get the best market insights and valuation.</p>
                        <a href="https://tally.so/r/wk5VKd" className="contact-button">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-contact">
                    <p>Contact Us: 1234567890</p>
                    <p>Email: opulentspaces@gmail.com</p>
                    <p>Address: Chitkara University, India</p>
                </div>
                <div className="footer-social">
                    <a href="#">Facebook</a> |
                    <a href="#">Twitter</a> |
                    <a href="#">Instagram</a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
