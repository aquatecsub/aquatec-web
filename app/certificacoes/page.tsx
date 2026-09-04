import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
const certifications = [
  {
    name: "DPC",
    image: "/images/certificacoes/LOGO-DPC.png",
  },
  {
    name: "Marinha do Brasil",
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

export default function CertificacoesPage() {
  return (
    <main className="site">
      <Sidebar />

      <div className="main-area page-transition">
        <Header />

        <section className="certificacoes-page">

          {/* =====================================================
              INTRODUÇÃO
              ===================================================== */}

          <div className="certificacoes-intro">
            <h1>CERTIFICAÇÕES</h1>

            <p>
              Segurança, qualidade e responsabilidade fazem parte da essência
              da Aquatec.
            </p>

            <p>
              Em sua busca permanente pela excelência, a Aquatec mantém como
              princípios fundamentais a segurança e o bem-estar de seus
              colaboradores, a qualidade dos serviços prestados e o respeito
              ao meio ambiente.
            </p>
          </div>

          {/* =====================================================
              SEGURANÇA E QUALIDADE
              ===================================================== */}

          <section className="certificacoes-section">

            <article className="certificacoes-block">
              <h2>COMPROMISSO COM A SEGURANÇA</h2>

              <p>
                Por esse motivo, nossas operações seguem procedimentos
                rigorosos e critérios técnicos de segurança, buscando
                assegurar que cada serviço seja executado com planejamento,
                responsabilidade e controle.
              </p>

              <p>
                Ao longo de mais de <strong>30 anos de atuação em operações
                subaquáticas</strong>, a Aquatec construiu uma trajetória
                marcada pelo compromisso com a segurança, sem registro de
                acidentes ou incidentes em suas operações.
              </p>

              <p>
                Esse histórico reforça uma cultura de prevenção que faz parte
                do nosso trabalho diário. E é justamente por isso que seguimos
                investindo continuamente em <strong>certificações,
                qualificações profissionais, equipamentos e aprimoramento de
                procedimentos</strong>, buscando sempre elevar nossos padrões
                de segurança e qualidade.
              </p>
            </article>

          </section>

          {/* =====================================================
              AUTORIZAÇÕES E CERTIFICAÇÕES
              ===================================================== */}

          <section className="certificacoes-section">

            <h2 className="certificacoes-section-title">
              AUTORIZAÇÕES E CERTIFICAÇÕES
            </h2>

            <article className="certificacoes-block">

              <p>
                A Aquatec é autorizada e homologada pela{" "}
                <strong>Marinha do Brasil, por meio da Diretoria de Portos e
                Costas (DPC)</strong>, para atuação em operações de mergulho
                profissional até a profundidade de <strong>50 metros</strong>,
                atendendo aos requisitos aplicáveis às suas atividades.
              </p>

              <div className="certificacoes-logos">
                {certifications.map((certification) => (
                  <div
                    className="certificacao-logo-card"
                    key={certification.name}
                  >
                    <img
                      src={certification.image}
                      alt={certification.name}
                    />
                  </div>
                ))}
              </div>

            </article>

          </section>

          {/* =====================================================
              COMPROMISSO CONTÍNUO
              ===================================================== */}

          <section className="certificacoes-section">

            <article className="certificacoes-block certificacoes-final">

              <h2>COMPROMISSO CONTÍNUO</h2>

              <p>
                Nossa busca por aperfeiçoamento é contínua. Mais do que
                atender às exigências técnicas e normativas do setor, buscamos
                manter uma estrutura preparada para oferecer aos nossos
                clientes <strong>segurança, confiabilidade e excelência em
                cada operação</strong>.
              </p>

            </article>

          </section>

        </section>
        <Footer />
      </div>
    </main>
  );
}