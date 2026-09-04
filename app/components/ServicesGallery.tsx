"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "/images/hero/1.png",
  "/images/hero/2.png",
  "/images/hero/3.png",
  "/images/hero/4.png",
  "/images/hero/5.png",
  "/images/hero/6.png",
  "/images/hero/7.png",
  "/images/hero/8.png",
  "/images/hero/9.png",
  "/images/hero/10.png",
];

export default function ServicesGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /*
   * ROTAÇÃO AUTOMÁTICA
   *
   * Igual para PC e celular.
   * Não fazemos mais distinção entre dispositivos.
   */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % photos.length;
      });
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  /*
   * Mantém a miniatura ativa visível.
   */
  useEffect(() => {
    const thumbnail = thumbnailRefs.current[activeIndex];

    if (!thumbnail) return;

    thumbnail.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  /*
   * FOTO ANTERIOR
   */
  const previousPhoto = () => {
    setActiveIndex((current) => {
      return (current - 1 + photos.length) % photos.length;
    });
  };

  /*
   * PRÓXIMA FOTO
   */
  const nextPhoto = () => {
    setActiveIndex((current) => {
      return (current + 1) % photos.length;
    });
  };

  /*
   * SELECIONAR FOTO
   */
  const selectPhoto = (index: number) => {
    setActiveIndex(index);
  };

  /*
   * ROLAR MINIATURAS
   */
  const scrollThumbnails = (direction: "left" | "right") => {
    if (!thumbnailsRef.current) return;

    thumbnailsRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="services-gallery">

      <div className="gallery-banner">

        <div className="gallery-photo-area">

          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`Serviço subaquático Aquatec ${index + 1}`}
              className={`gallery-main-image ${
                index === activeIndex ? "active" : ""
              }`}
            />
          ))}

          {/* SETA ESQUERDA */}

          <button
            type="button"
            className="gallery-main-arrow gallery-main-arrow-left"
            onClick={previousPhoto}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={27} />
          </button>

          {/* SETA DIREITA */}

          <button
            type="button"
            className="gallery-main-arrow gallery-main-arrow-right"
            onClick={nextPhoto}
            aria-label="Próxima foto"
          >
            <ChevronRight size={27} />
          </button>

          {/* TEXTO SOBRE A FOTO */}

          <div className="gallery-overlay">

            <div className="gallery-message">

              <h2>
                SOLUÇÕES COMPLETAS
                <br />
                PARA <span>AMBIENTES SUBMERSOS</span>
              </h2>

              <div className="aquatec-symbol">
                <img
                  src="/images/logo/ONDA.png"
                  alt=""
                />
              </div>

              <p>
                Tecnologia, equipe especializada
                <br />
                e segurança em cada operação.
              </p>

            </div>

          </div>

          {/* DOTS */}

          <div className="gallery-dots">

            {photos.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === activeIndex ? "active" : ""}
                onClick={() => selectPhoto(index)}
                aria-label={`Ir para foto ${index + 1}`}
              />
            ))}

          </div>

        </div>

      </div>

      {/* MINIATURAS */}

      <div className="gallery-thumbnails-wrapper">

        <button
          type="button"
          className="gallery-arrow"
          onClick={() => scrollThumbnails("left")}
          aria-label="Ver fotos anteriores"
        >
          <ChevronLeft size={22} />
        </button>

        <div
          ref={thumbnailsRef}
          className="gallery-thumbnails"
        >

          {photos.map((photo, index) => (
            <button
              key={photo}
              ref={(element) => {
                thumbnailRefs.current[index] = element;
              }}
              type="button"
              className={`gallery-thumbnail ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => selectPhoto(index)}
              aria-label={`Selecionar foto ${index + 1}`}
            >
              <img
                src={photo}
                alt={`Miniatura da foto ${index + 1}`}
              />
            </button>
          ))}

        </div>

        <button
          type="button"
          className="gallery-arrow"
          onClick={() => scrollThumbnails("right")}
          aria-label="Ver próximas fotos"
        >
          <ChevronRight size={22} />
        </button>

      </div>

    </section>
  );
}