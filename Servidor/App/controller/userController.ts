import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserModal from "../Modals/UserModal";

async function userCreate(req: Request, res: Response) {
  try {
    const salt = 10; // definir qual o nível da criptografia
    if (!req.body.password) {
      return console.log("Senha não fornecida");
    }

    const passwordCrypt = bcrypt.hashSync(req.body.password, salt); // Criptografar a senha fornecida

    const data = {
      // constante que tem todos os dados
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: passwordCrypt,
      typeUser: req.body.typeUser,
    };

    const find = await UserModal.findOne({
      // procura um usuário que tem o username e email igual ao que foi fornecido
      where: {
        username: data.username,
        email: data.email,
      },
    });

    if (!find) {
      // caso não existe nenhum usuário igual ele vai criar com base nas informações fornecidas pelo client

      if (req.body.typeUser === "Client" || req.body.typeUser === "ADM") {
        const user = await UserModal.create(data);

        if (!user) {
          return console.log("Não foi possível efetuar o cadastro!!!");
        }
        return res.status(201).json({
          data: {
            message: "Usuário Cadastrado com Sucesso!!!",
            User: user,
          },
        });
      } else {
        throw new Error("Tipo de Usuário não permitido!!!");
      }
    } else {
      // caso existe um usuário que tenha  as mesmas credenciais como username e email
      return res.status(409).json({
        message:
          "Já existe outro usuário com essas credenciais, insira outro username e email",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {
        message: "Ocorreu um erro no servidor!!!",
      },
    });
  }
}

export default {
  userCreate,
};
