import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
const projetos = [
  {
    periodo: "MAI/2014 A SET/2026",
    recorrencia: "PERIODICIDADE ANUALMENTE",
    cliente: "SUZANO CELULOSE",
    descricao:
      "Serviços de mergulho em águas contaminadas para manutenção dos grids dos tanques de aeração das usinas de celulose em Imperatriz, Maranhão.",
  },

  {
    periodo: "JUN/2014 A DEZ/2021",
    recorrencia: "PERIODICIDADE ANUALMENTE",
    cliente: "CONSÓRCIO UHE ESTREITO ENERGIA",
    descricao:
      "Serviços subaquáticos de manutenção geral na Usina Hidrelétrica de Estreito, no Maranhão.",
  },

  {
    periodo: "JUN/2014 A DEZ/2019",
    cliente: "PETROBRAS — REGAP",
    descricao:
      "Serviços de manutenção e limpeza, com remoção e disposição ambientalmente adequada de detritos flutuantes e aguapés da Lagoa de Ibirité, em Minas Gerais.",
  },

  {
    periodo: "JUL/2001 A JUL/2005 E OUT/2005 A OUT/2009",
    cliente: "CEMIG — CEMIG GT",
    descricao:
      "Serviços subaquáticos de limpeza e dragagem da área em torno da tomada d'água da Usina de Rio de Pedras, utilizando bomba de sucção e recalque.",
  },

  {
    periodo: "JAN/2003 A JAN/2008",
    cliente: "CONSÓRCIO AHE FUNIL",
    descricao:
      "Serviços subaquáticos de apoio à construção e manutenção da AHE Funil, em Perdões, Minas Gerais.",
  },

  {
    periodo: "SET/2007 A DEZ/2007",
    cliente: "GRUPO ARCELOR MITTAL — BELGO",
    descricao:
      "Serviços subaquáticos para desmontagem, montagem, corte e solda das grades de limpeza do canal de adução da Barragem da Usina Hidrelétrica de Piracicaba.",
  },

  {
    periodo: "JAN/2004 A MAR/2005",
    cliente: "PREFEITURA DE RIO DAS OSTRAS — FUNDAÇÃO RIO DAS OSTRAS DE CULTURA",
    descricao:
      "Planejamento, estudo, pesquisa, batimetria e plotagem do naufrágio do navio Wakama, incluindo o lançamento de livro e a produção de documentário em vídeo, no litoral de Rio das Ostras, RJ.",
  },

  {
    periodo: "JAN/2003 A AGO/2004",
    cliente: "PREFEITURA DE RIO DAS OSTRAS — RJ",
    descricao:
      "Estudo, projeto e construção de dois píeres de madeira, com 75 metros de extensão, nas praias do Centro e da Boca da Barra, em Rio das Ostras, RJ.",
  },

  {
    periodo: "JUN/2002 A SET/2002",
    cliente: "ALUMAR — ALUMÍNIO DO MARANHÃO",
    descricao:
      "Construção, montagem e lançamento de difusor marítimo em São Luís, Maranhão.",
  },

  {
    periodo: "JUN/2000 A JUN/2002 E JUN/2005 A JUN/2007",
    cliente: "PETROBRAS — REGAP",
    descricao:
      "Serviços de manutenção e limpeza, com remoção e disposição ambientalmente adequada de detritos flutuantes e aguapés da Lagoa de Ibirité, em Minas Gerais.",
  },

  {
    periodo: "NOV/1996 A AGO/1997",
    cliente: "COPASA",
    descricao:
      "Construção, montagem e lançamento do interceptor oceânico de esgoto da Ilha de Paquetá, no Rio de Janeiro.",
  },
];

export default function ProjetosPage() {
  return (
    <main className="site">
      <Sidebar />

      <div className="main-area page-transition">
        <Header />

        <section className="projetos-page">

          {/* =====================================================
              INTRODUÇÃO
              ===================================================== */}

          <div className="projetos-intro">
            <h1>PROJETOS REALIZADOS</h1>

            <p>
              Ao longo de sua trajetória, a Aquatec participou de importantes
              projetos de engenharia subaquática, atendendo empresas e
              instituições de diferentes segmentos em operações de elevada
              complexidade técnica.
            </p>

            <p>
              A experiência acumulada em diferentes ambientes e condições
              operacionais reflete a capacidade da Aquatec de desenvolver
              soluções seguras, técnicas e eficientes para cada desafio.
            </p>
          </div>

          {/* =====================================================
              PRINCIPAIS OBRAS
              ===================================================== */}

          <section className="projetos-section">

            <h2>PROJETOS DE DESTAQUE</h2>

            <div className="projetos-list">

              {projetos.map((projeto, index) => (
                <article
                  key={`${projeto.cliente}-${index}`}
                  className="projeto-card"
                >

                  <div className="projeto-periodo">
                    <span>{projeto.periodo}</span>

                    {projeto.recorrencia && (
                      <small>{projeto.recorrencia}</small>
                    )}
                  </div>

                  <div className="projeto-content">

                    <h3>{projeto.cliente}</h3>

                    <p>{projeto.descricao}</p>

                  </div>

                </article>
              ))}

            </div>

          </section>

        </section>
        <Footer />
      </div>
    </main>
  );
}