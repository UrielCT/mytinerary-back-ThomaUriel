//import cities from '../cities.js';
import City from '../Models/City.js';


const citiesController = {
    getAllCities: async (req, res, next) => {
        let cities;
        let error = null;
        let success = true;

        try {
        cities = await City.find()

        res.json({
            response: cities,
            success,
        })
            error
        } catch (e) {
            console.log(e)
            success = false;
            error = e
        }

        
    },


    getOneCity: async (req, res, next) => {
        //console.log(req.params);
        const {id} = req.params
        //console.log(id);
        let cities;
        let error = null;
        let success = true;


        try {
            cities = await City.findById(id)
        } catch (e) {
            console.log(e)
            success = false;
            error = e
        }

        //const city = cities.find(city => city.name === name)
        res.json({
            response: cities,
            success,
            error
        })
    },


    createOneCity: async (req, res, next) => {
        let city;
        let error = null;
        let success = true;

        try {
            /* const newCity = new City(req.body)
            await newCity.save()
            console.log(newCity); */
            
            city = await City.create(req.body)
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
    updateOneCity: async(req, res, next) => {
        const { id } = req.params
        let city;
        let success = true;
        try {
            city = await City.findOneAndUpdate({ _id: id}, req.body, { new : true });
            res.json({
                response: city,
                success,
            })
        } catch (e) {
            success = false;
            next(e);
        }

    },
    deleteOneCity: async(req, res, next)=>{
        const { id } = req.params
        let city;
        let success = true;
        try {
            city = await City.findOneAndDelete({ _id: id});
            res.json({
                response: city,
                success,
            })
        } catch (e) {
            success = false;
            next(e);
        }
    },


}

export default citiesController