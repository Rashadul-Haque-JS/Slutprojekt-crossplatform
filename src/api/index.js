import axios from 'axios'

export const departureAPI = async() => {
    return await axios.get('/.netlify/functions/apiDeparture')
}

export const weatherAPI = async() => {
    return await axios.get('/.netlify/functions/apiWeather')
}

