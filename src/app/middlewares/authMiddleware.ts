import { NextFunction, Request, Response } from 'express'

import jwt from 'jsonwebtoken'

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function AuthMiddleware(req: Request, res:Response, next: NextFunction): void | Response<any>
{
  const { authorization } = req.headers;

  if(!authorization) {
    return res.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, 'testeSecret')

    const { id } = data as TokenPayload


    req.IDUsuario = id
    return next()

  } catch {
    return res.sendStatus(401)
  }
}