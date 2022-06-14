
const axios = require('axios')
const response = await axios.get(`https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=${process.env.DEPARTURE_API_KEY}`)

const departureHandler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
        api: response.data
        }),
    }
}

module.exports ={departureHandler}