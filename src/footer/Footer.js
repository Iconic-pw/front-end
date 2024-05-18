import React from "react";
import "../footer/Footer.css";


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-column left-col">
                    <div className="logo" alt="logo" ></div>
                    <h3>About Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        Sed nec augue ut ex blandit malesuada quis eget ipsum.
                    </p>
                </div>
                <div className="footer-column right-col">
                    <div className="footer-right-top">
                        <h3>Contact Info</h3>
                        <ul className="contact-info">
                            <li className="phone">
                                <span className="phone-icon"></span> +962 7 912 345 678
                            </li>
                            <li className="email">
                                <span className="email-icon"></span>
                                <a href="iconic@gmail.com">iconic@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right-top">
                        <h3>Our Location</h3>
                        <ul className="contact-info">
                            <li className="location">
                                <span className="location-icon"></span>
                                <a href="https://maps.google.com/?q=YourLocation">Location, map</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
