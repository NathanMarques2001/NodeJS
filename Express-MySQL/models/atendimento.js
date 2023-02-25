const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {
  adiciona(atendimento, res) {
    const data = moment(atendimento.data, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:MM:SS',
    );
    const dataCriacao = moment(new Date(), 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:MM:SS',
    );
    const dataValida = moment(data).isAfter(dataCriacao);
    const clienteValido = atendimento.cliente.length >= 5;

    const validacoes = [
      {
        nome: 'data',
        valido: dataValida,
        mensagem: 'Data deve ser maior que a data atual',
      },
      {
        nome: 'cliente',
        valido: clienteValido,
        mensagem: 'Cliente deve ter pelo menos cinco caracteres',
      },
    ];

    const erros = validacoes.filter((campo) => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      res.status(400).json(erros);
    } else {
      const atendimentoData = { ...atendimento, data };

      const sql = 'INSERT INTO Atendimentos SET ?';

      conexao.query(sql, atendimentoData, (error, resultados) => {
        if (error) {
          res.status(400).json(error);
          return;
        }
        res.status(200).json(resultados);
      });
    }
  }

  lista(res) {
    const sql = 'SELECT * FROM Atendimentos';

    conexao.query(sql, (error, resultados) => {
      if (error) {
        res.status(400).json(error);
        return;
      }
      res.status(200).json(resultados);
    });
  }

  busca(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;

    conexao.query(sql, (error, resultado) => {
      const atendimento = resultado[0];
      if (error) {
        res.status(404).json(error);
        return;
      }
      res.status(200).json(atendimento);
    });
  }

  altera(id, valores, res) {
    if (valores.data) {
      valores.data = moment(atendimento.data, 'DD/MM/YYYY').format(
        'YYYY-MM-DD HH:MM:SS',
      );
    }

    const sql = 'UPDATE Atendimentos SET ? WHERE id = ?';

    conexao.query(sql, [valores, id], (error, resultados) => {
      if (error) {
        res.status(400).json(error);
        return;
      }
      res.status(200).json(resultados);
    });
  }

  deleta(id, res) {
    const sql = `DELETE FROM Atendimentos WHERE id = ${id}`;

    conexao.query(sql, (error, resultado) => {
      if (error) {
        res.status(400).json(error);
        return;
      }
      res.status(200).json({"ID deletado": id});
    });
  }
}

module.exports = new Atendimento();
