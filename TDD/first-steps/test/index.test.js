import { somaHorasExtras, calculaDesconto } from "..";

describe('Testes dos cáuculos de folhas', () => {
  it('Deve retornar a soma das horas extras', () => {
    expect(somaHorasExtras(1000, 200)).toBe(1200);
  });

  it('Deve retornar o valor do salário com desconto de 10%', () => {
    expect(calculaDesconto(1000, 100)).toBe(900);
  });
});