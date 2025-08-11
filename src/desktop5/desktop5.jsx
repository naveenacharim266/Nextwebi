import React from "react";
import "./desktop5.scss";
import img1 from "../assets/images/img1.png"

function Desktop5() {
  return (
    <section className="offshore-section py-5">
    <div className="container">
      <div className="row align-items-center">
        {/* LEFT SIDE */}
        <div className="col-lg-6 text-white left-content">
          <div className="lb1">
            <h2 className=" mb-3">
              Output-Driven Offshore Software Development Centre
            </h2>
            <p className="lead mb-4">
              Offshore development services refers to the practice of hiring a remote team or a software development company
            </p>
          </div>
          <div className="lb2">
            <p className="p-shortline">
              Offshore development services refers to the practice of hiring a remote team or a software development company
              in a different company to help reduce development costs. Offshore development services refers to the practice
              of hiring a remote team or a software development company in a different company to help reduce development
              costs Offshore development services refers to the practice of hiring a remote team or a software development
              company in a different company.
            </p>
            <p className="p-longline">development costs Offshore development services refers to the practice of hiring a remote team or a software development company in a different company</p>
          </div>
          
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6 text-center right-content">
          <img src={img1} alt="Offshore software illustration" className=" offshore-img" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Desktop5;
