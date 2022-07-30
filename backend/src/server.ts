import bodyParser from 'body-parser';
import express, { Router } from 'express';

const cors = require('cors');
const app = express();
const index = require('./router/index');
const userRoute = require('./router/user.routes');

//middlewares: converte um .json num objeto
app.use(express.json()); // rest API
app.use(bodyParser.json()) // pegar o body de um request
app.use(express.urlencoded({extended: false})); // formulario html
app.use(cors());
app.use(userRoute);

// porta usada para hostear a pagina
const port = 4000;
app.listen(port);
console.log("Server on port", port)
