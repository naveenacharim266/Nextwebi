import React, { useState } from "react";
import bgImage from "../assets/images/home/home.jpg";
import logo from "../assets/images/home/logo.png";
import "./home.scss";
function Home() {
    const navItems = [
      { label: "Company", items: [{ label: "About Us" }, { label: "Team" }, { label: "Careers" }] },
      { label: "Services", items: [{ label: "Web Development" }, { label: "Mobile Apps" }] },
      { label: "Hire developers", items: [{ label: "Frontend" }, { label: "Backend" }, { label: "Full Stack" }] },
      { label: "Solutions", items: [{ label: "E-commerce" }, { label: "CRM" }] },
      { label: "Technologies", items: [{ label: "React" }, { label: "Node.js" }, { label: "Python" }] },
      { label: "Our Work" } 
    ];
  
    return (
      <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src={logo} alt="Nextwebi" height="31" width="151" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav align-items-lg-center">
                {navItems.map((item, idx) =>
                  item.items ? (
                    <li key={idx} className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id={`${item.label}-dropdown`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.label}
                      </a>
                      <ul className="dropdown-menu" aria-labelledby={`${item.label}-dropdown`}>
                        {item.items.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <a className="dropdown-item" href={`#${subItem.label.toLowerCase().replace(/\s+/g, "-")}`}>
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={idx} className="nav-item">
                      <a className="nav-link" href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
                        {item.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
  
            <button className="btn btn-danger ms-lg-3 ms-auto">Contact Us</button>
          </div>
        </nav>
  
        <section className="home-hero d-flex align-items-center justify-content-center">
          <div className="container position-relative">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <h1 className="hero-title text-white fw-bold mb-3">
                  Offshore Software
                  <br />
                  Development Company in
                  <br />
                  New York
                </h1>
                <p className="hero-subtitle text-white-50 mb-4">
                  At Nextwebi, we provide agile result-oriented offshore software development services for
                  companies ranging from startups to enterprises to help you keep up with constant
                  technological evolution. We deploy a team of expert developers
                </p>
                <div className="d-flex gap-3">
                  <a href="#contact" className="btn btn-primary px-4 py-2">
                    Get in Touch
                  </a>
                  <a href="#works" className="btn btn-outline-light px-4 py-2">
                    Our Works
                  </a>
                </div>
              </div>
            </div>
  
            <button className="hero-arrow hero-arrow-left" aria-label="Previous">
              &#8249;
            </button>
            <button className="hero-arrow hero-arrow-right" aria-label="Next">
              &#8250;
            </button>
  
            <div className="hero-dots" aria-hidden="true">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </section>
      </div>
    );
  }
export default Home;