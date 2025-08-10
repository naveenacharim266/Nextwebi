import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./TestimonialCarousel.scss";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "I wanted to redesign and revamp the website of my institution. I contacted Nextwebi and they understood the vision of an organization and through several discussions and timely suggestions, the website was delivered and deployed successfully. Nextwebi, without a doubt, has what it takes to make a great web application, not to mention with a competitive price too. Now on seeing the end product I am satisfied and know that the web app is in safe hands. Thank you to the entire team.",
      companyLogo: "/logos/dynamatic.png", // replace with actual path
      companyName: "Dynamatic Technologies",
      authorName: "Qenowned & D Firm",
      authorRole: "Team Lead",
      authorImg: "/avatars/author1.jpg" // replace with actual path
    },
    {
      text: "The development team was outstanding and delivered beyond expectations. The project was managed effectively and delivered on time with excellent communication throughout the process.",
      companyLogo: "/logos/company2.png",
      companyName: "TechWorld Solutions",
      authorName: "Jane Doe",
      authorRole: "Project Manager",
      authorImg: "/avatars/author2.jpg"
    },
    {
      text: "Working with Nextwebi was seamless and productive. They provided innovative solutions that helped us achieve our project goals faster and with better quality than expected.",
      companyLogo: "/logos/company3.png",
      companyName: "Innovatech",
      authorName: "John Smith",
      authorRole: "CTO",
      authorImg: "/avatars/author3.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-section">
      <h2>Hear It From Those Who Matter Most</h2>
      <p>
        Offshore development services refers to the practice of hiring a remote
        team or a software development company in a different company to help
        reduce development costs
      </p>

      <div className="carousel-container">
        <button className="arrow-btn left" onClick={prevSlide}>
          <IoChevronBack />
        </button>

        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />
          <p className="testimonial-text">
            {testimonials[currentIndex].text}
          </p>
          <div className="divider"></div>
          <div className="company-info">
            <img
              src={testimonials[currentIndex].companyLogo}
              alt={testimonials[currentIndex].companyName}
              className="company-logo"
            />
            <span>{testimonials[currentIndex].companyName}</span>
          </div>
          <div className="author-info">
            <img
              src={testimonials[currentIndex].authorImg}
              alt={testimonials[currentIndex].authorName}
              className="author-img"
            />
            <div>
              <h4>{testimonials[currentIndex].authorName}</h4>
              <p>{testimonials[currentIndex].authorRole}</p>
            </div>
          </div>
        </div>

        <button className="arrow-btn right" onClick={nextSlide}>
          <IoChevronForward />
        </button>
      </div>

      <div className="dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
