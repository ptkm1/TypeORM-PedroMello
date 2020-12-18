import { Request, Response } from 'express'
import { getRepository } from 'typeorm' // Metodo do typeorm para fazer querys

// Models que vamos usar
import Usuario from '../models/Usuario'

class UsuarioController{

  index(req:Request, res: Response){
    return res.send({ IDUsuario: req.IDUsuario })
  }

 async store(req: Request, res: Response){
    const repositiorio = getRepository(Usuario)

    const { email, senha } = req.body

    const usuarioExiste = await repositiorio.findOne({ where: { email }})

    if (usuarioExiste) {
      return res.sendStatus(409)
    }

    const DadosDoUsuario = repositiorio.create({ email, senha })

    await repositiorio.save(DadosDoUsuario)
    
    res.json(DadosDoUsuario)
  }

}

export default new UsuarioController();