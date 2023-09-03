import { Router } from 'express';
import itinerariesController from '../controllers/itinerariesController.js';


const itinerariesRouter = Router();
const { getAllItineraries,getItinerariesFromCity, getOneItinerary, createOneItinerary, updateOneItinerary, deleteOneItinerary} = itinerariesController


itinerariesRouter.get('/', getAllItineraries);
itinerariesRouter.get('/:city', getItinerariesFromCity);
itinerariesRouter.get('/:id', getOneItinerary);
itinerariesRouter.post('/', createOneItinerary);
itinerariesRouter.put('/:id', updateOneItinerary);
itinerariesRouter.delete('/:id', deleteOneItinerary);

export default itinerariesRouter