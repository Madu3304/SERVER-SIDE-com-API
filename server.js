/* agora vou criara meu servidor aqui*/
/* importando a configuração do banco/conexao*/

import express from "express";
import db from "./config/config.js";
import cors from "cors";

/*agora vou chamar tudo aqui */
//models
import { Bicicleta } from "./models/bicicleta_model.js";
import { Escolha } from "./models/escolha_model.js";
import { Interessado } from "./models/interessado_model.js";


/* aqui estou importando as rotas.*/
//controller
import { router as bicicletaRouter } from "./routes/bicicleta_routes.js";
import { router as escolhaRouter } from "./routes/escolha_routes.js";
import { router as interessadoRouter} from "./routes/interessado_routes.js";


/*para garantir que vai criar tudo certinho na tabela. */

/*vou7 pegar toda a biblioteca do exp0ress e jogar em uma variavel*/
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// app.use(cors())
await db.drop();
await db.sync();

/* aqui estou falando para a APP usar a rotas.*/
app.use(bicicletaRouter);
app.use(escolhaRouter);
app.use(interessadoRouter);



const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log("servidsor está rodando na porta 5000"))
