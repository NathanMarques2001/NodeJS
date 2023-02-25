const Atendimento = require('../models/atendimento');

module.exports = (app) => {
  app.get('/atendimentos', (req, res) => {
    res.send('ROTA GET');
  });

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body;

    Atendimento.adiciona(atendimento);
    res.send('ROTA POST');
  });
};
