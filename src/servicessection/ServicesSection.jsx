import React from "react";
import "./ServicesSection.scss";
import bgimg1 from '../assets/images/gradients1.svg';
import bgimg2 from '../assets/images/gradients2.svg'
const servicesData = [
  {
    title: "Offshore software development consulting",
    text: "Customized offshore software development consulting service to help you enhance your digital landscape with the latest technology. Our team of expert offshore software developers will help you integrate the latest technologies with a strategized roadmap and plan.",
  },
  {
    title: "Digital Transformation",
    text: "Transform your digital landscape with our professional digital transformation services which strategically uses digital technologies to radically improve or reinvent a company's business processes, customer experiences, and culture.",
  },
  {
    title: "Web Development",
    text: "Enhance your business agility with web application development solutions delivering an intuitive digital experience. Our team has significant experience in handling multiple types of offshore custom software development projects that will help you transform your digital landscape and augment sales.",
  },
  {
    title: "Offshore software development consulting",
    text: "Customized offshore software development consulting service to help you enhance your digital landscape with the latest technology. Our team of expert offshore software developers will help you integrate the latest technologies with a strategized roadmap and plan.",
  },
  {
    title: "Digital Transformation",
    text: "Transform your digital landscape with our professional digital transformation services which strategically uses digital technologies to radically improve or reinvent a company's business processes, customer experiences, and culture.",
  },
  {
    title: "Web Development",
    text: "Enhance your business agility with web application development solutions delivering an intuitive digital experience. Our team has significant experience in handling multiple types of offshore custom software development projects that will help you transform your digital landscape and augment sales.",
  }
];

function ServicesSection() {
  return (
    <>
     
    <section className="services-section py-5">
    <img src={bgimg1} className="bg-img1"/>
    <img src={bgimg2} className="bg-img2"/>
      <div className="container text-left">
        <h2 className="fw-bold">
          Output-Driven Offshore Software Development Centre
        </h2>
        <p className="text-light mb-5">
          Offshore development services refers to the practice of hiring a remote team or a software development company
          in a different company to help reduce development costs
        </p>

        <div className="row g-4">
          {servicesData.map((service, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="service-card p-4">
                <h5 className="fw-bold mb-3">{service.title}</h5>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
    
    </>
  );
}

export default ServicesSection;
