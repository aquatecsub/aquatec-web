import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
const clientes = [
  "ACESITA",
  "ALUMAR (ALUMÍNIO DO MARANHÃO S/A)",
  "ANGLOGOLD ASHANTI BRASIL MINERAÇÃO LTDA",
  "ARCELOR MITTAL",
  "BELGO MINEIRA SIDERURGIA",
  "CADAM S/A — PARÁ",
  "CEMIG",
  "CONSÓRCIO AIMORÉS",
  "CONSÓRCIO CANDONGA",
  "CONSÓRCIO ESTREITO ENERGIA",
  "CONSÓRCIO IGARAPAVA",
  "CONSÓRCIO PORTO ESTRELA",
  "CONSTRUTORA CAMARGO CORREA",
  "CONSTRUTORA ODEBRECHT",
  "COPASA",
  "CSN",
  "DNER",
  "ENERG POWER",
  "FURNAS CENTRAIS ELÉTRICAS",
  "MBR",
  "PETROBRÁS",
  "PREFEITURA DE BELO HORIZONTE",
  "PREFEITURA DE NOVA LIMA",
  "PREFEITURA DE RIO DAS OSTRAS",
  "PREFEITURA DE SANTOS DUMONT",
  "PROTESA",
  "PSI DO BRASIL",
  "RCM",
  "SUDECAP",
  "SUZANO CELULOSE",
  "UFMG",
  "UFPR",
  "UFRJ",
  "UFSC",
  "VALE DO RIO DOCE",
  "VATECH HYDRO",
  "VERACEL CELULOSE",
  "VIATÉCNICA CONSULTORIA E SERVIÇOS LTDA.",
  "VOTORANTIM",
];

export default function ClientesPage() {
  return (
    <main className="site">
      <Sidebar />

      <div className="main-area page-transition">
        <Header />

        <section className="clientes-page">

          {/* =====================================================
              INTRODUÇÃO
              ===================================================== */}

          <div className="clientes-intro">
            <h1>PRINCIPAIS CLIENTES</h1>

            <p>
              Ao longo de sua trajetória, a Aquatec construiu relações
              profissionais com empresas, instituições e organizações de
              diferentes segmentos, atuando em projetos de engenharia
              subaquática, operações marítimas, ambientais e de infraestrutura.
            </p>

            <p>
              A diversidade de nossos clientes reflete a experiência e a
              capacidade técnica da Aquatec para atender diferentes
              necessidades e desafios operacionais, sempre com foco em
              segurança, qualidade e confiabilidade.
            </p>
          </div>

          {/* =====================================================
              CLIENTES
              ===================================================== */}

          <section className="clientes-section">

            <h2>EMPRESAS E INSTITUIÇÕES</h2>

            <div className="clientes-grid">
              {clientes.map((cliente) => (
                <div
                  key={cliente}
                  className="cliente-card"
                >
                  <span>{cliente}</span>
                </div>
              ))}
            </div>

          </section>

        </section>
        <Footer />
      </div>
    </main>
  );
}