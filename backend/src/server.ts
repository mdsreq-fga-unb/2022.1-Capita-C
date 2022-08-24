import bodyParser from 'body-parser';
import express, { Router } from 'express';
import router from './routes/router';

const cors = require('cors');
const app = express();
app.get("/", (req, res) => res.send("Welcome"));

//middlewares: converte um .json num objeto
app.use(express.json()); 
app.use(bodyParser.json()) 
app.use(express.urlencoded({extended: false}));
app.use(cors({origin: true, credentials: true}));
app.use(router);

// porta usada para hostear a pagina
const port = 4000;
app.listen(port);
console.log("Server on port", port)
