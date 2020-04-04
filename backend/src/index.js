/* 
    Rotas
    Recursos -> depois da barra são os recursos
*/
/* 
    Tipos de parametros
    Query: Parametros nomeados enviados na rota apos "?"
*/
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);