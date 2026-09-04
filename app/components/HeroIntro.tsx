"use client";

import { useEffect, useState } from "react";

export default function HeroIntro() {
  const [closing, setClosing] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    let introShown = false;

    try {
      introShown =
        sessionStorage.getItem("aquatec-intro-shown") === "true";
    } catch {
      introShown = false;
    }

    if (introShown) {
      setFinished(true);
      return;
    }

    try {
      sessionStorage.setItem("aquatec-intro-shown", "true");
    } catch {
      // Se o navegador bloquear sessionStorage,
      // a intro continua funcionando normalmente.
    }

    setShowIntro(true);

    const closeTimer = window.setTimeout(() => {
      setClosing(true);
    }, 3100);

    const finishTimer = window.setTimeout(() => {
      setFinished(true);
    }, 4300);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  if (!showIntro || finished) {
    return null;
  }

  return (
    <div
      className={`hero-intro ${
        closing ? "hero-intro-closing" : ""
      }`}
    >
      <div className="hero-light" />
      <div className="hero-rays" />

      <img
        src="/images/logo/aquatec-logo.png"
        alt="Aquatec Engenharia e Serviços Subaquáticos"
        className="hero-logo"
      />
    </div>
  );
}