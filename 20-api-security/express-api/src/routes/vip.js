import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', authMiddleware, (req, res) => {
  res.send('VIP access');
});

export default router;