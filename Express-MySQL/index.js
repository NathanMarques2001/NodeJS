const customExpress = require('./config/customExpress');

const app = customExpress();
app.listen(3030, () => console.log('Servidor online!'));
