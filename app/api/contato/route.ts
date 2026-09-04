import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nome,
      empresa,
      email,
      telefone,
      assunto,
      mensagem,
    } = body;

    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        {
          success: false,
          message: "Preencha todos os campos obrigatórios.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Aquatec Site <aquatecsub@aquatecsub.com.br>",
      to: ["aquatecsub@aquatecsub.com.br"],
      replyTo: email,
      subject: `Novo contato pelo site — ${assunto}`,
      text: `
EMAIL ENCAMINHADO PELO SITE

Nome: ${nome}
Empresa: ${empresa || "Não informado"}
E-mail: ${email}
Telefone: ${telefone || "Não informado"}
Assunto: ${assunto}

MENSAGEM
--------------------------------

${mensagem}
      `,
    });

    if (error) {
      console.error("Erro Resend:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Não foi possível enviar a mensagem.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Erro na API de contato:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Ocorreu um erro ao enviar a mensagem.",
      },
      { status: 500 }
    );
  }
}