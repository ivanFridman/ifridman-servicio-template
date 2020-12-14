import express from 'express';
import controller from '../controllers/index';
import healthController from '../controllers/health';

const router = express.Router();
router.get('/ruta-ejemplo', controller.rutaEjemplo);
router.get('/health', healthController.healthCheck);

export default router;

