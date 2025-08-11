import React, { useState } from "react";
import bgImage from "../assets/images/home/home.jpg";
import logo from "../assets/images/home/logo.png";
import "./home.scss";
import rightArrow from "../assets/images/home/right-arrow.svg";
import leftArrow from "../assets/images/home/left-arrow.svg";
function Home() {
    const navItems = [
      { label: "Company", items: [{ label: "About Us" }, { label: "Team" }, { label: "Careers" }] },
      { label: "Services", items: [{ label: "Web Development" }, { label: "Mobile Apps" }] },
      { label: "Hire developers", items: [{ label: "Frontend" }, { label: "Backend" }, { label: "Full Stack" }] },
      { label: "Solutions", items: [{ label: "E-commerce" }, { label: "CRM" }] },
      { label: "Technologies", items: [{ label: "React" }, { label: "Node.js" }, { label: "Python" }] },
      { label: "Our Work" }
    ];

    const slides = [
      {
        image: bgImage,
        title: (
          <>
            Offshore Software
            <br />
            Development Company in
            <br />
            New York
          </>
        ),
        subtitle:
          "At Nextwebi, we provide agile result-oriented offshore software development services for companies ranging from startups to enterprises to help you keep up with constant technological evolution. We deploy a team of expert developers",
      },
      { image: bgImage, title: <>Deliver Faster With Us</>, subtitle: "Product engineering and dedicated teams to accelerate delivery." },
      { image: bgImage, title: <>Scale When You Need</>, subtitle: "Flexible engagement to match your roadmap." },
    ];
  return (
        <div className="home">
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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center mx-lg-auto">
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
                    <button className="btn btn-danger ms-auto ms-lg-3">Contact Us</button>
                </div>
            </nav>

            <section className="home-hero">
              <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  {slides.map((_, i) => (
                    <button key={i} type="button" data-bs-target="#heroCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined} aria-label={`Slide ${i + 1}`}></button>
                  ))}
                </div>
                <div className="carousel-inner">
                  {slides.map((slide, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`} style={{ backgroundImage: `url(${slide.image})` }}>
                      <div className="container position-relative d-flex align-items-center min-vh-100">
                        <div className="row justify-content-center w-100">
                          <div className="col-lg-10 col-xl-8">
                            <h1 className="hero-title  mb-3">{slide.title}</h1>
                            <p className="hero-subtitle  mb-4">{slide.subtitle}</p>
                            <div className="d-flex gap-30 justify-content-center">
                              <a href="#contact" className="btn btn-primary px-4 py-2">Get in Touch</a>
                              <a href="#works" className="btn btn-outline-light px-4 py-2">Our Works</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                  {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span> */}
                  <img src={leftArrow} alt="left arrow not available" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                  {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span> */}
                  <img src={rightArrow} alt="right arrow not available" />
                </button>
              </div>
            </section>
        </div>
    );
}
export default Home;