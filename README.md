# 🖤 FURIA Fans Chat

Um chat interativo para torcedores da FURIA Esports, com integração de IA, sons personalizados, animações e muito amor pelo time!

![FURIA Banner](public/images/furiagg.png)

## 💡 Sobre o projeto

Esse chat foi desenvolvido como parte de um desafio técnico para o processo seletivo da FURIA. A ideia é permitir que fãs interajam com um bot temático que responde como um verdadeiro torcedor.

## ⚙️ Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [tRPC](https://trpc.io/)
- [OpenAI API](https://platform.openai.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Howler.js](https://howlerjs.com/) (sons no chat)
- [Framer Motion](https://www.framer.com/motion/) (animações)
- [Vercel](https://vercel.com/) (deploy)

## ✨ Funcionalidades

- 💬 Chat responsivo com IA (OpenAI GPT-3.5)
- 🔊 Sons personalizados ao enviar/receber mensagens
- 🎨 Interface animada com framer-motion
- 🧠 Mensagens com contexto temático da FURIA
- 📱 Totalmente responsivo

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/VinicinApenas/Furia_chat.git

# Acesse a pasta
cd Furia_chat

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com sua chave da OpenAI e conexão com o banco

# Rode a aplicação
npm run dev
