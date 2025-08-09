import React from "react";
import "./Desktop5.css";
import img1 from "../assets/images/img1.png"

function Desktop5() {
  return (
    <section className="offshore-section py-5">
    <div className="container">
      <div className="row align-items-center">
        {/* LEFT SIDE */}
        <div className="col-lg-6 text-white">
          <h2 className="fw-bold mb-3">
            Output-Driven Offshore Software Development Centre
          </h2>
          <p className="lead mb-4">
            Offshore development services refers to the practice of hiring a remote team or a software development company
          </p>
          <p className="text-light small">
            Offshore development services refers to the practice of hiring a remote team or a software development company
            in a different company to help reduce development costs. Offshore development services refers to the practice
            of hiring a remote team or a software development company in a different company to help reduce development
            costs Offshore development services refers to the practice of hiring a remote team or a software development
            company in a different company.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6 text-center">
          <img src={img1} alt="Offshore software illustration" className="img-fluid offshore-img" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Desktop5;
