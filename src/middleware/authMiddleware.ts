import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface UserPayload {
  id: string; 
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload; 
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401); // Retorna status 401 se o token estiver ausente
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Retorna status 403 se houver erro na verificação do token
    }
    req.user = user as UserPayload; // Anexa as informações do usuário decodificado ao objeto Request
    next(); // Chama o próximo middleware ou rota
  });
};
