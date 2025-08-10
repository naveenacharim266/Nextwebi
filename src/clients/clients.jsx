import React from "react";
import "./clients.scss";

import logo1 from "../images/logo-layers.png";
import logo2 from "../assets/images/logo-sisyphus.svg";
import logo3 from "../assets/images/logo-circooles.svg";
import logo4 from "../assets/images/logo-catalog.svg";
import logo5 from "../assets/images/logo-quotient.svg";

const TrustedClients = () => {
  const clients = [
    { name: "Layers", logo: logo1 },
    { name: "Sisyphus", logo: logo2 },
    { name: "Circooles", logo: logo3 },
    { name: "Catalog", logo: logo4 },
    { name: "Quotient", logo: logo5 }
  ];

  return (
    <section className="trusted-clients py-4">
      <div className="container text-center">
        <p className="subtitle mb-4">Trusted by 100+ Clients Globally</p>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {clients.map((client, index) => (
            // <div className="client-item d-flex align-items-center" key={index}>
            //   <img src={client.logo} alt={client.name} className="client-logo me-2" />
            //   <span className="client-name">{client.name}</span>
            // </div>
            <div className="isometric-square"></div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
