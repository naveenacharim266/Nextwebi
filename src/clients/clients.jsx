import React from "react";
import "./clients.scss";

const TrustedClients = () => {
  const clients = [
    { name: "Layers", logo: "/images/logo-layers.svg" },
    { name: "Sisyphus", logo: "/images/logo-sisyphus.svg"},
    { name: "Circooles", logo: "/images/logo-circooles.svg" },
    { name: "Catalog", logo: "/images/logo-catalog.svg"},
    { name: "Quotient", logo: "/images/logo-quotient.svg" }
  ];

  return (
    <section className="trusted-clients py-4">
      <div className="container text-center">
        <p className="subtitle mb-4">Trusted by 100+ Clients Globally</p>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {clients.map((client, index) => (
            <>
            <div className="client-item d-flex align-items-center" key={index}>
              <img src={client.logo} alt={client.name} className="client-logo me-2" />
              <span className="client-name">{client.name}</span>
            </div>
            <div className="isometric-square"></div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
