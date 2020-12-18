import {Router} from "express"

import AutenticacaoController from "./app/controllers/AutenticacaoController";
import UsuarioController from "./app/controllers/UsuarioController";
import AuthMiddleware from "./app/middlewares/authMiddleware";



const router = Router()

router.post('/usuarios', UsuarioController.store)
router.post('/autenticar', AutenticacaoController.autenticar)

router.get('/usuarios', AuthMiddleware, UsuarioController.index)

export default router;