import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Função para criar um novo comentário
export const createComment = async (req: Request, res: Response) => {
  const { postId, text } = req.body; // Extrai postId e text do corpo da requisição

  try {
    // Cria um novo comentário utilizando o Prisma
    const comment = await prisma.comment.create({
      data: {
        postId,
        text,
      },
    });

    // Retorna o comentário criado com status 201 (Criado com sucesso)
    res.status(201).json(comment);
  } catch (error) {
    // Em caso de erro, loga o erro no console e retorna um erro 500 (Erro interno do servidor)
    console.error('Erro ao criar o comentário:', error);
    res.status(500).json({ error: 'Falha ao criar o comentário' });
  }
};
