"use client";

import {
  Home,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="site-header">

      <div className="header-title">
        <h1>AQUATEC ENGENHARIA</h1>

        <h2>E SERVIÇOS SUBAQUÁTICOS</h2>

        <p>
          Pioneirismo, segurança e qualidade à disposição.
        </p>
      </div>


      <div className="header-contact">

        <div className="header-top">

          <a href="/" className="home-link">
            <Home size={20} />
            <span>HOME</span>
          </a>

          <span className="separator">|</span>

          <button className="language active">
            PT
          </button>

          <span className="separator">|</span>

          <button className="language">
            EN
          </button>

        </div>


        <div className="contact-line phone">
          <Phone size={20} />
          <span>(31) 97565-8087</span>
        </div>


        <div className="contact-line">
          <Mail size={20} />
          <span>
            aquatecsub@aquatecsub.com.br
          </span>
        </div>


        <div className="social-links">

          <a
            href="https://www.facebook.com/AquatecEngenhariaEServicosSubaquaticos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://www.facebook.com/AquatecEngenhariaEServicosSubaquaticos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://br.linkedin.com/in/aquatecsub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://www.youtube.com/user/aquatecsub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>

        </div>

      </div>

    </header>
  );
}