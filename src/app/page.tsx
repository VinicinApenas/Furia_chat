import { ChatBot } from "../components/ChatBot";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-start py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-500 drop-shadow-lg text-center">
        Chat Furioso
      </h1>

      <p className="mb-8 text-gray-300 text-center max-w-xl">
        Converse com o bot oficial da torcida e fique por dentro de tudo sobre o time de CS2 da FURIA Esports.
      </p>

      <ChatBot />
    </main>
  );
}
