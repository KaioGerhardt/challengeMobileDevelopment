const express = require('express');
const app = express();
const port = process.env.PORT || 4500;
const routes = require("./routes");
const bodyParser = require('body-parser'); 
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const optionsCors = {
    origin: 'http://localhost:4200',
    optionSuccessStatus: 200
}
app.use(cors(optionsCors));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});