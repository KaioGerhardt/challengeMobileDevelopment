const express = require('express');
const app = express();
const port = process.env.PORT || 4500;
const routes = require("./routes");
const bodyParser = require('body-parser'); 
const cors = require('cors');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração do middleware de sessão
app.use(session({
  secret: 'c5f0ffeff28bf96477e32ee1d9b0599e', // Substitua pela sua chave secreta real
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Configure de acordo com suas necessidades de segurança
}));

const optionsCors = {
    origin: 'http://localhost:8100',
    optionSuccessStatus: 200
}
app.use(cors(optionsCors));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});