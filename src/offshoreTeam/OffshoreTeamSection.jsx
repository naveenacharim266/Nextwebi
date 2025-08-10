import React from "react";
import "./OffshoreTeamSection.scss";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const OffshoreTeamPage = () => {
  return (
    <div className="offshore-page">
      <div className="content">
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
            <div className="icon-paperplane">✈</div>
            <p>Let's begin with a no-obligation conversations.</p>
            <button className="quote-btn">Request a Quote</button>
            <FaArrowRight className="arrow-icon" />
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="card active">
            <h3>Offshore software development team deployment</h3>
            <p>
              At Nextwebi, offshore software development firm we entail
              deploying a team at a different location to help you meet your
              technological requirements. The software industry is ramping up
              at a faster pace across the globe creating fierce competition and
              increasing the cost of running the business. Inevitably,
              Onsite-Offshore Software Development emerged as a solution for
              many businesses looking to build custom services to tackle the
              problems arising timely.
            </p>
            <ul>
              <li><FaCheck /> Enhanced business process quality</li>
              <li><FaCheck /> Flexible and scalable technological solutions</li>
              <li><FaCheck /> Technically proficient team of offshore software developers</li>
              <li><FaCheck /> On-time project delivery with high-security standards</li>
            </ul>
          </div>

          <div className="card">
            <div className="row">
              <h3>Workflow post offshore software development team establishment</h3>
              <FaArrowRight />
            </div>
            <p>
              Hire a dedicated offshore software development team with Nextwebi
              and expand your business outreach while cutting recruitment and
              infrastructure costs.
            </p>
          </div>

          <div className="card">
            <div className="row">
              <h3>Cost of offshore development services</h3>
              <FaArrowRight />
            </div>
            <p>
              Estimating the cost of offshore development services can be a
              tricky process as it depends on various factors in domain
              knowledge, industry expertise, and project knowledge. The
              components that influence the cost of offshore development
              services include:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffshoreTeamPage;
