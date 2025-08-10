import React from "react";
import "./company-overview.scss";
import bgimg from '../assets/images/bg-1.png';
import rightimage from '../assets/images/ssl-img.jpg'
function Overview() {
  return (
    <section className="trusted-section py-5" >
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left Content */}
          <div className="col-lg-7">
            <h3 className="title">
              Trusted by Startups and Enterprises across <span>20+ Nations</span>
            </h3>
            <p className="description">
              Nextweb software development team understands your business needs and suggests
              the right technology to build scalable software solutions. We work as a long-term
              technology partner with our customers and our approach ensures that every project
              aligns with their strategic business goals, we emphasize scalability, security,
              and performance.
            </p>
            <p className="description">
              We are committed to delivering high-quality, cost-effective solutions on time,
              ensuring you achieve maximum value.
            </p>

            {/* Stats */}
            <div className="row stats text-center mt-4">
              <div className="col-4">
                <h4>9+</h4>
                <p>Years in Business</p>
              </div>
              <div className="col-4">
                <h4>1600+</h4>
                <p>Projects Delivered</p>
              </div>
              <div className="col-4">
                <h4>600+</h4>
                <p>Client Relationships</p>
              </div>
            </div>

            <hr className="my-4" />

            {/* Logos */}
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <img src="iso1.png" alt="ISO 27001" className="badge-img" />
              <img src="iso2.png" alt="ISO 9001" className="badge-img" />
              <img src="clutch.png" alt="Clutch" className="badge-img" />
              <img src="goodfirm.png" alt="GoodFirm" className="badge-img" />
              <img src="cert.png" alt="Certification" className="badge-img" />
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 text-center">
            <img src={rightimage} alt="Team" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;