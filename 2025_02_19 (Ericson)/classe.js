export default class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
  adicionarEstoque(quantidade) {
    this.estoque += quantidade;
  }
}
