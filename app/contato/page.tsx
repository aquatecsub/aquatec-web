"use client";

import { FormEvent, useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function ContatoPage() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      nome: formData.get("nome"),
      empresa: formData.get("empresa"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      assunto: formData.get("assunto"),
      mensagem: formData.get("mensagem"),
    };

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Erro ao enviar mensagem.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="site">
      <Sidebar />

      <div className="main-area page-transition">
        <Header />

        <section className="contato-page">
          <div className="contato-intro">
            <h1>FALE CONOSCO</h1>

            <p>
              Entre em contato com a Aquatec para obter mais informações sobre
              nossos serviços, projetos e soluções para operações subaquáticas.
            </p>

            <p>
              Nossa equipe está à disposição para avaliar sua necessidade e
              apresentar a melhor solução para cada operação.
            </p>
          </div>

          <section className="contato-section">
            <div className="contato-grid">
              {/* INFORMAÇÕES DE CONTATO */}
              <article className="contato-block contato-info">
                <h2>CONTATO</h2>

                <div className="contato-item">
                  <span className="contato-label">TELEFONE</span>
                  <a href="tel:+5531975658087">
                    (31) 97565-8087
                  </a>
                </div>

                <div className="contato-item">
                  <span className="contato-label">E-MAIL</span>
                  <a href="mailto:aquatecsub@aquatecsub.com.br">
                    aquatecsub@aquatecsub.com.br
                  </a>
                </div>

                <div className="contato-item">
                  <span className="contato-label">ENDEREÇO</span>

                  <p>
                    Rua Domingos Vieira, nº 348
                    <br />
                    Sala 609 — Santa Efigênia
                    <br />
                    Belo Horizonte — MG
                    <br />
                    CEP 30150-240
                  </p>
                </div>

                <div className="contato-item contato-cnpj">
                  <span className="contato-label">CNPJ</span>

                  <p>01.278.505/0001-85</p>
                </div>

                <div className="contato-social">
                  <span className="contato-label">REDES SOCIAIS</span>

                  <div className="contato-social-links">
                    <a
                      href="https://www.facebook.com/AquatecEngenhariaEServicosSubaquaticos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FACEBOOK
                    </a>

                    <a
                      href="https://www.facebook.com/AquatecEngenhariaEServicosSubaquaticos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      INSTAGRAM
                    </a>

                    <a
                      href="https://br.linkedin.com/in/aquatecsub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINKEDIN
                    </a>

                    <a
                      href="https://www.youtube.com/user/aquatecsub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YOUTUBE
                    </a>
                  </div>
                </div>
              </article>

              {/* FORMULÁRIO */}
              <article className="contato-block contato-form-block">
                <h2>ENVIE UMA MENSAGEM</h2>

                <form
                  className="contato-form"
                  onSubmit={handleSubmit}
                >
                  <div className="contato-form-row">
                    <div className="contato-field">
                      <label htmlFor="nome">NOME</label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Seu nome"
                        required
                      />
                    </div>

                    <div className="contato-field">
                      <label htmlFor="empresa">EMPRESA</label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div className="contato-form-row">
                    <div className="contato-field">
                      <label htmlFor="email">E-MAIL</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div className="contato-field">
                      <label htmlFor="telefone">TELEFONE</label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="contato-field">
                    <label htmlFor="assunto">ASSUNTO</label>

                    <select
                      id="assunto"
                      name="assunto"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>

                      <option value="Serviços subaquáticos">
                        Serviços subaquáticos
                      </option>

                      <option value="Engenharia">
                        Engenharia
                      </option>

                      <option value="Serviços ambientais">
                        Serviços ambientais
                      </option>

                      <option value="Venda e aluguel de equipamentos">
                        Venda e aluguel de equipamentos
                      </option>

                      <option value="Solicitação de orçamento">
                        Solicitação de orçamento
                      </option>

                      <option value="Outros assuntos">
                        Outros assuntos
                      </option>
                    </select>
                  </div>

                  <div className="contato-field">
                    <label htmlFor="mensagem">MENSAGEM</label>

                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={6}
                      placeholder="Descreva sua necessidade..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="contato-submit"
                    disabled={sending}
                  >
                    {sending ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                  </button>

                  {status === "success" && (
                    <p className="contato-status contato-status-success">
                      Mensagem enviada com sucesso. A Aquatec agradece seu
                      contato.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="contato-status contato-status-error">
                      Não foi possível enviar a mensagem. Tente novamente.
                    </p>
                  )}
                </form>
              </article>
            </div>
          </section>
        </section>

        <Footer />
      </div>
    </main>
  );
}