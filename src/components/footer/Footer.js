import './Footer.css'
import lightLogo from '../../images/logo light.png'
import phone from '../../images/icons/Phone.png'
import mail from '../../images/icons/mail.png'
import location from '../../images/icons/Location.png'

export default function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <div class="footer-column left-col">

                    <img class="logo" src={lightLogo} alt="logo" />


                    <p>Your First Chance to Be Iconic</p>
                </div>
                <div class="footer-column right-col">
                    <div class="footer-right-top">
                        <h3>Contact Info</h3>
                        <ul class="contact-info">
                            <li><img src={phone} alt="Phone Icon" />+962 7 912 345 678</li>
                            <li><img src={mail} alt="Email Icon" />mail@retaurant.com</li>
                        </ul>
                    </div>
                    <div class="footer-right-top">
                        <h3>Our Location</h3>
                        <ui class="contact-info">
                            <li><img src={location} alt="Location Icon" />Location, map</li>
                        </ui>
                    </div>

                </div>
            </div>
        </footer>
    )
}