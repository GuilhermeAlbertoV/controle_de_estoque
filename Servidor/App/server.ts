import bodyParser from "body-parser";
import express from "express";
import Connection from "./DB/Connection";
import router from "./Routers/router";
const server = express();
const port = 5000;

class Server {
  constructor() {
    this.servidor();
    this.database();
    this.setting();
    this.routers();
  }

  setting() {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
  }

  database() {
    Connection.sequelize
      .authenticate()
      .then(() => {
        console.log("Realizando conexão...");
      })
      .catch((err) => {
        console.log(`Ocorreu um erro na conexão: ${err}`);
      })
      .finally(() => {
        console.log("Conexão executada com sucesso!!!");
      });
  }

  servidor() {
    server.listen(port, () => {
      console.log(`O Servidor está rodando em http://localhost:${port}`);
    });
  }
  routers() {
    server.use("", router);
  }
}
new Server();
