import React from "react";
import html5 from '../assets/images/html5.svg';
import css3 from '../assets/images/css3.svg';
import vue from '../assets/images/vue.svg';
import angular from '../assets/images/angularjs.svg';
import javascript from '../assets/images/js.svg';
import reactimg from '../assets/images/react.svg'
import "./Technologies.scss";

export default function Technologies() {
  return (
    <section className="technologies">
      <div className="container">
        {/* Heading */}
        <h2>
          Absolutely, We Have Thoroughly Mastered The Technologies You Prefer.
        </h2>
        <p className="description">
          Our exceptionally skilled IT specialists are proficient in both
          classic and modern programming languages, as well as frameworks. We
          aim for excellence, choosing only the top-tier candidates when
          selecting our IT specialists.
        </p>

        <div className="tech-grid col-12">
          {/* Left side */}
          <div className="categories col-6">
            <div className="category">Frontend Programming Languages</div>
            <div className="category">Backend Programming Languages</div>
            <div className="category">Mobile</div>
            <div className="category">Big Data</div>
          </div>

          {/* Right side */}
          <div className="tech-icons col-6">
            <div className="tech-card">
              <img src={html5}  className="icon html" alt="" />
              <span>HTML5</span>
            </div>
            <div className="tech-card">
              <img src={css3} className="icon css" alt="" />
              <span>CSS3</span>
            </div>
            <div className="tech-card">
              <img src={vue} alt=""  className="icon vue"/>
              <span>Vue</span>
            </div>
            <div className="tech-card">
              <img src={angular} className="icon angular"/>
              <span>Angular</span>
            </div>
            <div className="tech-card">
              <img src={javascript} className="icon js" alt="" />
              <span>JavaScript</span>
            </div>
            <div className="tech-card">
              <img src={reactimg } alt="" className="icon react"/>
              <span>React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
