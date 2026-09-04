"use client";

import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {
  Waves,
  Anchor,
  Leaf,
  Building2,
  Wrench,
  ChevronDown,
} from "lucide-react";

const areas = [
  {
    title: "ÁREA SUBAQUÁTICA",
    icon: Waves,

    // COLOQUE AQUI OS NOMES DAS FOTOS
    images: [
      "solda.webp",
      "jato.jpg",
      "contaminada.jpg",
      "10.png",
      "mergulho.jpg",
      "profundo.webp",
    ],

    intro:
      "Serviços especializados de inspeção, manutenção, construção e intervenção em ambientes submersos, atendendo hidrelétricas, barragens, embarcações, terminais portuários, refinarias e estruturas offshore.",

    categories: [
      {
        title: "INSPEÇÃO E DIAGNÓSTICO",
        items: [
          "Inspeção técnica com imagem em tempo real e fonia",
          "Fotografia e filmagem subaquática",
          "Medição de espessuras por ultrassom",
          "Batimetria, plotagem e mapeamento de assoreamento e erosão",
          "Vistorias subaquáticas em ambientes confinados, reservatórios, canais e tubulações",
          "Coleta de materiais e amostras para laboratório",
        ],
      },

      {
        title: "CONSTRUÇÃO E MANUTENÇÃO",
        items: [
          "Montagem de estruturas subaquáticas e estruturas em geral",
          "Recuperação estrutural de estacas de madeira, metal ou concreto",
          "Corte, solda e esmerilhamento subaquático",
          "Execução de concretagem com argamassa de alto desempenho",
          "Hidrojateamento com bombas de alta pressão",
          "Derrocagem a frio ou por fogo",
        ],
      },

      {
        title: "TUBULAÇÕES, CABOS E ESTRUTURAS",
        items: [
          "Montagem, PULL-IN e PULL-OUT de linhas flexíveis em FPSO",
          "Lançamento de emissários submarinos",
          "Lançamento de difusores marítimos",
          "Lançamento de adutoras",
          "Lançamento de cabos de fibra óptica",
          "Construção de píeres, atracadouros, pontes, cais, dolfins, dolmens e enrocamentos",
        ],
      },

      {
        title: "SERVIÇOS ESPECIAIS",
        items: [
          "Desobstrução de vias navegáveis com bomba de sucção e recalque",
          "Busca, resgate e salvatagem de estruturas e embarcações",
          "Apoio à prospecção e exploração de petróleo",
          "Mergulho em águas contaminadas",
        ],
      },

      {
        title: "PROTEÇÃO DE SUPERFÍCIES",
        items: [
          "Impermeabilização",
          "Proteção catódica",
          "Jateamento",
          "Aplicação de massa epóxi",
        ],
      },
    ],
  },

  {
    title: "ÁREA MARÍTIMA E NAVAL",
    icon: Anchor,

    // COLOQUE AQUI OS NOMES DAS FOTOS
    images: [
      "maritima.png",
      "casco.jpg",
      "inspecao.jpg",
    ],

    intro:
      "Soluções para operações marítimas, portuárias e navais, com atuação em inspeção, recuperação, manutenção e apoio a estruturas, embarcações e sistemas de sinalização náutica.",

    categories: [
      {
        title: "OPERAÇÕES MARÍTIMAS E NAVAIS",
        items: [
          "Apoio à prospecção e exploração de petróleo",
          "Pesquisa e levantamento de naufrágios",
          "Recuperação de embarcações e estruturas submersas",
          "Recuperação de estacas de carga, estacas-prancha e lajes de cais",
        ],
      },

      {
        title: "BALIZAMENTO E SINALIZAÇÃO",
        items: [
          "Instalação de sistemas de balizamento e sinalização náutica",
          "Recuperação e manutenção de sistemas de balizamento",
          "Serviços em faroletes, boias, faróis e outros equipamentos de sinalização",
        ],
      },

      {
        title: "LEVANTAMENTOS E OBRAS PORTUÁRIAS",
        items: [
          "Batimetria e plotagem",
          "Mapeamento de embarcações naufragadas",
          "Fiscalização de obras portuárias",
          "Administração e acompanhamento de obras portuárias",
        ],
      },
    ],
  },

  {
    title: "ÁREA AMBIENTAL",
    icon: Leaf,

    // COLOQUE AQUI OS NOMES DAS FOTOS
    images: [
      "ambiental.jpg",
      "aguape1.jpeg",
      "aguape2.jpeg",
      "traira.jpg",
    ],

    intro:
      "Atuação especializada na prevenção, controle e recuperação de impactos em corpos d'água, combinando profissionais qualificados, equipamentos e soluções adequadas às necessidades de cada operação.",

    categories: [
      {
        title: "LIMPEZA E CONTROLE",
        items: [
          "Limpeza e remoção de detritos flutuantes",
          "Remoção de aguapés em reservatórios e lagos",
          "Recolhimento de hidrocarbonetos",
          "Recolhimento de produtos químicos e granéis líquidos",
        ],
      },

      {
        title: "CONTENÇÃO DE POLUENTES",
        items: [
          "Instalação e reboque de barreiras para contenção de poluentes",
          "Reboque de barreiras absorventes para contenção e absorção de poluentes",
          "Aplicação de substâncias absorventes oleofílicas",
          "Operações com embarcações e equipamentos especializados",
        ],
      },

      {
        title: "MONITORAMENTO E ESTUDOS",
        items: [
          "Inspeções para identificação, coleta e acompanhamento de cardumes",
          "Monitoramento ambiental",
          "Estudos ambientais",
          "Planos de emergência e contingência",
        ],
      },

      {
        title: "SUPORTE OPERACIONAL",
        items: [
          "Fornecimento de mão de obra especializada",
          "Fornecimento de equipamentos",
          "Fornecimento de materiais de consumo",
        ],
      },
    ],
  },

  {
    title: "ÁREA DE ENGENHARIA",
    icon: Building2,

    // COLOQUE AQUI OS NOMES DAS FOTOS
    images: [
      "engenharia.jpg",
      "geo.jpg",
    ],

    intro:
      "Serviços de engenharia aplicados a ambientes submersos, desde levantamentos e diagnósticos até a construção, recuperação e manutenção de estruturas.",

    categories: [
      {
        title: "CONSTRUÇÃO E RECUPERAÇÃO",
        items: [
          "Construção de píeres, atracadouros, pontes e cais",
          "Construção de dolfins, dolmens e enrocamentos",
          "Recuperação estrutural de estacas",
          "Execução de serviços desde o projeto até a construção",
        ],
      },

      {
        title: "LEVANTAMENTOS E MAPEAMENTOS",
        items: [
          "Georreferenciamento de áreas submersas",
          "Batimetria e plotagem",
          "Mapeamento de embarcações naufragadas",
          "Mapeamento de assoreamento e erosão",
        ],
      },
    ],
  },

  {
  title: "VENDA E ALUGUEL DE EQUIPAMENTOS",
  icon: Wrench,

  // DEIXE APENAS UMA FOTO AQUI
  images: [
    "equipamentos.jpeg",
    "equipos.jpeg",
  ],

  intro:
    "A Aquatec disponibiliza equipamentos especializados para venda e aluguel, atendendo profissionais e empresas que atuam no segmento de mergulho e serviços subaquáticos. São equipamentos destinados a diferentes necessidades operacionais, com opções para operações em águas interiores e offshore.",

  categories: [
    {
      title: "EQUIPAMENTOS DISPONÍVEIS",
      items: [
        "Embarcações de apoio para mergulhos em águas interiores",
        "Câmara de recompressão",
        "Embarcação de apoio para mergulhos offshore",
        "Equipamentos certificados e homologados de mergulho para 30 e 40 metros",
        "Guincho para suspensão de cestas",
        "Hidrojatos de alta pressão",
        "Geradores de energia",
        "Detectores de metal",
        "Sonares",
        "Equipamentos de filmagem e fotografia subaquáticos",
        "Recarga de cilindros",
      ],
    },
  ],
},
];

