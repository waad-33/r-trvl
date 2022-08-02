import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          join the adventure newsletter to recieve our best vacation deals
        </p>
        <p className="footer-subscription-text">you can unsubscripe any time</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              className="footer-input"
            />
            <Button buttonStyle="btn-outline">SUBSCRIBE NOW </Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="navbar-logo">
              TRVL <ion-icon name="rocket" className="fab fa-typo3"></ion-icon>
            </Link>
          </div>
          <small className="website-rights">TRVL &#169; 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="facebook"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>

            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="instagram"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>

            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="twitter"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
