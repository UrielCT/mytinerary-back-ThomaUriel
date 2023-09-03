import { Router } from 'express';
import citiesRouter from './citiesRouter.js';
import itinerariesRouter from './itinerariesRouter.js';

const indexRouter = Router();

indexRouter.get('/', (req,res,next) => {
    res.send("Bienvenido a mi servidor en /api")
})

indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)

export default indexRouter