import express from 'express'
import controller from '../controllers/index'
import healthController from '../controllers/health'

const router = express.Router()
router.get('/ruta-ejemplo', controller.rutaEjemplo)

router.get('/user-page', controller.userPage)
router.get('/admin-page', controller.adminPage)
router.get('/full-user-page', controller.fullUserPage)

router.get('/health', healthController.healthCheck)

export default router
