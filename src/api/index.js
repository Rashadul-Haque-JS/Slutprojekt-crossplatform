
import axiox from 'axios'

export const departureAPI = async() => {
    return await axiox.get(`https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=${process.env.REACT_APP_RESTID_KEY}`)
}

export const weatherAPI = async() => {
    return await axiox.get(`https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${process.env.REACT_APP_WEATHER_KEY}&&units=metric`)
}

