// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const axios = require('axios')
const handler = async (event) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${process.env.WEATHER_API_KEY}&&units=metric`)
    return {
        statusCode: 200,
        body: JSON.stringify(response.data)
    }
  } catch (error) {
    console.log('ERROR ', error)
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
