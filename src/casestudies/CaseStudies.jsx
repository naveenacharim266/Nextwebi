import React from "react";
import "./CaseStudies.scss";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Web Application Development For A Real Estate Company In Dubai",
      description:
        "Our client, a real estate agency based in Dubai, recognized the growing demand for a streamlined platform that would facilitate the process of buying and renting properties in Dubai.",
      image: "/images/cs-bg1.jpg"
    },
    {
      title: "E-commerce Platform for Luxury Goods",
      description:
        "Delivered a scalable and secure platform allowing seamless online purchases for high-end brands globally.",
      image: "/images/cs-bg1.jpg"
    },
    {
      title: "AI-powered Healthcare Analytics",
      description:
        "Built an AI-driven analytics dashboard to help hospitals make data-backed decisions for better patient outcomes.",
      image: "/images/cs-bg1.jpg"
    }
  ];

  return (
    <section className="case-studies py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Where Great Ideas Became Real Results</h2>
          <p className="section-subtitle">
            Offshore development services refers to the practice of hiring a remote team 
            or a software development company in a different country to help reduce development costs.
          </p>
        </div>

        <div id="caseStudyCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {caseStudies.map((study, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="case-card d-flex flex-column flex-md-row align-items-center">
                  <div className="case-text p-4 flex-fill">
                    <h4 className="fw-bold">{study.title}</h4>
                    <p>{study.description}</p>
                  </div>
                  <div className="case-image flex-fill">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#caseStudyCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#caseStudyCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

          {/* Indicators */}
          <div className="carousel-indicators mt-3">
            {caseStudies.map((_, index) => (
              <button
                type="button"
                key={index}
                data-bs-target="#caseStudyCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
