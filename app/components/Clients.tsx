"use client";

import { Users } from "lucide-react";

const clients = [
  {
    name: "PETROBRAS",
    image: "/images/clientes/PETROBRAS.png",
  },
  {
    name: "VALE",
    image: "/images/clientes/VALE.png",
  },
  {
    name: "CEMIG",
    image: "/images/clientes/CEMIG.png",
  },
  {
    name: "FURNAS",
    image: "/images/clientes/FURNAS.png",
  },
  {
    name: "SUZANO",
    image: "/images/clientes/SUZANO.png",
  },
  {
    name: "VERACEL",
    image: "/images/clientes/VERACEL.png",
  },
  {
    name: "ANGLO",
    image: "/images/clientes/ANGLO.png",
  },
];

export default function Clients() {
  return (
    <div className="home-panel clients-panel">
      <div className="home-panel-title">
        <Users size={28} strokeWidth={1.7} />
        <h2>PRINCIPAIS CLIENTES</h2>
      </div>

      <div className="client-logos">
        {clients.map((client) => (
          <img
            key={client.name}
            src={client.image}
            alt={client.name}
          />
        ))}
      </div>
    </div>
  );
}