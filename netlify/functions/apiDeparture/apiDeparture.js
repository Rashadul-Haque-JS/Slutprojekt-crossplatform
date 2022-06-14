// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const axios = require('axios')

const handler = async (event) => {
  try {
    const response = await axios.get(`https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=${process.env.DEPARTURE_API_KEY}`)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
  }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
