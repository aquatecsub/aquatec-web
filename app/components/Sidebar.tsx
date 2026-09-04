"use client";

import {
  Home,
  Waves,
  Award,
  Building2,
  Users,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const menuItems = [
  {
    label: "A AQUATEC",
    icon: Home,
    href: "/aquatec",
    active: true,
  },
  {
    label: "ATUAÇÃO",
    icon: Waves,
    href: "/atuacao",
  },
  {
    label: "CERTIFICAÇÕES",
    icon: Award,
    href: "/certificacoes",
  },
  {
    label: "PROJETOS REALIZADOS",
    icon: Building2,
    href: "/projetos",
  },
  {
    label: "CLIENTES",
    icon: Users,
    href: "/clientes",
  },
  {
    label: "FALE CONOSCO",
    icon: Mail,
    href: "/contato",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* =====================================================
          TOPO MOBILE
          Logo + informações
          ===================================================== */}

      <div className="mobile-top">

        <a href="/" className="sidebar-logo">
          <img
            src="/images/logo/aquatec-logo.png"
            alt="Aquatec Engenharia e Serviços Subaquáticos"
          />
        </a>

        <div className="mobile-contact">

          <div className="mobile-contact-top">
            <a href="/" className="mobile-home">
              <Home size={14} />
              <span>HOME</span>
            </a>

            <span className="mobile-separator">|</span>

            <button className="mobile-language active">
              PT
            </button>

            <span className="mobile-separator">|</span>

            <button className="mobile-language">
              EN
            </button>
          </div>

          <div className="mobile-contact-line phone">
            <Phone size={13} />
            <span>(31) 97565-8087</span>
          </div>

          <div className="mobile-contact-line">
            <Mail size={13} />
            <span>aquatecsub@aquatecsub.com.br</span>
          </div>

          <div className="mobile-social-links">

            <a
              href="https://www.facebook.com/AquatecEngenhariaEServicosSubaquaticos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={12} />
            </a>

            <a
              href="https://www.facebook.com/AquatecEngenhariaEServicosSubaquaticos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={12} />
            </a>

            <a
              href="https://br.linkedin.com/in/aquatecsub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={12} />
            </a>

            <a
              href="https://www.youtube.com/user/aquatecsub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={12} />
            </a>

          </div>
        </div>

      </div>


      {/* =====================================================
          MENU
          ===================================================== */}

      <nav className="sidebar-menu">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className={`sidebar-item ${
                item.active ? "active" : ""
              }`}
            >
              <Icon
                size={24}
                strokeWidth={1.7}
              />

              <span>{item.label}</span>
            </a>
          );
        })}

      </nav>

    </aside>
  );
}