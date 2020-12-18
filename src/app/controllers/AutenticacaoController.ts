import { Request, Response } from 'express'
import { getRepository } from 'typeorm' // Metodo do typeorm para fazer querys

import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Models que vamos usar
import Usuario from '../models/Usuario'

class AutenticacaoController {
	async autenticar(req: Request, res: Response) {
		const repositiorio = getRepository(Usuario)
		const { email, senha } = req.body

		const usuario = await repositiorio.findOne({ where: { email } })

		if (!usuario) {
			return res.sendStatus(401)
		}

		const senhaValida = await bcryptjs.compare(senha, usuario.senha)

		if (!senhaValida) {
			return res.sendStatus(401)
		}

		const token = jwt.sign({ id: usuario.id }, 'testeSecret', { expiresIn: '1d' })

		delete usuario.senha

		res.json({
			usuario,
			token,
		})
	}
}

export default new AutenticacaoController();
