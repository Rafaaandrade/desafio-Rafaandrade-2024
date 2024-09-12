import { EspacoZoo } from "./espaco-zoo";

class RecintosZoo {
  constructor() {
    this.recintos = [
      new EspacoZoo(1, "savana", 10, ["macaco", "macaco", "macaco"]),
      new EspacoZoo(2, "floresta", 5, []),
      new EspacoZoo(3, "savana e rio", 7, ["gazela"]),
      new EspacoZoo(4, "rio", 8, []),
      new EspacoZoo(5, "savana", 9, ["leão"]),
    ];

    this.animais = {
      leão: { tamanho: 3, bioma: "savana" },
      leopardo: { tamanho: 2, bioma: "savana" },
      crocodilo: { tamanho: 3, bioma: "rio" },
      macaco: { tamanho: 1, bioma: "savana" }, // Também pode estar na floresta
      gazela: { tamanho: 2, bioma: "savana" },
      hipopotamo: { tamanho: 4, bioma: "savana" }, // Também pode estar no rio
    };
  }

  analisaRecintos(animal, quantidade) {
    const animalRecebido = animal.toLowerCase();
    const tipoAnimal = this.animais[animalRecebido];

    if (!tipoAnimal) {
      return { erro: "Animal inválido" };
    }

    if (quantidade <= 0 || Number.isNaN(quantidade)) {
      return { erro: "Quantidade inválida" };
    }

    const recintosViaveis = this.recintos.filter((recinto) => {
      const bioma = recinto.bioma.toLowerCase();
      const animalBiomas = [tipoAnimal.bioma];

      if (tipoAnimal.alternativa) {
        animalBiomas.push(tipoAnimal.alternativa);
      }

      if (!animalBiomas.includes(bioma)) {
        return false;
      }

      // Verificar regras específicas
      const animaisExistentes = recinto.animaisExistentes.map((a) =>
        a.toLowerCase()
      );
      const jaTemAnimais = animaisExistentes.length > 0;
      const precisaEspacoExtra = jaTemAnimais ? 1 : 0;

      if (animalRecebido === "hipopotamo" && bioma !== "savana e rio") {
        return false;
      }

      if (animalRecebido === "macaco" && !jaTemAnimais) {
        return false;
      }

      if (
        animalRecebido !== "hipopotamo" &&
        animaisExistentes.some((a) => a !== animalRecebido)
      ) {
        return false;
      }

      // const espacoNecessario =
      //   tipoAnimal.tamanho * quantidade + precisaEspacoExtra;
      return (
        recinto.adicionarAnimal(tipoAnimal, quantidade) && recinto.espacoLivre()
      );
    });

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável" };
    }

    const resultado = recintosViaveis.map((recinto) => {
      return `Recinto ${recinto.numero} (espaço livre: ${
        recinto.espacoLivre() - tipoAnimal.tamanho * quantidade
      } total: ${recinto.tamanhoTotal})`;
    });

    console.log("resultado", recintosViaveis);
    return { recintosViaveis: resultado };
  }
}

export { RecintosZoo as RecintosZoo };
