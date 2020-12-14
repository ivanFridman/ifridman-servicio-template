import express, {query, Request, Response} from 'express';
import service from '../service/index';

const rutaEjemplo = async (req: Request, res: Response) => {
    try {
        let param;
        const response = await service.servicioEjemplo(param);
        res.status(200).send(response);
    } catch (e) {
        res.status(503).send();
    }
};

export default {rutaEjemplo};
