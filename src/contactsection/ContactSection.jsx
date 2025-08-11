// ContactSection.jsx
import React from "react";
import "./ContactSection.scss";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        {/* Left Side - Contact Info */}
      <div className="contact-info col-6">
        <h4 className="sub-heading">Get in Touch</h4>
        <h2 className="main-heading">
          Connect for Excellence Your Gateway to Exceptional Solutions.
        </h2>

        <div className="loc-group"><div className="location">
          <img src="/images/india-flag.svg" alt="India" className="flag" />
          <div>
            <h3>India</h3>
            <p>
              4th Floor, 32/1, Mpark, NCPR Industrial Layout, Doddanekundi
              Industrial Area 2, Seetharampalya, Mahadevapura, Bengaluru,
              Karnataka 560048.
            </p>
          </div>
        </div>

        <div className="location">
          <img src="/images/usa-flag.svg" alt="USA" className="flag" />
          <div>
            <h3>USA</h3>
            <p>
              188 Spear st #350, <br />
              San Francisco, CA 94105 <br />
              United States
            </p>
          </div>
        </div>

        <div className="location">
          <img src="/images/uae-flag.svg" alt="UAE" className="flag" />
          <div>
            <h3>UAE</h3>
            <p>
              Office No.2042, ABN Group, 20th Floor, Burjuman Business Tower, <br />
              Al Mankhool, Burdubai Dubai.
            </p>
          </div>
        </div></div>
      </div>

      {/* Right Side - Form */}
      <div className="contact-form col-6">
        <h3 className="form-heading">
          Your Vision, Our Mission: Let's Shape Success Together.
        </h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Company Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Contact Number" required />
          <textarea placeholder="Describe Your Requirement" rows="5" required></textarea>

          <div className="form-extra">
            <label className="portfolio-option">
              <input type="checkbox" /> Click here to quickly get portfolio in your inbox
            </label>
            <div className="captcha">
              <span>5 + 3</span>
              <input type="text" />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Request Proposal
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}
