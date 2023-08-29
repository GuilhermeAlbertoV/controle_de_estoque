import { Router } from "express";
import userController from "../controller/userController";

const router = Router();

router.get("/", (req, res) => {
  res.send("<h1>Olá<h1>");
});
router.post("/cadastro", userController.userCreate);

export default router;
