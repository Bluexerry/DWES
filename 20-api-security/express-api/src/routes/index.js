import { Router } from 'express';
import publicRoutes from './public.js';
import vipRoutes from './vip.js';
import adminRoutes from './admin.js';

const router = Router();

router.use('/public', publicRoutes);
router.use('/vip', vipRoutes);
router.use('/admin', adminRoutes);

export default router;