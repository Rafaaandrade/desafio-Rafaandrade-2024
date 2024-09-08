class Espaco {
  constructor(numero, bioma, tamanhoTotal, animaisExistentes) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanhoTotal = tamanhoTotal;
    this.animaisExistentes = animaisExistentes;
  }

  espacoLivre() {
    return this.tamanhoTotal - this.animaisExistentes.length;
  }

  adicionarAnimal(animal, quantidade) {
    const espacoNecessario =
      animal.tamanho * quantidade + (this.animaisExistentes.length > 0 ? 1 : 0);
    return this.espacoLivre() >= espacoNecessario;
  }
}

export { Espaco as EspacoZoo };
