module.exports = (app) => {
  app.get('/atendimentos', (req, res) => {
    res.send('ROTA GET');
  });

  app.post('/atendimentos', (req, res) => {
    console.log(req.body);
    res.send('ROTA POST');
  });
};
