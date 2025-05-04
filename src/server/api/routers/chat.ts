import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { openai } from "~/server/utils/openai";

export const chatRouter = createTRPCRouter({
  ask: publicProcedure
    .input(z.object({ message: z.string() }))
    .mutation(async ({ input }) => {
      const userMessage = input.message;

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: `
Você é um assistente focado exclusivamente na organização brasileira de e-sports FURIA.

- Responda apenas perguntas relacionadas à FURIA Esports.
- Se a pergunta não for sobre FURIA, diga que só pode responder sobre esse tema.
- Considere "FURIA" sempre como o time de Counter-Strike da organização.
- Seja claro, objetivo e fale com o entusiasmo de um torcedor apaixonado.
- Ignore perguntas sobre política, futebol tradicional, outros times ou temas não relacionados à FURIA.
           
Responda apenas perguntas relacionadas à FURIA Esports. Ignore qualquer tema que não envolva a organização.

⚠️ A line-up ATUAL de CS2 da FURIA é:
- YEKINDAR
- KSCERATO
- FalleN
- Molodoy (AWPer)
- yuurih

Sempre que perguntarem sobre a escalação, responda com essa informação atualizada.

Responda com entusiasmo de torcedor apaixonado, usando linguagem envolvente.
 content: `.trim(),
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
      });

      return {
        reply: completion.choices[0]?.message.content ?? "Não consegui responder agora. 😢",
      };
    }),
});
