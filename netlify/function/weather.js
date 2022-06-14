
const axios = require('axios')

const handler = async (event, context) => {
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${process.env.WEATHER_API_KEY}&&units=metric`)
    return {
        statusCode: 200,
        body: JSON.stringify(response.data)
    }
}

module.exports ={handler}