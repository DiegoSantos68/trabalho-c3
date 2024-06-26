import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {

  const user = {
    id: 'user_id_here',
    username: 'username_here'

  };

  jwt.sign(user, process.env.JWT_SECRET as string, (err, token) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao gerar token JWT' });
      return;
    }
    res.json({ token });
  });
};
