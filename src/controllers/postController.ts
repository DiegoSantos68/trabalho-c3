import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Controlador para criar uma nova postagem
export const createPost = async (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;
  try {
    // Cria uma nova postagem utilizando o Prisma
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
    // Retorna a postagem criada com status 201 (Created)
    res.status(201).json(post);
  } catch (error) {
    // Em caso de erro, loga o erro e retorna status 500 (Internal Server Error)
    console.error('Erro ao criar a postagem:', error);
    res.status(500).json({ error: 'Erro ao criar a postagem' });
  }
};
