import { Request, Response } from 'express'
import service from '../service/index'

const rutaEjemplo = async (req: Request, res: Response) => {
  try {
    let param
    const response = await service.servicioEjemplo(param)
    res.status(200).send(response)
  } catch (e) {
    res.status(503).send()
  }
}

const userPage = async (req: Request, res: Response) => {
  try {
    let param
    const response = await service.userService(param)
    res.status(200).send(response)
  } catch (e) {
    res.status(503).send()
  }
}

const adminPage = async (req: Request, res: Response) => {
  try {
    let param
    const response = await service.adminService(param)
    res.status(200).send(response)
  } catch (e) {
    res.status(503).send()
  }
}

const fullUserPage = async (req: Request, res: Response) => {
  try {
    let param
    const response = await service.fullUserService(param)
    res.status(200).send(response)
  } catch (e) {
    res.status(503).send()
  }
}

export default { rutaEjemplo, userPage, adminPage, fullUserPage }
