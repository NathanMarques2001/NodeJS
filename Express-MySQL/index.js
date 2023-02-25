const customExpress = require('./config/customExpress');
const Tabelas = require('./infraestrutura/tabelas');

const conexao = require('./infraestrutura/conexao');
conexao.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Conectei ao BD!');

  Tabelas.init(conexao);

  const app = customExpress();
  app.listen(3030, () => console.log('Servidor online!'));
});
