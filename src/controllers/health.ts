
import express, {Request, Response} from 'express';
import {logger} from '../configuration/log4js'; 
const router = express.Router();
const healthCheck = async (req: Request, res: Response) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const healthCheck = {
		uptime: process.uptime(),
		message: 'OK',
        date: today.toDateString(),
        statuscode: res.statusCode,
        status: res.status
	};
	try {
        logger.info(healthCheck);
		res.send(healthCheck);
	} catch (e) {
        healthCheck.message = e;
        logger.error(healthCheck.message)
		res.status(503).send();
	}
};
export default {healthCheck};