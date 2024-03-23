import { describe, expect, it, jest } from "@jest/globals";
import Editora from "../models/editora";

describe("Testando o modelo Editora", () => {
  const editora = {
    nome: "Editora Teste",
    cidade: "Cidade Teste",
    email: "editorateste@gmail.com"
  };

  it("Deve instanciar uma editora", async () => {
    const novaEditora = new Editora(editora);

    expect(novaEditora).toEqual(expect.objectContaining(editora));
  });

  it("Deve simular uma chamada ao banco de dados", async () => {
    const novaEditora = new Editora(editora);

    novaEditora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: "Editora Teste",
      cidade: "Cidade Teste",
      email: "editorateste@gmail.com",
      created_at: "2021-08-10T00:00:00.000Z",
      updated_at: "2021-08-10T00:00:00.000Z"
    });

    const editoraSalva = novaEditora.salvar();

    expect(editoraSalva).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...editora,
        created_at: expect.any(String),
        updated_at: expect.any(String)
      }));
  });
});