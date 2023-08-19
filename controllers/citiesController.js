//import cities from '../cities.js';
import City from '../Models/City.js';


const citiesController = {
    getAllCities: async (req, res, next) => {
        let cities;
        let error = null;
        let success = true;

        try {
        cities = await City.find()
        } catch (e) {
            console.log(e)
            success = false;
            error = e
        }

        res.json({
            response: cities,
            success,
            error
        })
    },


    getOneCity: async (req, res, next) => {
        console.log(req.params);
        const {id} = req.params
        console.log(id);
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



}

export default citiesController