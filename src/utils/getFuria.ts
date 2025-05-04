
import axios from "axios";
import * as cheerio from "cheerio";

export async function getFuriaLineup() {
  try {
    const { data: html } = await axios.get("https://www.hltv.org/team/8297/furia");

    const $ = cheerio.load(html);

    // Pega a lista de jogadores
    const players: string[] = [];
    $(".bodyshot-team .playerFlagName .text-ellipsis").each((_, element) => {
      const playerName = $(element).text().trim();
      if (playerName) {
        players.push(playerName);
      }
    });

    if (players.length === 0) {
      throw new Error("Nenhum jogador encontrado!");
    }

    return `Escalação atual da FURIA: ${players.join(", ")}. 🐾🔥`;
  } catch (error) {
    console.error("Erro no scraper:", error);
    return "Não consegui buscar a escalação agora. 😢";
  }
}