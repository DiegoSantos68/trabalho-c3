import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/posts', authenticateToken, (req, res) => {
    res.json({ message: 'Você está autenticado!' });
});

export default router;
