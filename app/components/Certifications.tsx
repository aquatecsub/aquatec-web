"use client";

import { Award } from "lucide-react";

const certifications = [
  {
    name: "DPC",
    image: "/images/certificacoes/LOGO-DPC.png",
  },
  {
    name: "Marinha",
    image: "/images/certificacoes/LOGO-MARINHA.png",
  },
  {
    name: "DNV",
    image: "/images/certificacoes/LOGO-DNV.png",
  },
  {
    name: "ADC",
    image: "/images/certificacoes/LOGO-ADC.png",
  },
];

export default function Certifications() {
  return (
    <div className="home-panel certifications-panel">
      <div className="home-panel-title">
        <Award size={28} strokeWidth={1.7} />
        <h2>CERTIFICAÇÕES</h2>
      </div>

      <div className="certification-logos">
        {certifications.map((certification) => (
          <img
            key={certification.name}
            src={certification.image}
            alt={certification.name}
          />
        ))}
      </div>
    </div>
  );
}