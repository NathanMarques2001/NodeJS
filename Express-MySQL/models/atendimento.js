const conexao = require('../infraestrutura/conexao');

class Atendimento {
  adiciona(atendimento) {
    const dataCriacao = new Date();
    const atendimentoDatado = {...atendimento, dataCriacao}
    const sql = 'INSERT INTO Atendimentos SET ?';

    conexao.query(sql, atendimento, (error, resultados) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(resultados);
    });
  }
}

module.exports = new Atendimento;
