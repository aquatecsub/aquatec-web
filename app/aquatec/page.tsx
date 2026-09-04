import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
const infrastructure = [
  "Câmara de recompressão certificada e homologada pela Marinha do Brasil",
  "Embarcação de apoio para mergulhos offshore com 20 metros de comprimento",
  "Embarcações de apoio para mergulho em águas interiores",
  "Equipamentos certificados e homologados para operações até 30 metros, com controle de mergulho, fonia e capacetes adequados",
  "Equipamentos certificados e homologados para operações até 50 metros",
  "Guinchos e cestas para operações subaquáticas",
  "Equipamentos de filmagem para acompanhamento em tempo real na superfície, com imagens em alta qualidade",
  "Equipamentos fotográficos subaquáticos profissionais",
  "Detectores de metal",
  "Sonares",
  "Equipamentos completos para corte e solda subaquática",
  "Hidrojatos de alta pressão de até 20.000 psi, capazes de cortar aço",
  "Geradores de energia",
];

const team = [
  "Engenheiros",
  "Técnicos de planejamento",
  "Inspetores subaquáticos",
  "Mergulhadores",
  "Biólogos",
  "Técnicos ambientais",
  "Marítimos",
];

export default function AquatecPage() {
  return (
    <main className="site">
      <Sidebar />

      <div className="main-area page-transition">
        <Header />

        <section className="aquatec-page">

          <div className="aquatec-intro">
            <h1>A AQUATEC</h1>

            <p>
              Fundada em 1996, a AQUATEC é a primeira empresa de mergulho
              autorizada e homologada pela Marinha do Brasil a realizar
              serviços subaquáticos em Minas Gerais. Somamos mais de 30 anos
              de experiência no setor de engenharia subaquática, combinando
              uma infraestrutura de alta tecnologia com profissionais
              talentosos e experientes na área de mergulho profissional.
            </p>
          </div>

          <section className="aquatec-section">
            <h2>A EMPRESA</h2>

            <article className="aquatec-block">
              <h3>HISTÓRIA</h3>

              <p>
                A AQUATEC ENGENHARIA E SERVIÇOS SUBAQUÁTICOS LTDA surgiu do
                sonho e trabalho do mergulhador, historiador, pesquisador e
                empresário Sr. Rômulo Sergio Vieira Ribeiro, que em meados
                dos anos 80, após vários anos atuando como mergulhador,
                supervisor e superintendente de mergulho profundo e saturado
                na empresa TECNOSUB, fundou a extinta DARDA SUB DO BRASIL,
                sendo a pioneira de cursos de mergulho recreativo em Minas
                Gerais.
              </p>

              <p>
                Após 10 anos no mercado subaquático mineiro, Rômulo Sergio
                decidiu atuar somente no mergulho profissional. Fundando em
                1996, em parceria com o mergulhador e supervisor Cláudio
                Aragão, a Aquatec, primeira empresa de mergulho homologada
                pela Marinha do Brasil a prestar serviços subaquáticos de
                caráter profissional no estado de Minas Gerais.
              </p>

              <p>
                Em 2004, após a saída de Rômulo Sérgio e Cláudio Aragão da
                empresa, a Aquatec passou a ser gerenciada pelos três filhos
                de Rômulo.
              </p>
            </article>

            <article className="aquatec-block">
              <h3>A AQUATEC</h3>

              <p>
                Ao longo dos 30 anos de prestação de serviços de mergulho, a
                AQUATEC adquiriu vasta experiência no setor de engenharia
                subaquática, desenvolveu um conceito próprio de qualidade
                total, unindo uma infraestrutura de alta tecnologia com
                profissionais talentosos e experientes na área de mergulho
                profissional.
              </p>

              <p>
                Atualmente conta com uma equipe de colaboradores qualificados
                e identificados com as necessidades e os propósitos da
                empresa.
              </p>

              <p>
                Única empresa de mergulho na região Centro-Oeste e no Estado
                de Minas Gerais, autorizada e homologada pela Marinha do
                Brasil a atuar até a profundidade de 50 metros.
              </p>

              <p>
                O próximo passo da Aquatec é atuar no mercado offshore,
                realizando qualquer serviço até a profundidade de 50 metros.
              </p>

              <p>
                Conta com mão de obra qualificada, equipamentos de última
                geração certificados e homologados corretamente, com as
                devidas inspeções necessárias anualmente.
              </p>

              <p>
                Com tudo isso, a Aquatec torna-se opção definitiva para a
                solução dos diversos tipos de trabalhos subaquáticos,
                onshore ou offshore.
              </p>
            </article>
          </section>

          {/* =====================================================
              ESTRUTURA E INFRAESTRUTURA
              ===================================================== */}

          <section className="aquatec-section aquatec-infrastructure">

            <h2>ESTRUTURA E INFRAESTRUTURA</h2>

            <article className="aquatec-block">

              <p>
                Instalada em Belo Horizonte, Minas Gerais, a Aquatec conta
                com estrutura destinada ao planejamento, gerenciamento e
                suporte às suas operações, além de espaço para armazenamento
                de seus equipamentos.
              </p>

              <p>
                Nossa estrutura operacional permite atender diferentes
                regiões do Brasil e operações no exterior, de acordo com as
                necessidades e características de cada projeto.
              </p>

              <p>
                Para isso, a Aquatec reúne profissionais de diferentes áreas
                e dispõe de equipamentos e tecnologia adequados às operações
                subaquáticas, inclusive em ambientes que apresentam
                condições perigosas.
              </p>

              <div className="aquatec-infrastructure-grid">

                <div className="aquatec-infrastructure-column">

                  <h3>EQUIPE</h3>

                  <ul className="aquatec-list">
                    {team.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>

                </div>

                <div className="aquatec-infrastructure-column">

                  <h3>EQUIPAMENTOS E RECURSOS</h3>

                  <ul className="aquatec-list">
                    {infrastructure.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                </div>

              </div>

            </article>

          </section>

          {/* =====================================================
              MISSÃO / VISÃO / VALORES
              ===================================================== */}

          <section className="aquatec-pillars">

            <article className="aquatec-pillar">
              <h3>MISSÃO</h3>

              <p>
                Qualidade, segurança e profissionalismo cumprindo todas as
                normas em todo e qualquer serviço, para com isso satisfazer
                os nossos clientes.
              </p>
            </article>

            <article className="aquatec-pillar">
              <h3>VISÃO</h3>

              <p>
                Ser uma empresa atuante em todo o mercado brasileiro e
                mundial de mergulho profissional, buscando os certificados
                para atuar nas profundidades de 90 e 350 metros.
              </p>
            </article>

            <article className="aquatec-pillar">
              <h3>VALORES</h3>

              <p>
                Pioneirismo, profissionalismo, qualidade, segurança,
                honestidade, ética, transparência e responsabilidade
                socioambiental.
              </p>
            </article>

          </section>

        </section>
        <Footer />
      </div>
    </main>
  );
}