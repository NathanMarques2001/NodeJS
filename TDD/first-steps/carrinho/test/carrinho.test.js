import Carrinho from '../carrinho.js';
import Item from '../item';

describe("Testes do carrinho", () => {
  it("Deve inicializar vazio", () => {
    const carrinho = new Carrinho();

    expect(carrinho.itens.length).toBe(0);
    expect(carrinho.subtotal).toBe(null);
    expect(carrinho.frete).toBe(null);
    expect(carrinho.total).toBe(null);
  });

  it("Deve adicionar um item", () => {
    const carrinho = new Carrinho();
    const item = new Item("Beterraba", 2.5, 10);

    carrinho.adiciona(item);

    expect(carrinho.itens.length).toBe(1);
    expect(carrinho.itens).toContain(item);
  });

  it("Deve adicionar o frete", () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);

    expect(carrinho.frete).toBe(10);
  });

  it("Deve calcular o total", () => {
    const carrinho = new Carrinho();
    const item1 = new Item("Beterraba", 2.5, 10);
    const item2 = new Item("Batata", 0.2, 2);

    carrinho.adiciona(item1);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.calculaTotal()).toBe(35.4);
  });

  it("Deve finalizar a compra", () => {
    const carrinho = new Carrinho();
    const item1 = new Item("Beterraba", 2.5, 10);
    const item2 = new Item("Batata", 0.2, 2);

    carrinho.adiciona(item1);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toEqual({
      subtotal: 25.4,
      frete: 10,
      total: 35.4,
    });
  });

  it("Deve lançar um erro ao finalizar a compra com carrinho vazio", () => {
    const carrinho = new Carrinho();

    expect(() => carrinho.finalizaCompra()).toThrowError('Carrinho de compras vazio');
  });
});