const handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
        api: process.env.WEATHER_API_KEY
        }),
    }
}

export default handler