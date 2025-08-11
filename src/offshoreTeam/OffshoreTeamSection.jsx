import React, { useState } from "react";
import "./OffshoreTeamSection.scss";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import  paperplane from "../assets/images/paperboat.svg";
import arrowbtm from "../assets/images/rightbottomarrow.svg"
const OffshoreTeamPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cards = [
    {
      title: "Offshore software development team deployment",
      firstParagraph: `At Nextwebi, offshore software development firm we entail deploying
        a team at a different location to help you meet your technological
        requirements.`,
      extraContent: (
        <>
          <p>
            The software industry is ramping up at a faster pace across the
            globe creating fierce competition and increasing the cost of running
            the business. Inevitably, Onsite-Offshore Software Development
            emerged as a solution for many businesses looking to build custom
            services to tackle the problems arising timely.
          </p>
          <ul>
            <li><FaCheck /> Enhanced business process quality</li>
            <li><FaCheck /> Flexible and scalable technological solutions</li>
            <li><FaCheck /> Technically proficient team of offshore software developers</li>
            <li><FaCheck /> On-time project delivery with high-security standards</li>
          </ul>
        </>
      ),
    },
    {
      title: "Workflow post offshore software development team establishment",
      firstParagraph: `Hire a dedicated offshore software development team with Nextwebi
        and expand your business outreach while cutting recruitment and
        infrastructure costs.`,
      extraContent: null,
    },
    {
      title: "Cost of offshore development services",
      firstParagraph: `Estimating the cost of offshore development services can be a tricky
        process as it depends on various factors in domain knowledge, industry
        expertise, and project knowledge.`,
      extraContent: null,
    },
  ];

  return (
    <div className="offshore-page">
      <div className="content container">
        {/* Left Side */}
        <div className="left">
          <h1>
            Offshore Dedicated Development Team For Your Project Requirements
          </h1>
          <p>
            Nextwebi is a leading offshore software development company we save
            you from hiring hassle and deploy a team of dedicated
          </p>

          <div className="cta-card">
            {/* <div className="icon-paperplane">✈</div> */}
            <img src={paperplane} alt="" />
            <p>Let's begin with a no-obligation conversations.</p>
            <button className="quote-btn">Request a Quote</button>
            {/* <FaArrowRight className="arrow-icon" /> */}
            <img  className="arrow-icon" src={arrowbtm} alt="" />
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="row"
                onClick={() => toggleCard(index)}
                style={{ cursor: "pointer" }}
              >
                <h3>{card.title}</h3>
                {activeIndex === index ? (
                  <IoIosArrowDown size={20} />
                ) : (
                  <IoIosArrowForward size={20} />
                )}
              </div>

              {/* Always visible first paragraph */}
              <p>{card.firstParagraph}</p>

              {/* Hidden extra content until clicked */}
              {activeIndex === index && card.extraContent && (
                <div className="card-content">{card.extraContent}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffshoreTeamPage;
  