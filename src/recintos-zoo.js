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
    let animalRecebido = animal.toLowerCase();
    const tipoAnimal = this.animais[animalRecebido];
    if (!tipoAnimal) {
      return { erro: "Animal inválido" };
    }

    if (quantidade <= 0 || Number.isNaN(quantidade)) {
      return { erro: "Quantidade inválida" };
    }
  }
}

export { RecintosZoo as RecintosZoo };
