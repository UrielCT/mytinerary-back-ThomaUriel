import { Router } from 'express';
import citiesController from '../controllers/citiesController.js';


const citiesRouter = Router();
const { getAllCities, getOneCity, createOneCity, updateOneEvent, deleteOneEvent} = citiesController


citiesRouter.get('/', getAllCities);
citiesRouter.post('/', createOneCity);
citiesRouter.get('/:id', getOneCity);
citiesRouter.put('/:id', updateOneEvent);
citiesRouter.delete('/:id', deleteOneEvent);

export default citiesRouter