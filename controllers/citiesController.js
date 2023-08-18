import cities from '../cities.js';


const citiesController = {
    getAllCities: (req, res, next) => {
        res.json({
            response: cities,
            success: true,
            error: null
        })
    },
    getOneCity: (req, res, next) => {
        const {name} = req.params

        const city = cities.find(city => city.name === name)
        res.json({
            response: city,
            success: true,
            error: null
        })
    },


}

export default citiesController