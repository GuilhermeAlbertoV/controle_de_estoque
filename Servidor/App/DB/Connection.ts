import { Sequelize } from "sequelize";
const sequelize = new Sequelize("controle_de_estoque", "root", "root", {
  port: 3308,
  host: "localhost",
  dialect: "mysql",
});

export default { sequelize: sequelize };
