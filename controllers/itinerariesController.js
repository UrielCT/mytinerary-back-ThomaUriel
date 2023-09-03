import Itinerary from '../Models/Itinerary.js';
import City from '../Models/City.js';


const itinerariesController = {
    getAllItineraries: async (req, res, next) => {
        let itineraries;
        let error = null;
        let success = true;

        try {
            itineraries = await Itinerary.find()

        res.json({
            response: itineraries,
            success,
        })
            error
        } catch (e) {
            console.log(e)
            success = false;
            error = e
        }
    },

    getItinerariesFromCity: async (req, res, next) => {
        //console.log(req.params);
        const {city} = req.params
        //console.log(city);
        let itineraries;
        let error = null;
        let success = true;


        try {
            itineraries = await Itinerary.find({city: city});
            //console.log(itineraries);
        } catch (e) {
            console.log(e)
            success = false;
            error = e
        }

        //const city = cities.find(city => city.name === name)
        res.json({
            response: itineraries,
            success,
            error
        })
    },
    getOneItinerary: async (req, res, next) => {
        //console.log(req.params);
        const {id} = req.params
        //console.log(id);
        let itineraries;
        let error = null;
        let success = true;


        try {
            itineraries = await Itinerary.findById(id)
        } catch (e) {
            console.log(e)
            success = false;
            error = e
        }

        //const city = cities.find(city => city.name === name)
        res.json({
            response: itineraries,
            success,
            error
        })
    },


    createOneItinerary: async (req, res, next) => {
        let itinerary;
        let error = null;
        let success = true;

        try {
            /* const newCity = new City(req.body)
            await newCity.save()
            console.log(newCity); */

            const city = await City.findOne({_id : req.body.city})
            const query = {... req.body}
            query.city = city._id

            
            itinerary = await Itinerary.create(query)
        }catch(e){
            console.log(e)
            success = false;
            error = e
        }

        res.json({
            response: null, 
            success,
            error
        })
    },
    updateOneItinerary: async(req, res, next) => {
        const { id } = req.params
        let itinerary;
        let success = true;
        try {
            itinerary = await Itinerary.findOneAndUpdate({ _id: id}, req.body, { new : true });
            res.json({
                response: itinerary,
                success,
            })
        } catch (e) {
            success = false;
            next(e);
        }

    },
    deleteOneItinerary: async(req, res, next)=>{
        const { id } = req.params
        let itinerary;
        let success = true;
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id});
            res.json({
                response: itinerary,
                success,
            })
        } catch (e) {
            success = false;
            next(e);
        }
    },


}

export default itinerariesController