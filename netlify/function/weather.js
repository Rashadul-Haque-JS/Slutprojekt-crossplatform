
const axios = require('axios')

const weatherHandler = async (event, context) => {
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${process.env.WEATHER_API_KEY}&&units=metric`)
    return {
        statusCode: 200,
        body: JSON.stringify({
        api: response.data
        }),
    }
}

module.exports ={weatherHandler}