export default function AtuacaoPage() {
  const [openArea, setOpenArea] = useState<number | null>(null);

  const toggleArea = (index: number) => {
    setOpenArea((current) => (current === index ? null : index));
  };

  return (
    <main className="site">
      <Sidebar />

      <div className="main-area page-transition">
        <Header />

        <section className="atuacao-page">

          {/* =====================================================
              INTRODUÇÃO
          ===================================================== */}

          <div className="atuacao-intro">
            <h1>ATUAÇÃO</h1>

            <p>
              Nossa experiência e qualidade são fundamentadas em um constante
              trabalho de aperfeiçoamento de nossos profissionais,
              procedimentos e tecnologia. Tudo isso para oferecer serviços de
              engenharia subaquática com alto padrão de segurança, precisão e
              qualidade.
            </p>

            <p>
              Com foco no atendimento a empresas de energia, petrolíferas,
              terminais portuários, construtoras e outros segmentos que
              necessitam de soluções especializadas em ambientes aquáticos,
              atuamos nas seguintes áreas:
            </p>
          </div>

          {/* =====================================================
              ÁREAS DE ATUAÇÃO
          ===================================================== */}

          <section className="areas-section">

            <h2>ÁREAS DE ATUAÇÃO</h2>

            <div className="areas-list">

              {areas.map((area, index) => {
                const Icon = area.icon;
                const isOpen = openArea === index;

                return (
                  <article
                    key={area.title}
                    className={`area-item ${
                      isOpen ? "open" : ""
                    }`}
                  >

                    {/* =================================================
                        CABEÇALHO
                    ================================================= */}

                    <button
                      type="button"
                      className="area-header"
                      onClick={() => toggleArea(index)}
                    >

                      <div className="area-title">

                        <Icon
                          size={25}
                          strokeWidth={1.7}
                        />

                        <span>
                          {area.title}
                        </span>

                      </div>

                      <div className="area-action">

                        <span>
                          {isOpen
                            ? "FECHAR"
                            : "SAIBA MAIS"}
                        </span>

                        <ChevronDown
                          size={20}
                          strokeWidth={1.8}
                          className={
                            isOpen
                              ? "rotated"
                              : ""
                          }
                        />

                      </div>

                    </button>

                    {/* =================================================
                        CONTEÚDO EXPANDIDO
                    ================================================= */}

                    <div
                      className={`area-content ${
                        isOpen
                          ? "area-content-open"
                          : ""
                      }`}
                    >

                      <div className="area-content-inner">

                        <div className="area-description">

                          {/* INTRODUÇÃO DA ÁREA */}

                          <p className="area-intro-text">
                            {area.intro}
                          </p>

                          {/* SERVIÇOS */}

                          <div className="area-categories">

                            {area.categories.map((category) => (
                              <div
                                key={category.title}
                                className="area-category"
                              >

                                <h3>
                                  {category.title}
                                </h3>

                                <ul>
                                  {category.items.map((item) => (
                                    <li key={item}>
                                      {item}
                                    </li>
                                  ))}
                                </ul>

                              </div>
                            ))}

                          </div>

                        </div>

                        {/* =================================================
                            FOTOS
                        ================================================= */}

                        <div className="area-photos">

                          {area.images
                            .filter((image) => image.trim() !== "")
                            .map((image) => (
                              <div
                                className="area-photo"
                                key={image}
                              >
                                <img
                                  src={`/images/servicos/${image}`}
                                  alt={area.title}
                                />
                              </div>
                            ))}

                        </div>

                      </div>

                    </div>

                  </article>
                );
              })}

            </div>

          </section>

        </section>
<Footer />
      </div>
    </main>
  );
}