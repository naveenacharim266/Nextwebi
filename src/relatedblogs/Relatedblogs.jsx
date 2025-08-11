// RelatedBlogs.jsx
import React from "react";
import "./RelatedBlogs.css";

const blogs = [
  {
    title: "AI in Healthcare",
    description:
      "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    image: "/images/healthcare-ai.svg",
    link: "#",
  },
  {
    title: "AI Ethics",
    description:
      "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    image: "/images/ai-ethics.svg",
    link: "#",
  },
  {
    title: "Machine Learning Explained",
    description:
      "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
    image: "/images/machine-learning.svg",
    link: "#",
  },
];

export default function RelatedBlogs() {
  return (
    <section className="related-blogs">
      <div className="container">
      <h2>Related Blogs</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <a href={blog.link}>
              Read more <span>↗</span>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
