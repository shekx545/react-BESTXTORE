import Icon1 from "../../assets/footer/icon1.png";
import Icon2 from "../../assets/footer/icon2.png";
import Icon3 from "../../assets/footer/icon3.png";
import Icon4 from "../../assets/footer/icon4.png";
import Icon5 from "../../assets/footer/icon5.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="logo">BESTXTORE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultricies viverra id
            egestas pharetra fermentum.
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Submit</button>
          </div>

          <div className="socials">
            <span><img src={Icon1} alt="Facebook" /></span>
            <span><img src={Icon2} alt="Instagram" /></span>
            <span><img src={Icon3} alt="Pinterest" /></span>
            <span><img src={Icon4} alt="X" /></span>
            <span><img src={Icon5} alt="TikTok" /></span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Customer Service</h4>
          <ul>
            <li>My Account</li>
            <li>Payments</li>
            <li>Term of Use</li>
            <li>Deliveries & Returns</li>
            <li>Gift Card</li>
            <li>Refund & Returns Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>About Us</h4>
          <ul>
            <li>Product</li>
            <li>Our Story</li>
            <li>Job Opportunities</li>
            <li>Store Locator</li>
            <li>Blog</li>
            <li>Reviews</li>
            <li>Trending Search</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 600 N Washington Ave Suite C203</p>
          <p>📞 +008 0642 118</p>
          <p>✉️ bestxtore@gmail.com</p>

          <h4 className="service-title">Service Time</h4>
          <p>⏰ 24-hour (Monday - Sunday)</p>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright 2023 BESTXTORE. Designed By BZOTech.com
      </div>
    </footer>
  );
}

export default Footer;
