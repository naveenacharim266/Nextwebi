import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQSection.scss";

const FAQSection = () => {
  const faqs = [
    {
      question:
        "Is it possible to enable incoming email in a SharePoint Online document library?",
      answer:
        "Yes, SharePoint Online allows incoming email to be enabled in specific scenarios by configuring mail-enabled lists or libraries. However, there are some restrictions and it may require additional Microsoft 365 setup."
    },
    {
      question:
        "Where can I get more details about your offshore development services?",
      answer:
        "You can visit our Services page or contact us directly for a detailed consultation about our offshore development offerings."
    },
    {
      question: "Can I change the developer?",
      answer:
        "Yes, you can request a change in developer at any time based on your project needs and preferences."
    },
    {
      question: "Will I get access directly to my resources?",
      answer:
        "Yes, you will have direct access to your assigned resources, ensuring smooth communication and transparency."
    },
    {
      question: "Where is your offshore development center located?",
      answer:
        "Our offshore development centers are located in multiple countries to provide flexibility and timezone coverage."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
      <h2>Frequently Asked Questions</h2>
      <p>
        We offer a range of pricing plans to fit every budget and level of need.
        Whether you're a solo professional
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="icon" />
              ) : (
                <FaChevronDown className="icon" />
              )}
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
    
  );
};

export default FAQSection;
