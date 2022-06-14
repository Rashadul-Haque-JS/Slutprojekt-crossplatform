
const axios = require('axios')
const response = await axios.get(`https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=${process.env.DEPARTURE_API_KEY}`)

const handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(response.data)
    }
}

module.exports ={handler}